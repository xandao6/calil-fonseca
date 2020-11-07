<template>
	<div>
		<v-row dense>
			<v-col v-for="(lawyer, i) in lawyers" :key="i" cols="12">
				<v-card class="card" elevation="10">
					<v-img class="lawyer-img" :src="lawyer.src" contain></v-img>
					<div class="content">
						<v-card-title class="headline" v-text="lawyer.name"></v-card-title>
						<v-card-subtitle> OAB/GO Nº {{ lawyer.oab }}</v-card-subtitle>
						<v-card-text v-text="lawyer.summary"></v-card-text>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		data: () => ({
			lawyers: [
				{
					color: '#1F7087',
					src: '/ricardo.png',
					name: 'Dr. Ricardo Calil',
					oab: '00000',
					summary:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit quam, posuere dignissim consectetur et, interdum hendrerit quam. Suspendisse non leo sed dolor aliquam aliquam. Fusce in volutpat nulla. Nulla ultrices egestas auctor. Donec tempus et metus ut porta. Nunc elementum turpis eget varius lobortis.',
				},
				{
					color: '#996515',
					src: '/lucilo.png',
					name: 'Dr. Lucilo Neto',
					oab: '00000',
					summary:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elit quam, posuere dignissim consectetur et, interdum hendrerit quam. Suspendisse non leo sed dolor aliquam aliquam. Fusce in volutpat nulla. Nulla ultrices egestas auctor. Donec tempus et metus ut porta. Nunc elementum turpis eget varius lobortis.',
				},
			],
		}),
	}
</script>

<style lang="scss" scoped>
	.card {
		display: block;
		justify-content: center;
		align-items: center;
		margin: 25px;
		padding: 20px;

		.lawyer-img {
			position: relative;
			display: block;
			margin-left: auto;
			margin-right: auto;
			width: 180px;
		}

		.content {
			position: relative;
			width: 100%;
		}
	}

	/* Bootstrap 4 Media Queries */
	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		.card {
			display: flex;
			justify-content: flex-start;

			.lawyer-img {
				position: absolute;
				width: 200px;
				height: auto;
				left: 0%;
				bottom: 0%;
				transform: translateX(-10%);
			}

			.content {
				width: 70%;
				left: 35%;
			}
		}
	}

	/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
	@media (min-width: 768px) {
		.card {
			.lawyer-img {
				width: 225px;
			}

			.content {
				width: 75%;
				left: 30%;
			}
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.card {
			.lawyer-img {
				width: 240px;
			}
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		.card {
			.lawyer-img {
				width: 250px;
			}
		}
	}
</style>
