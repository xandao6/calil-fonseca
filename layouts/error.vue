<template>
	<v-row>
		<v-col class="text-center">
			<h1 v-if="error.statusCode === 404">
				{{ pageNotFound }}
			</h1>
			<h1 v-else>
				{{ otherError }}
			</h1>
			<v-btn class="mt-10" elevation="6" large to="/" nuxt>Início</v-btn>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		layout: 'empty',
		props: {
			error: {
				type: Object,
				default: null,
			},
		},
		data() {
			return {
				pageNotFound: '404 Página não encontrada',
				otherError: 'Ocorreu um erro',
			}
		},
		head() {
			const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
			return {
				title,
			}
		},
	}
</script>

<style scoped>
	h1 {
		font-size: 20px;
	}
</style>
