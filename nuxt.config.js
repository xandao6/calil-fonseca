import colors from 'vuetify/es5/util/colors'

export default {
	// Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
	ssr: false,

	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		htmlAttrs: {
			lang: 'pt-BR',
		},
		titleTemplate: '%s',
		title: 'Ricardo Calil',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'apple-mobile-web-app-title', content: 'Ricardo Calil' },
			{ name: 'application-name', content: 'Ricardo Calil' },
			{ name: 'msapplication-TileColor', content: '#da532c' },
			{ name: 'theme-color', content: '#ffffff' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
		],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
		// https://marquez.co/docs/nuxt-optimized-images/
		'@aceforth/nuxt-optimized-images',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		// https://github.com/nuxt-community/gtm-module
		'@nuxtjs/gtm',
		// https://sitemap.nuxtjs.org/
		'@nuxtjs/sitemap',
		// https://github.com/nuxt-community/robots-module
		'@nuxtjs/robots',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: true,
			themes: {
				dark: {
					secondary: '#084d6e', // Azul Petróleo

					error: colors.red.accent3,
					info: colors.blue.base,
					success: colors.green.accent3,
					warning: colors.amber.base,
				},
				light: {
					secondary: '#084d6e', // Azul Petróleo

					error: colors.red.darken2,
					info: colors.blue.accent4,
					success: colors.green.accent3,
					warning: colors.amber.base,
				},
			},
		},
	},

	gtm: {
		enabled: true,
		id: 'GTM-P7H2764',
		pageTracking: true,
	},

	sitemap: {
		hostname: 'https://ricardocalil.adv.br',
		gzip: true,
		exclude: ['/admin/**'],
	},

	optimizedImages: {
		optimizeImages: true,
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
}
