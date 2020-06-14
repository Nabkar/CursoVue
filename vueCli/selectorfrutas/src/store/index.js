import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    frutas: [ 
      {nombre: 'Manzana', cantidad: '0'},
      {nombre: 'Pera', cantidad: '0'},
      {nombre: 'Platano', cantidad: '0'}
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
