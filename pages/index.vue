<template>
	<div>
		<v-parallax src="/office2.jpg">
			<v-spacer> </v-spacer>
			<v-row justify="center" align="center">
				<v-col cols="12" sm="8" md="6">
					<div class="text-center"></div>
					<v-card elevation="10">
						<v-card-title class="headline">
							Calil Fonseca & Advogados Associados
						</v-card-title>
						<v-card-text>
							<p>Seja bem-vindo ao nosso escritório!</p>
						</v-card-text>
						<v-card-actions> </v-card-actions>
					</v-card>
				</v-col>
			</v-row>
			<v-spacer> </v-spacer>
		</v-parallax>

		<lawyer-cards> </lawyer-cards>
	</div>
	<!--v-carousel cycle hide-delimiter-background show-arrows-on-hover>
		<v-carousel-item
			v-for="(slide, i) in slides"
			:key="i"
			:src="slide.src"
			contain
		></v-carousel-item>
	</v-carousel-->
</template>

<script>
	import LawyerCards from '~/components/LawyerCards.vue'
	export default {
		components: {
			LawyerCards,
		},
		data() {
			return {
				slides: [
					{
						src: '/law.jpg',
					},
					{
						src: '/law2.jpg',
					},
					{
						src: '/book.jpg',
					},
					{
						src: '/books.jpg',
					},
				],
			}
		},
	}
</script>
