<template>
	<v-img
		:width="getWidth"
		:height="getHeight"
		:src="
			$vuetify.theme.dark
				? '/logos/logo_texto_sem_fundo.svg?webp'
				: '/logos/logo_texto_sem_fundo_black.svg?webp'
		"
		:lazy-src="
			$vuetify.theme.dark
				? '/logos/logo_texto_sem_fundo.svg?lqip'
				: '/logos/logo_texto_sem_fundo_black.svg?lqip'
		"
		alt="Ricardo Calil & Advogados Associados"
		class="my-2 no-flex"
		contain
	>
		<template v-slot:placeholder>
			<v-row class="fill-height ma-0" align="center" justify="center">
				<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
			</v-row>
		</template>
	</v-img>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: null,
			},
			height: {
				type: Number,
				default: null,
			},
		},
		computed: {
			getWidth() {
				if (!this.width) {
					if (this.$vuetify.breakpoint.smAndDown) return 219
					else return 268
				} else {
					return this.width
				}
			},
			getHeight() {
				if (!this.height) {
					if (this.$vuetify.breakpoint.smAndDown) return 36
					else return 44
				} else {
					return this.height
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.no-flex {
		flex: initial;
	}
</style>
