<template>
	<div id="Login">
		<div class="wrapper-login wrapper-module">
			<h1 class="form-title">Login</h1>
			<VForm :form="form" @submit="onSubmit"/>
		</div>
	</div>
</template>

<script>
	import VForm from '@/components/VForm'
	export default {
		name: 'Login',
		components:{
			VForm
		},
		data () {
			return {
				form: {
					email:{
						value: null,
						label: 'Email',
						required: true,
						prop:{
							type: 'email',
						}
					},
					password: {
						value: null,
						label: 'Password',
						required: true,
						prop:{
							type: 'password',
						}
					}
				}
			}
		},
		methods:{
			onSubmit(event){
				localStorage.user = JSON.stringify(event);
				this.$router.push({name: 'users'});
			}
		}
	}
</script>

<style>
  @import url('@/assets/css/login.css');
</style>