<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="editarTarea(tarea)">
      <input
        type="text"
        v-model="$v.tarea.nombre.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.tarea.nombre.required">
        Campo Requerido
      </small>
      <button class="btn btn-warning" :disabled="$v.tarea.$invalid">
        Editar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTarea(this.id);
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"]),
  },
  computed: {
    ...mapState(["tarea"]),
  },
  validations: {
    tarea: {
      nombre: { required },
    },
  },
};
</script>
