<template>
	<div class="navbar">
		<!-- <li>
			<router-link :to="{name:'Home'}">List pokemon</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'PokemonId', params: { id: 100 } }"
				>pokemon</router-link
			>
		</li>
		<li>
			<router-link :to="{name:'About'}">About</router-link>
		</li> -->
		<CustomLinks v-for="link in links" :key="link.to" :link="link" />
	</div>
</template>
<script>
	import { defineAsyncComponent } from "vue";
	export default {
		data() {
			return {
				links: [
					{ to: "layout-pokemon", name: "Pokemon" },
					{ to: "pokemon-id", name: "Pokemon por ID" ,id: 100 },
					{ to: "layout-dbz", name: "DBZ" },
					{ to: "https://google.com", name: "Google" },
				],
			};
		},
		components: {
			CustomLinks: defineAsyncComponent(() => import("./CustomLinks")),
		},
	};
</script>

<style scoped>
	.navbar {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-bottom: 1rem;
	}
	.navbar li {
		list-style-type: none;
	}
	.navbar li a {
		text-decoration: none;
		color: black;
		padding: 10px 20px;
		font-weight: bold;
		transition: 300ms ease-in all;
	}
	.navbar li a:hover {
		text-decoration: underline;
		color: brown;
	}
	.navbar li a.router-link-exact-active {
		color: #fff;
		background-color: brown;
		border-radius: 20px;
	}
</style>
