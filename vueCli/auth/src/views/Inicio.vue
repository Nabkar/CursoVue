<template>
  <div>
    <h2>Lista de tareas de: {{ usuario.email }}</h2>
    <router-link to="/agregar">
      <button class="btn btn-primary btn-block mb-2">Agregar</button>
    </router-link>
    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando datos...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>
    <ul class="list-group" v-if="!carga">
      <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
        {{ item.id }} - {{ item.nombre }}
        <router-link
          :to="{ name: 'Editar', params: { id: item.id } }"
          class="float-right"
        >
          <button class="btn btn-warning ml-2">Editar</button>
        </router-link>
        <button
          @click="eliminarTarea(item.id)"
          class="btn btn-danger float-right"
        >
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "Inicio",
  components: {
    PulseLoader,
  },
  computed: {
    ...mapState(["usuario", "tareas", "carga"]),
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  created() {
    this.getTareas();
  },
};
</script>

<style lang="scss" scoped></style>
