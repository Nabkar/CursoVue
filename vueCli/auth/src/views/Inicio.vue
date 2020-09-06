<template>
  <div>
    <h2>Lista de tareas de: {{ usuario.email }}</h2>
    <router-link to="/agregar">
      <button class="btn btn-primary btn-block mb-2">Agregar</button>
    </router-link>
    <from @submit.prevent="buscador(texto)">
      <input
        type="text"
        placeholder="Buscar..."
        class="form-control mt-5"
        v-model="texto"
        v-on:keyup="buscador(texto)"
      />
    </from>
    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando datos...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>
    <ul class="list-group mt-5" v-if="!carga">
      <li
        v-for="(item, index) in arrayFiltrado"
        :key="index"
        class="list-group-item"
      >
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
import { mapState, mapActions, mapGetters } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "Inicio",
  components: {
    PulseLoader,
  },
  data() {
    return {
      texto: "",
    };
  },
  computed: {
    ...mapState(["usuario", "tareas", "carga"]),
    ...mapGetters(["arrayFiltrado"]),
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea", "buscador"]),
  },
  created() {
    this.getTareas();
  },
};
</script>

<style lang="scss" scoped></style>
