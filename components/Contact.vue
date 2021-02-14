<template>
	<div>
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
							<v-img :src="lawyer.src" :alt="lawyer.name" />
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
	</div>
</template>

<script>
	export default {
		data: () => ({
			areas: [
				{
					src: '/ricardo_com_fundo.png',
					name: 'Dr. Ricardo Calil',
					oab: '12.120',
					summary:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit quam, posuere dignissim consectetur et, interdum hendrerit quam. Suspendisse non leo sed dolor aliquam aliquam. Fusce in volutpat nulla. Nulla ultrices egestas auctor. Donec tempus et metus ut porta. Nunc elementum turpis eget varius lobortis.',
				},
				{
					src: '/lucilo_com_fundo.png',
					name: 'Dr. Lucilo Neto',
					oab: '47.557',
					summary:
						'Advogado apaixonado pelo que faz. Formado na Puc/GO em 2015, exerce a profissão desde então, sendo pós-graduado em prática trabalhista e previdenciária, também possui bastante experiência na área cível e criminal.',
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
