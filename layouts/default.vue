<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" fixed temporary disable-resize-watcher>
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

		<v-app-bar fixed app elevate-on-scroll>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
			<v-spacer />
			<v-row no-gutters>
				<v-col v-for="(item, i) in items" :key="i">
					<v-btn color="#daa520" width="180px" elevation="3" raised :to="item.to" exact>
						<v-icon class="icon--absolute">{{ item.icon }}</v-icon>
						{{ item.title }}
					</v-btn>
				</v-col>
			</v-row>
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
			<v-btn class="mx-2" elevation="3" icon>
				<v-icon>mdi-phone</v-icon>
			</v-btn>
			<v-btn class="mx-2" elevation="3" icon>
				<v-icon>mdi-whatsapp</v-icon>
			</v-btn>
			<v-btn class="mx-2" elevation="3" icon>
				<v-icon>mdi-facebook</v-icon>
			</v-btn>
			<v-btn class="mx-2" elevation="3" icon>
				<v-icon>mdi-instagram</v-icon>
			</v-btn>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Calil Fonseca',
				dark: true,
				drawer: false,
				items: [
					{
						icon: 'mdi-apps',
						title: 'Início',
						to: '/',
					},
					{
						icon: 'mdi-human-greeting',
						title: 'Advogados',
						to: '/advogados',
					},
					{
						icon: 'mdi-book-play-outline',
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

	.icon {
		&--absolute {
			position: absolute;
			left: 0px;
		}
	}

	/* Bootstrap 4 Media Queries */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
	}

	/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
	@media (min-width: 768px) {
	}

	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
	}
</style>
