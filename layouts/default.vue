<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" fixed app>
			<v-list>
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

		<v-app-bar fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
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

		<v-footer :absolute="true" app>
			<span>&copy; {{ new Date().getFullYear() }}</span>
			<v-spacer />
			<v-btn class="mx-2" elevation="6" icon>
				<v-icon>mdi-phone</v-icon>
			</v-btn>
			<v-btn class="mx-2" elevation="6" icon>
				<v-icon>mdi-whatsapp</v-icon>
			</v-btn>
			<v-btn class="mx-2" elevation="6" icon>
				<v-icon>mdi-facebook</v-icon>
			</v-btn>
			<v-btn class="mx-2" elevation="6" icon>
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
						title: 'Áreas de Atuação',
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
