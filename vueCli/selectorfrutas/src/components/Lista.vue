<template>
  <div>
	  <ul class="list-group">
      <li v-for="item of frutas" :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{item.nombre}}
        <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Lista',
  computed: {
    ...mapState(['frutas'])
  }
}
</script>

<style>

</style>