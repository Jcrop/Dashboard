<template>
	<div id="Header">
		<div class="row">
			<div class="col">
				<div class="toggle-menu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div class="col header-nav">
				<nav class="header-menu">
					<ul class="menu-items">
						<li v-for="(item, i) in nav" :key="i" class="menu-item">
							<a>{{item.label}}</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="col">
				
			</div>
		</div>

	</div>
</template>

<script>
	export default {

		name: 'Header',
		data () {
			return {
				nav: [
					{
						label: 'Dashboard'
					}
				]
			}
		}
	}
</script>
<style>
  @import url('@/assets/css/header.css');
</style>