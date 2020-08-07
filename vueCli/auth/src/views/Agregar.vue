<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="agregarTarea(nombre)">
      <input
        type="text"
        v-model="$v.nombre.$model"
        class="form-control mb-2"
        placeholder="Añadir tarea"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.nombre.required">
        Campo Requerido
      </small>
      <small class="text-danger d-block mb-2" v-if="!$v.nombre.minLength">
        Mínimo 5 carácteres
      </small>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="$v.$invalid || carga"
      >
        Agregar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Agregar",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions(["agregarTarea"]),
  },
  validations: {
    nombre: { required, minLength: minLength(5) },
  },
  computed: {
    ...mapState(["carga"]),
  },
};
</script>
