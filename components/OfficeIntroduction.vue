<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="8" md="6">
			<v-card elevation="10">
				<v-card-title class="headline justify-center" v-text="title"></v-card-title>
				<v-card-text class="text-center" v-text="greetings"></v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		data: () => ({
			title: 'Ricardo Calil & Advogados Associados',
			greetings: 'Seja bem-vindo ao nosso escritório!',
		}),
	}
</script>

<style lang="scss" scoped></style>
