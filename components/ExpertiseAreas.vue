<template>
	<section id="expertise-areas">
		<v-card elevation="10">
			<v-card-title class="headline justify-center">Áreas de Atuação</v-card-title>
			<v-row no-gutters>
				<v-col v-for="(area, i) in areas" :key="i" align="center" cols="3">
					<v-avatar class="ma-3" size="125" tile>
						<v-img :src="area.src" :lazy-src="area.lazyUrl" :alt="area.name">
							<template v-slot:placeholder>
								<v-row class="fill-height ma-0" align="center" justify="center">
									<v-progress-circular
										indeterminate
										color="grey lighten-5"
									></v-progress-circular>
								</v-row>
							</template>
						</v-img>
					</v-avatar>
					<v-card-text class="headline" v-text="area.title"></v-card-text>
				</v-col>
			</v-row>
		</v-card>
	</section>
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
	}
</script>

<style lang="scss" scoped></style>
