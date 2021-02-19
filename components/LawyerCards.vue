<template>
	<section id="lawyer-cards">
		<v-row justify="center" align="center" dense>
			<v-col v-for="(lawyer, i) in lawyers" :key="i" cols="12">
				<v-card
					class="lawyer lawyer__card"
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

					<div class="content">
						<v-card-title class="headline" v-text="lawyer.name"></v-card-title>
						<v-card-subtitle> OAB/GO Nº {{ lawyer.oab }}</v-card-subtitle>
						<v-card-text v-text="lawyer.summary"></v-card-text>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</section>
</template>

<script>
	export default {
		data: () => ({
			lawyers: [
				{
					src: '/lawyers/ricardo_com_fundo.png?webp',
					lazyUrl: '/lawyers/ricardo_com_fundo.png?lqip',
					name: 'Dr. Ricardo Calil',
					oab: '12.120',
					summary: 'Ex. presidente da OAB de Itaberaí e advogado atuando desde 1992.',
				},
				{
					src: '/lawyers/lucilo_com_fundo.png?webp',
					lazyUrl: '/lawyers/lucilo_com_fundo.png?lqip',
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
			justify-content: center;
			align-items: center;
			margin: 25px;
			padding: 20px;
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
