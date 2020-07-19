<template>
  <div class="mt-5">
    <h1>Formulario</h1>
    <form>
      <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
      <small v-if="!comprobar">Mínimo tres carácteres</small>
    </form>
    <p>Texto: {{ texto }}</p>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      texto: ""
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>