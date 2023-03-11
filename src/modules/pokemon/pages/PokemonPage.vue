<template>
	<h1>{{ title }}</h1>
	<h4>Pokemon #{{ id }}</h4>
	<div v-if="pokemon">
		<img :src="pokemon.sprites.back_default" :alt="pokemon.species.name">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.species.name">
		<img :src="pokemon.sprites.back_shiny" :alt="pokemon.species.name">
		<img :src="pokemon.sprites.front_shiny" :alt="pokemon.species.name">
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		props: {
			id: {
				type: Number,
				required: true,
			},
		},
		data() {
			return {
				title: "Pokemon",
				pokemon:null
			};
		},
		created() {
			this.getPokemon();
		},
		methods: {
			async getPokemon() {
			
				this.pokemon = await axios
					.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
					.then((response) => response.data);
				// console.log("pokemon", this.pokemon);
			},
		},
		watch:{
			id(){
				this.getPokemon();
			}
		}
	};
</script>
