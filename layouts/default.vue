<template>
	<v-app>
		<v-navigation-drawer
			v-if="$vuetify.breakpoint.mdAndDown"
			v-model="drawer"
			fixed
			temporary
			disable-resize-watcher
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="nav-drawer__title"> Menu </v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense rounded>
				<v-list-item
					v-for="(section, i) in sections"
					:key="i"
					@click="$vuetify.goTo(section.target, scrollOptions)"
				>
					<v-list-item-action>
						<v-icon>{{ section.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="section.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar fixed app elevate-on-scroll>
			<v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer">
				<v-icon>{{ icons.mdiMenu }}</v-icon>
			</v-app-bar-nav-icon>
			<v-spacer v-if="$vuetify.breakpoint.mdAndDown" />

			<company-logo class="logo--margin"> </company-logo>
			<company-text-logo> </company-text-logo>

			<v-spacer />
			<v-row v-if="$vuetify.breakpoint.lgAndUp" no-gutters>
				<v-col v-for="(section, i) in sections" :key="i">
					<v-btn
						class="secondary"
						width="180px"
						elevation="3"
						raised
						@click="$vuetify.goTo(section.target, scrollOptions)"
					>
						{{ section.title }}
					</v-btn>
				</v-col>
			</v-row>
			<v-spacer v-if="$vuetify.breakpoint.lgAndUp" />

			<v-btn icon @click.stop="toggleTheme">
				<v-icon>{{ icons.mdiThemeLightDark }}</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<v-footer absolute app>
			<span>&copy; {{ new Date().getFullYear() }}</span>
			<v-spacer />
			<!--v-btn
				:href="'tel:' + social.phone"
				rel="noopener noreferrer"
				class="mx-2 secondary white--text"
				elevation="3"
				icon
			>
				<v-icon>{{ icons.mdiPhone }}</v-icon>
			</v-btn>
			<v-btn
				:href="
					'https://wa.me/' +
					social.whatsapp +
					'?text=Ol%C3%A1%2C%20como%20vai%3F%20Peguei%20seu%20contato%20atrav%C3%A9s%20do%20site.'
				"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-2 secondary white--text"
				elevation="3"
				icon
			>
				<v-icon>{{ icons.mdiWhatsapp }}</v-icon>
			</v-btn>
			<v-btn
				:href="'https://www.facebook.com/' + social.facebook"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-2 secondary white--text"
				elevation="3"
				icon
			>
				<v-icon>{{ icons.mdiFacebook }}</v-icon>
			</v-btn>
			<v-btn
				:href="'https://instagram.com/' + social.instagram"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-2 secondary white--text"
				elevation="3"
				icon
			>
				<v-icon>{{ icons.mdiInstagram }}</v-icon>
			</v-btn-->
		</v-footer>

		<v-fab-transition>
			<v-btn
				:href="
					'https://wa.me/' +
					social.whatsapp +
					'?text=Ol%C3%A1%2C%20como%20vai%3F%20Peguei%20seu%20contato%20atrav%C3%A9s%20do%20site.'
				"
				target="_blank"
				rel="noopener noreferrer"
				fab
				class="v-btn--absolute"
			>
				<v-icon x-large color="green">{{ icons.mdiWhatsapp }}</v-icon>
			</v-btn>
		</v-fab-transition>
	</v-app>
</template>

<script>
	import {
		mdiMenu,
		mdiThemeLightDark,
		mdiPhone,
		mdiWhatsapp,
		mdiFacebook,
		mdiInstagram,
		mdiApps,
		mdiHumanGreeting,
		mdiBookPlayOutline,
		mdiCardAccountPhone,
	} from '@mdi/js'
	import CompanyLogo from '~/components/CompanyLogo.vue'
	import CompanyTextLogo from '~/components/CompanyTextLogo.vue'
	export default {
		components: {
			CompanyLogo,
			CompanyTextLogo,
		},
		data() {
			return {
				dark: true,
				drawer: false,
				scrollOptions: {
					duration: 400,
					offset: 0,
					easing: 'easeInOutCubic',
				},
				sections: [
					{
						icon: mdiApps,
						title: 'Início',
						target: '#office-introduction',
					},
					{
						icon: mdiHumanGreeting,
						title: 'Advogados',
						target: '#lawyer-cards',
					},
					{
						icon: mdiBookPlayOutline,
						title: 'Atuação',
						target: '#expertise-areas',
					},
					{
						icon: mdiCardAccountPhone,
						title: 'Contato',
						target: '#contact',
					},
				],
				social: {
					whatsapp: '556233752216',
					facebook: 'ricardocaliladv',
					instagram: 'dr.ricardocalil',
					phone: '+55 62 3375-2216',
				},
				icons: {
					mdiMenu,
					mdiThemeLightDark,
					mdiPhone,
					mdiWhatsapp,
					mdiFacebook,
					mdiInstagram,
				},
			}
		},
		methods: {
			toggleTheme() {
				this.$vuetify.theme.dark = !this.$vuetify.theme.dark
			},
		},
	}
</script>

<style lang="scss" scoped>
	.nav-drawer {
		&__title {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.logo {
		&--margin {
			margin-right: 15px;
		}
	}

	.v-btn {
		&--absolute {
			position: fixed;
			bottom: 0px;
			right: 0px;
			margin: 0px 12px 12px 0px;
			z-index: 1000;
		}
	}
</style>
