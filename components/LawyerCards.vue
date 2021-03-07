<template>
	<v-row justify="center" align="center">
		<v-col v-for="(lawyer, i) in lawyers" :key="i" cols="12" sm="10" md="9" lg="8" xl="7">
			<v-card
				class="lawyer lawyer__card pa-5"
				:class="{ 'lawyer__card--sm_and_up': $vuetify.breakpoint.smAndUp }"
				elevation="10"
			>
				<v-card-actions>
					<v-avatar
						class="lawyer lawyer__img"
						:class="{ 'lawyer__img--xs': $vuetify.breakpoint.xsOnly }"
						size="180"
					>
						<v-img :src="lawyer.src" :lazy-src="lawyer.lazyUrl" :alt="lawyer.name">
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
				</v-card-actions>

				<div>
					<v-card-title class="headline break-word" v-text="lawyer.name"></v-card-title>
					<v-card-subtitle> OAB/GO Nº {{ lawyer.oab }}</v-card-subtitle>
					<v-card-text v-text="lawyer.summary"></v-card-text>
				</div>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		data: () => ({
			lawyers: [
				{
					src: '/lawyers/ricardo.webp',
					lazyUrl: '/lawyers/ricardo_lqip.webp',
					name: 'Dr. Ricardo Calil',
					oab: '12.120',
					summary:
						'Advogado atuante desde 1992, articulista e com diversos artigos publicados em jornais e revistas especializadas em direito. Também é ex-presidente da OAB de Itaberaí, presidente atual da Academia Itaberina de Letras e Artes (AILA) e sócio-fundador da Confraria Internacional de Literatura e Artes (CILA).',
				},
				{
					src: '/lawyers/lucilo.webp',
					lazyUrl: '/lawyers/lucilo_lqip.webp',
					name: 'Dr. Lucilo Neto',
					oab: '47.557',
					summary:
						'Advogado formado na Puc/GO em 2015, pós-graduado em prática trabalhista e previdenciária.',
				},
			],
		}),
	}
</script>

<style lang="scss" scoped>
	.lawyer {
		&__card {
			&--sm_and_up {
				display: flex;
				justify-content: flex-start;
			}
		}
		&__img {
			&--xs {
				position: relative;
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
</style>
