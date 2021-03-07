<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="10" md="9" lg="8" xl="7">
			<v-card elevation="10">
				<v-card-title class="headline break-word justify-center"
					>Áreas de Atuação</v-card-title
				>
				<v-row no-gutters>
					<v-col v-for="(area, i) in areas" :key="i" align="center" cols="6" sm="3">
						<v-img
							class="ma-3"
							:width="areaWidth"
							:height="areaHeight"
							:src="area.src"
							:lazy-src="area.lazyUrl"
							:alt="area.name"
						>
							<template v-slot:placeholder>
								<v-row class="fill-height ma-0" align="center" justify="center">
									<v-progress-circular
										indeterminate
										color="grey lighten-5"
									></v-progress-circular>
								</v-row>
							</template>
						</v-img>
						<v-card-text v-text="area.title"></v-card-text>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		data: () => ({
			areas: [
				{
					src: '/expertise_areas/trabalhista.svg?webp',
					lazyUrl: '/expertise_areas/trabalhista.svg?lqip',
					title: 'Trabalhista',
					description: '',
				},
				{
					src: '/expertise_areas/previdenciario.svg?webp',
					lazyUrl: '/expertise_areas/previdenciario.svg?lqip',
					title: 'Previdenciário',
					description: '',
				},
				{
					src: '/expertise_areas/civil.svg?webp',
					lazyUrl: '/expertise_areas/civil.svg?lqip',
					title: 'Cívil',
					description: '',
				},
				{
					src: '/expertise_areas/consumidor.svg?webp',
					lazyUrl: '/expertise_areas/consumidor.svg?lqip',
					title: 'Consumidor',
					description: '',
				},
				{
					src: '/expertise_areas/familia.svg?webp',
					lazyUrl: '/expertise_areas/familia.svg?lqip',
					title: 'Família',
					description: '',
				},
				{
					src: '/expertise_areas/imobiliario.svg?webp',
					lazyUrl: '/expertise_areas/imobiliario.svg?lqip',
					title: 'Imobiliário',
					description: '',
				},
				{
					src: '/expertise_areas/contratual.svg?webp',
					lazyUrl: '/expertise_areas/contratual.svg?lqip',
					title: 'Contratual',
					description: '',
				},
				{
					src: '/expertise_areas/criminal.svg?webp',
					lazyUrl: '/expertise_areas/criminal.svg?lqip',
					title: 'Criminal',
					description: '',
				},
			],
		}),
		computed: {
			areaWidth() {
				return 50
			},
			areaHeight() {
				return 50
			},
		},
	}
</script>

<style lang="scss" scoped></style>
