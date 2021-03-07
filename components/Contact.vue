<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="10" md="9" lg="8" xl="7">
			<v-card elevation="10">
				<v-card-title class="headline justify-center text-center break-word"
					>Contato</v-card-title
				>
				<div class="ma-3">
					<div class="ma-1 text-left">
						<v-icon>{{ icons.mdiPhone }}</v-icon>
						<span>Telefone:</span>
						<a
							:href="'tel:' + social.phone"
							rel="noopener noreferrer"
							v-text="social.phone"
						></a>
					</div>
					<div class="ma-1 text-left">
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
							v-text="social.whatsapp"
						></a>
					</div>
					<div class="ma-1 text-left">
						<v-icon>{{ icons.mdiFacebook }}</v-icon>
						<span>Facebook:</span>
						<a
							:href="'https://www.facebook.com/' + social.facebook"
							target="_blank"
							rel="noopener noreferrer"
							v-text="social.facebook"
						></a>
					</div>
					<div class="ma-1 text-left">
						<v-icon>{{ icons.mdiInstagram }}</v-icon>
						<span>Instagram:</span>
						<a
							:href="'https://instagram.com/' + social.instagram"
							target="_blank"
							rel="noopener noreferrer"
							v-text="social.instagram"
						></a>
					</div>
					<div class="ma-1 text-left">
						<v-icon>{{ icons.mdiMapMarker }}</v-icon>
						<span>Endereço: {{ street }}</span>
					</div>
					<div class="ma-1 text-left">
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
				</div>
			</v-card>
		</v-col>
	</v-row>
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
