<template>
  <div>
    <h1>Acceso de usuarios</h1>
    <form @submit.prevent="loginUsuario({ email: email, password: pass })">
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
        v-model="$v.pass.$model"
        class="form-control mb-2"
      />
      <small class="text-danger d-block mb-2" v-if="!$v.pass.minLength">
        Mínimo 6 carácteres
      </small>
      <small class="text-danger d-block mb-2" v-if="!$v.pass.required">
        Campo Requerido
      </small>
      <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">
        Acceder
      </button>
      <p v-if="error">Usuario o contraseña incorrecta</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "Acceso",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    ...mapActions(["loginUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
  },
  validations: {
    email: {
      required,
      email,
    },
    pass: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>

<style></style>
