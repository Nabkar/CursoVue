<template>
  <div>
    <h1>Acceso de usuarios</h1>
    <form @submit.prevent="loginUsuario({email: email, password: pass})">
      <input type="email" placeholder="Ingresa tu correo" v-model="email" class="form-control mb-2" />
      <input type="password" placeholder="Password" v-model="pass" class="form-control mb-2" />
      <button type="submit" class="btn btn-primary">Acceder</button>
      <p>{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Acceso",
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["loginUsuario"])
  },
  computed: {
    ...mapState(["error"])
  }
};
</script>

<style>
</style>