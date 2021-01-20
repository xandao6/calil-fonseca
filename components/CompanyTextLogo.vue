<template>
	<img
		:width="width"
		alt="Ricardo Calil & Advogados Associados"
		:src="$vuetify.theme.dark ? '/logo_texto_sem_fundo.svg' : '/logo_texto_sem_fundo_black.svg'"
	/>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 300,
			},
		},
	}
</script>
