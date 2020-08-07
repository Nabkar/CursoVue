<template>
  <div>
    <h1>Registro de usuarios</h1>
    <form @submit.prevent="crearUsuario({ email: email, password: pass1 })">
      <input
        type="email"
        placeholder="Ingresa tu correo"
        v-model="$v.email.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.email.required">
        Campo Requerido
      </small>
      <small class="text-danger d-block mb-2" v-if="!$v.email.email">
        Email no válido
      </small>
      <input
        type="password"
        placeholder="Password"
        v-model="$v.pass1.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.pass1.minLength">
        Mínimo 6 carácteres
      </small>
      <small class="text-danger d-block mb-2" v-if="!$v.pass1.required">
        Campo Requerido
      </small>
      <input
        type="password"
        placeholder="Repite el password"
        v-model="$v.pass2.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.pass2.sameAs">
        Contraseña no coincide
      </small>
      <button type="submit" :disabled="!desactivar" class="btn btn-primary">
        Registrar usuario
      </button>
    </form>
    <p v-if="error">
      {{
        error === "auth/email-already-in-use"
          ? "Email ya utilizado"
          : "Ocurrió un problema por favor intentar más tarde"
      }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  methods: {
    ...mapActions(["crearUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return (
        this.pass1 === this.pass2 &&
        this.pass1.trim() !== "" &&
        this.pass1.length > 5
      );
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    pass1: {
      required,
      minLength: minLength(6),
    },
    pass2: {
      sameAs: sameAs("pass1"),
    },
  },
};
</script>

<style></style>
