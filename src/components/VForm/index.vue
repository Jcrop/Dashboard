<template>
	<form class="v-form">
		<VFormInput v-for="(input, index) in form" :key="index" :input="input" v-model="input.value" />
	  <div class="col col-12 text-center">
	  	<button v-if="btnSubmit" type="button" class="btn" @click="onSubmit">Login</button>
	  </div>
	</form>
</template>

<script>
	import VFormInput from './VFormInput'
	export default {
		name: 'VForm',
		components: {
			VFormInput
		},
		props:{
			form:{
				type: Object,
				default: () => {}
			},
			btnSubmit:{
				type: Boolean,
				default:() => true
			}
		},
		data () {
			return {
				test: null
			}
		},
		methods:{
			onSubmit(){
				let form = {};
				for(let prop in this.form)
					if(this.form[prop].value)
						form[prop] = this.form[prop].value;

				this.$emit('submit', form);

				return form;
			}
		}
	}
</script>
<style>
  @import url('./form.css');
</style>