import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase'
import router from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {id: '', nombre: ''}
  },
  mutations: {
    setTareas (state, payload) {
      state.tareas = payload
    },
    setTarea (state, payload) {
      state.tarea = payload
    },
    setEliminarTarea(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    getTareas ({commit}) {
      const tareas = []
      db.collection('tareas').get()
        .then(res => {
          res.forEach(doc => {
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
          commit('setTareas', tareas)
        })
    },
    getTarea ({commit}, idTarea) {
      db.collection('tareas').doc(idTarea).get()
        .then(doc => {
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)

        })
    },
    editarTarea({commit}, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
        .then(() => {
          router.push('/')
        })
    },
    agregarTarea({commit}, nombreTarea) {
      db.collection('tareas').add({
        nombre: nombreTarea
      })
        .then(doc => {
          router.push('/')
        })
    },
    eliminarTarea({commit, dispatch}, idTarea) {
      db.collection('tareas').doc(idTarea).delete()
      .then(() => {
        console.log('Tarea eliminada')
        // dispatch('getTareas') -> Esto actualiza los datos a coste de un llamada a bd
        commit('setEliminarTarea', idTarea)
      })
    }
  },
  modules: {
  }
})
