<template>
	<img :width="width" alt="Logo do escritório" src="/logos/logo_sem_fundo2.svg" />
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 60,
			},
		},
	}
</script>
