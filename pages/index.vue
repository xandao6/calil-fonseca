<template>
	<div>
		<v-row justify="center" align="center">
			<v-col cols="12" sm="8" md="6">
				<div class="text-center"></div>
				<v-card elevation="10">
					<v-card-title class="headline">
						Ricardo Calil & Advogados Associados
					</v-card-title>
					<v-card-text>
						<p>Seja bem-vindo ao nosso escritório!</p>
					</v-card-text>
					<v-card-actions> </v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<lawyer-cards> </lawyer-cards>
	</div>
</template>

<script>
	import LawyerCards from '~/components/LawyerCards.vue'
	export default {
		components: {
			LawyerCards,
		},
		layout: (ctx) => (ctx.isMobile ? 'mobile' : 'default'),
		data() {
			return {}
		},
	}
</script>
