<template>
	<div>
		<h1>Galería de fotos</h1>

		<router-link :to="{ name: 'Fotos', params: {id: item} }" 
			v-for="(item,index) of fotos" :key="index">
			<button>Foto {{ item }} </button>
		</router-link>
		
		<Foto />
	</div>
</template>

<script>
import Foto from '@/components/Foto.vue'
export default {
	name: 'Fotos',
	components: {
		Foto
	},
	data () {
		return {
			fotos: [1,2,3]
		}
	}
}
</script>

<style>

</style>