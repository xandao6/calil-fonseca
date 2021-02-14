<template>
	<div>
		<v-card
			class="lawyer lawyer__card"
			:class="{ 'lawyer__card--sm_and_up': $vuetify.breakpoint.smAndUp }"
			elevation="10"
		>
			<v-card-title class="headline justify-center">Áreas de Atuação</v-card-title>
			<v-row no-gutters>
				<v-col v-for="(area, i) in areas" :key="i" align="center" cols="3">
					<v-avatar class="ma-3" size="125" tile>
						<v-img :src="area.src" :alt="area.name" />
					</v-avatar>
					<v-card-text class="headline" v-text="area.title"></v-card-text>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>

<script>
	export default {
		data: () => ({
			areas: [
				{
					src: '/expertise_areas/trabalhista.svg',
					title: 'Trabalhista',
					description: '',
				},
				{
					src: '/expertise_areas/previdenciario.svg',
					title: 'Previdenciário',
					description: '',
				},
				{
					src: '/expertise_areas/civil.svg',
					title: 'Cívil',
					description: '',
				},
				{
					src: '/expertise_areas/consumidor.svg',
					title: 'Consumidor',
					description: '',
				},
				{
					src: '/expertise_areas/criminal.svg',
					title: 'Criminal',
					description: '',
				},
				{
					src: '/expertise_areas/familia.svg',
					title: 'Família',
					description: '',
				},
				{
					src: '/expertise_areas/contratual.svg',
					title: 'Contratual',
					description: '',
				},
				{
					src: '/expertise_areas/imobiliario.svg',
					title: 'Imobiliário',
					description: '',
				},
			],
		}),
	}
</script>

<style lang="scss" scoped></style>
