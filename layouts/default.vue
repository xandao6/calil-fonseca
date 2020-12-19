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
			<v-app-bar-nav-icon
				v-if="$vuetify.breakpoint.mdAndDown"
				@click.stop="drawer = !drawer"
			/>
			<v-toolbar-title v-text="title" />
			<v-spacer />
			<v-row v-if="$vuetify.breakpoint.lgAndUp" no-gutters>
				<v-col v-for="(item, i) in items" :key="i">
					<v-btn width="180px" elevation="3" raised :to="item.to" class="secondary" exact>
						<!--v-icon class="icon--absolute">{{ item.icon }}</v-icon-->
						{{ item.title }}
					</v-btn>
				</v-col>
			</v-row>
			<v-spacer v-if="$vuetify.breakpoint.lgAndUp" />
			<v-btn icon @click.stop="toggleTheme">
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
	export default {
		data() {
			return {
				title: 'Ricardo Calil & Advogados Associados',
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

	.icon {
		&--absolute {
			position: absolute;
			left: 0px;
		}
	}
</style>
