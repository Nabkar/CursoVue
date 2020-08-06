<template>
  <div class="mt-5">
    <h1>Vuelidate</h1>
    <form>
      <input
        type="email"
        placeholder="Introduce un email"
        class="form-control my-3"
        v-model="$v.email.$model"
        :class="{ 'is-invalid': $v.email.$error }"
      />
      <p class="tesxt-danger" v-if="!$v.email.email">
        Esta email es incorrecto
      </p>
      <!-- <p>{{ $v.email }}</p> -->
      <input
        type="password"
        placeholder="Introduce una contraseña"
        class="form-control my-3"
        v-model="$v.password.$model"
      />
      <p class="tesxt-danger" v-if="!$v.password.minLength">
        Mínimo 6 caracteres
      </p>
      <input
        type="password"
        placeholder="Repite la contraseña"
        class="form-control my-3"
      />
    </form>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  name: "Validaciones",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
};
</script>
