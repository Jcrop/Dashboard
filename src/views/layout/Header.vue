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
			<div class="col userdata">
				<div class="avatar">
					<i class="icon photo">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
					</i>
					<div class="username" @click="active = !active">
						{{userLogin.email}}
					</div>
					<div class="dropdown" :class="{active}">
						<a href="#" @click.prevent="logout">
							Logout
						</a>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {

		name: 'Header',
		data () {
			return {
				active: false,
				nav: [
					{
						label: 'Dashboard'
					}
				]
			}
		},
		computed:{
			userLogin(){
				return JSON.parse(localStorage.user);
			}
		},
		methods:{
			logout(){
				localStorage.removeItem('user');
				this.$router.push({name: 'login'});
				this.$toast.open({
				  message: 'Successful Logout',
				  type: 'info',
				  position: 'top-right'
				});
			}
		}
	}
</script>
<style>
  @import url('@/assets/css/header.css');
</style>