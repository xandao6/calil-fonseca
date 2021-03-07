<template>
	<section id="contact" class="ma-3">
		<v-card elevation="10">
			<v-card-title class="headline justify-center">Contato</v-card-title>
			<div>
				<v-icon>{{ icons.mdiPhone }}</v-icon>
				<span>Telefone:</span>
				<a :href="'tel:' + social.phone" rel="noopener noreferrer">{{ social.phone }}</a>
			</div>
			<div>
				<v-icon>{{ icons.mdiWhatsapp }}</v-icon>
				<span>Whatsapp:</span>
				<a
					:href="
						'https://wa.me/' +
						social.whatsapp +
						'?text=Ol%C3%A1%2C%20como%20vai%3F%20Peguei%20seu%20contato%20atrav%C3%A9s%20do%20site.'
					"
					target="_blank"
					rel="noopener noreferrer"
					>{{ social.whatsapp }}</a
				>
			</div>
			<div>
				<v-icon>{{ icons.mdiFacebook }}</v-icon>
				<span>Facebook:</span>
				<a
					:href="'https://www.facebook.com/' + social.facebook"
					target="_blank"
					rel="noopener noreferrer"
					>{{ social.facebook }}</a
				>
			</div>
			<div>
				<v-icon>{{ icons.mdiInstagram }}</v-icon>
				<span>Instagram:</span>
				<a
					:href="'https://instagram.com/' + social.instagram"
					target="_blank"
					rel="noopener noreferrer"
					>{{ social.instagram }}</a
				>
			</div>
			<div>
				<v-icon>{{ icons.mdiMapMarker }}</v-icon>
				<span>Endereço: Rua Capitão Caldas, n. 17, Itaberaí - GO, 76630-000</span>
			</div>
			<div>
				<v-icon>{{ icons.mdiMap }}</v-icon>
				<span>Mapa:</span>
				<v-flex class="text-center">
					<iframe
						:width="mapWidth"
						:height="mapHeight"
						frameborder="0"
						scrolling="no"
						src="https://www.openstreetmap.org/export/embed.html?bbox=-49.8167109489441%2C-16.02834610629763%2C-49.80027437210083%2C-16.015806618348176&amp;layer=mapnik&amp;marker=-16.02207646083161%2C-49.80849266052246"
						class="rounded"
					></iframe>
				</v-flex>
			</div>
		</v-card>
	</section>
</template>

<script>
	import { mdiMap, mdiMapMarker, mdiPhone, mdiWhatsapp, mdiFacebook, mdiInstagram } from '@mdi/js'
	export default {
		data: () => ({
			street: 'Rua Capitão Caldas, n. 17, Itaberaí - GO, 76630-000',
			social: {
				whatsapp: '556233752216',
				facebook: 'ricardocaliladv',
				instagram: 'dr.ricardocalil',
				phone: '+55 62 3375-2216',
			},
			icons: {
				mdiMap,
				mdiMapMarker,
				mdiPhone,
				mdiWhatsapp,
				mdiFacebook,
				mdiInstagram,
			},
		}),
		computed: {
			mapWidth() {
				return 200
			},
			mapHeight() {
				return 200
			},
		},
	}
</script>

<style lang="scss" scoped></style>
