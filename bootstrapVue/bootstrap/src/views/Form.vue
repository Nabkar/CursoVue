<template>
  <div class="mt-5">
    <h1>Formulario</h1>
    <form>
      <b-row>
        <b-col md="3">
          <b-form-input
            type="text"
            v-model="texto"
            :state="comprobar"
          ></b-form-input>
          <small v-if="!comprobar">Mínimo tres carácteres</small>
          <p>Texto: {{ texto }}</p>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select>
          <p>{{ select }}</p>
        </b-col>
        <b-col md="3">
          <b-form-radio-group
            v-model="radio"
            :options="animalesRadio"
          ></b-form-radio-group>
          <p>{{ radio }}</p>
        </b-col>
        <b-col md="3">
          <b-form-checkbox-group
            v-model="check"
            :options="animalesRadio"
          ></b-form-checkbox-group>
          <p>{{ check }}</p>
        </b-col>
      </b-row>
    </form>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      select: null,
      animales: [
        { value: null, text: "Selecciona un animal" },
        { value: "perro", text: "Guau guau" },
        { value: "gato", text: "Miau" },
        { value: "pato", text: "Cuack" },
      ],
      radio: null,
      animalesRadio: [
        { value: "perro", text: "Guau guau" },
        { value: "gato", text: "Miau" },
        { value: "pato", text: "Cuack" },
      ],
      check: [],
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    },
  },
};
</script>
