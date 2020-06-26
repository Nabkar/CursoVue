<template>
  <div>
    <h1>Inicio</h1>
    <ul>
      <li v-for="(item,index) in tareas" :key="index">
        {{ item.nombre }} - {{ item.id }}
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
