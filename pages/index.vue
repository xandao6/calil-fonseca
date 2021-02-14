<template>
	<div>
		<office-introduction> </office-introduction>
		<lawyer-cards> </lawyer-cards>
		<expertise-areas> </expertise-areas>
		<contact> </contact>
	</div>
</template>

<script>
	import OfficeIntroduction from '~/components/OfficeIntroduction.vue'
	import LawyerCards from '~/components/LawyerCards.vue'
	import ExpertiseAreas from '~/components/ExpertiseAreas.vue'
	import Contact from '~/components/Contact.vue'
	export default {
		components: {
			OfficeIntroduction,
			LawyerCards,
			ExpertiseAreas,
			Contact,
		},
		layout: 'default',
		data() {
			return {}
		},
	}
</script>
