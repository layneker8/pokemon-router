<template>
	<a :href="link.to" v-if="isExternalLink" target="_blank">{{ link.name }}</a>

	<router-link v-else :to="route" v-slot="{ href, isActive }">
		<a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{
			link.name
		}}</a>
	</router-link>
</template>

<script>
	export default {
		props: {
			link: {
				type: Object,
				required: true,
			},
		},
		computed: {
			isExternalLink() {
				return this.link.to.startsWith("http");
			},
			route() {
				return this.link.id === undefined
					? { name: this.link.to }
					: { name: this.link.to, params: { id: this.link.id } };
			},
		},
	};
</script>

<style scoped>
	.is-active {
		color: #fff;
		background-color: brown;
		border-radius: 20px;
	}

	.normal-link {
		color: #bc1515;
	}
</style>
