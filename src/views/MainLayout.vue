<template>
	<section class="MainLayout">
		<div class="SideBar">
			<Panel/>
		</div>
		<div class="MainContent">
			<header>
				<Header/>
			</header>
			<main class="modules">
				<h1 class="main-title">
					{{$route.meta.title}}
				</h1>
					<router-view/>
				<!-- <transition name="fade">
				</transition> -->
			</main>
		</div>
	</section>
</template>

<script>

	import Header from '@/views/layout/Header'
	import Panel from '@/views/layout/Panel'
	export default {

		name: 'MainLayout',
		components: {
			Header,
			Panel
		},
	}
</script>