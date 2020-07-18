import Vue from 'vue'
import Vuex from 'vuex'
import {auth, db} from '../firebase'
import router from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null,
    tareas: [],
    tarea: {nombre: '', id: ''}
  },
  mutations: {
    setUsuario (state, payload) {
      state.usuario = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setTareas(state, payload){
      state.tareas = payload
    },
    setTarea(state, payload){
      state.tarea = payload
    },
    setEliminarTarea(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    getTareas({commit, state}){
      const tareas = []
      db.collection(state.usuario.email).get()
        .then(res => {
          res.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
        commit('setTareas', tareas)
      })
    },
    getTarea({commit, state}, id){
      db.collection(state.usuario.email).doc(id).get()
        .then(doc => {
          // console.log(doc.data())
          // console.log(doc.id)
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)
        })
    },
    editarTarea({commit, state}, tarea){
      db.collection(state.usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(() => {
        router.push({name: 'Inicio'})
      })
    },
    agregarTarea({commit, state}, nombreTarea){
      db.collection(state.usuario.email).add({
        nombre: nombreTarea
      })
      .then(doc => {
        router.push({name: 'Inicio'})
      })
      .catch(error => console.log(error))
    },
    eliminarTarea({commit, state}, id){
      db.collection(state.usuario.email).doc(id).delete()
      .then(() => {
        commit('setEliminarTarea', id)
      })
      .catch(error => console.log(error))
    },
    crearUsuario ({commit}, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then (res => {
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid
          }
          db.collection(usuarioCreado.email).add( {
            nombre: 'Tarea de ejemplo'
          })
            .then (doc => {
              commit('setUsuario', usuarioCreado)
              router.push('/')
            })
            .catch (error => console.log(error))
        })
        .catch (error => {
          commit('setError', error)
        })
    },
    loginUsuario ({commit}, usuario) {
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then (res => {
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuario)
          router.push('/')
        })
        .catch (error => {
          commit('setError', error)
        })
    },
    cerrarSesion({commit}) {
      auth.signOut()
        .then(() => {
          router.push('/login')
        })
    },
    detectarUsuario ({commit}, usuario) {
      commit('setUsuario', usuario)
    }
  },
  getters: {
    existeUsuario(state) {
      if (state.usuario === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {
  }
})
