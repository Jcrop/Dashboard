<template>
	<section>
		<div class="SideBar">
			<Panel></Panel>
		</div>
		<div class="MainContent">
			<header>
				<Header></Header>
			</header>
			<main>
				<router-view/>
			</main>
		</div>
	</section>
</template>

<script>

	import Header from '@/components/layout/Header'
	import Panel from '@/components/layout/Panel'
	export default {

		name: 'MainLayout',
		components: {
			Header,
			Panel
		},
		data () {
			return {

			}
		}
	}
</script>