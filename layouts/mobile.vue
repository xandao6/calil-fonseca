<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" fixed app temporary disable-resize-watcher>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="nav-drawer__title"> Menu </v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense rounded>
				<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar fixed elevate-on-scroll>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-spacer />

			<company-logo class="logo--margin" :width="40" />
			<company-text-logo :width="170" />

			<v-spacer />
			<v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
				<v-icon>mdi-theme-light-dark</v-icon>
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
			<v-btn class="mx-2 secondary white--text" elevation="3" icon>
				<v-icon>mdi-phone</v-icon>
			</v-btn>
			<v-btn class="mx-2 secondary white--text" elevation="3" icon>
				<v-icon>mdi-whatsapp</v-icon>
			</v-btn>
			<v-btn class="mx-2 secondary white--text" elevation="3" icon>
				<v-icon>mdi-facebook</v-icon>
			</v-btn>
			<v-btn class="mx-2 secondary white--text" elevation="3" icon>
				<v-icon>mdi-instagram</v-icon>
			</v-btn>
		</v-footer>
	</v-app>
</template>

<script>
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
				items: [
					{
						icon: 'mdi-view-dashboard',
						title: 'Início',
						to: '/',
					},
					{
						icon: 'mdi-human-greeting',
						title: 'Advogados',
						to: '/advogados',
					},
					{
						icon: 'mdi-gavel',
						title: 'Atuação',
						to: '/areas',
					},
					{
						icon: 'mdi-card-account-phone',
						title: 'Contato',
						to: '/contato',
					},
				],
			}
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
</style>
