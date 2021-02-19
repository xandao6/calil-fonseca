<template>
	<v-img
		:width="getSize"
		:height="getSize"
		alt="Logo do escritório"
		src="/logos/logo_sem_fundo2.svg?webp"
		lazy-src="/logos/logo_sem_fundo2.svg?lqip"
		aspect-ratio="1"
		class="no-flex"
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
			size: {
				type: Number,
				default: null,
			},
		},
		computed: {
			getSize() {
				if (!this.size) {
					if (this.$vuetify.breakpoint.smAndDown) return 48
					else return 56
				} else {
					return this.size
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
