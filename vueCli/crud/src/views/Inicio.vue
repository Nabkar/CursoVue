<template>
  <div>
    <h1>Inicio</h1>
    <router-link :to="{name: 'Agregar'}">
      <button>Agregar</button>
    </router-link>
    <ul>
      <li v-for="(item,index) in tareas" :key="index">
        {{ item.nombre }} - {{ item.id }}
        <router-link :to="{name: 'Editar', params: {id: item.id}}">
          <button >Editar</button>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Inicio",
  created (){
    this.getTareas()
  },
  methods: {
    ...mapActions(['getTareas'])
  },
  computed: {
    ...mapState(['tareas'])
  }
}
</script>

<style>

</style>
