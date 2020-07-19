<template>
  <div>
    <h1>Lista de Tareas de: {{ usuario.email }}</h1>
    <router-link to="/agregar">
      <button class="btn btn-primary mb-2">Agregar</button>
    </router-link>
    <ul class="list-group">
      <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
        {{item.id}} - {{item.nombre}}
        <router-link :to="{name: 'Editar', params: {id: item.id}}" class="float-right">
          <button class="btn btn-warning ml-2">Editar</button>
        </router-link>
        <button @click="eliminarTarea(item.id)" class="btn btn-danger float-right">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Inicio",
  computed: {
    ...mapState(["usuario", "tareas"])
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"])
  },
  created() {
    this.getTareas();
  }
};
</script>

<style lang="scss" scoped>
</style>