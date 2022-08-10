<template>
	<ValidationObserver tag="form" class="v-form" ref="form">
		<template v-for="(input, index) in form">
			<template v-if="input.subInputs">
				<template v-for="(subInput, prop) in input">
					<ValidationProvider v-if="prop != 'subInputs'" class="input-form" :rules="subInput.required ? 'required' : null" v-slot="{ errors }">
						<VFormInput :error="errors.length > 0" :key="`${index}_${prop}`" :input="subInput" v-model="subInput.value" />
					</ValidationProvider>
				</template>
			</template>
			<template v-else>
				<ValidationProvider class="input-form" :rules="input.required ? 'required' : null" v-slot="{ errors }">
					<VFormInput :error="errors.length > 0" :key="index" :input="input" v-model="input.value" />
				</ValidationProvider>
			</template>
		</template>
	  <div class="col col-12 text-center">
	  	<button v-if="btnSubmit" type="button" class="btn" @click="onSubmit">Login</button>
	  </div>
	</ValidationObserver>
</template>
<script>
	import { ValidationProvider, ValidationObserver } from 'vee-validate';
	import { extend } from 'vee-validate';
	import * as rules from 'vee-validate/dist/rules';
	import VFormInput from './VFormInput'
	export default {
		name: 'VForm',
		components: {
			VFormInput,
			ValidationProvider,
			ValidationObserver,
		},
		setup(){
			Object.keys(rules).forEach(rule => {
			  extend(rule, rules[rule]);
			});
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
				for(let prop in this.form){

					if(this.form[prop].value)
						form[prop] = this.form[prop].value;

					if(this.form[prop].subInputs){
						form[prop] = {};
						for(let sub in this.form[prop]){
							if(sub != 'subInputs'){
								if(this.form[prop][sub].value)
									form[prop][sub] = this.form[prop][sub].value;
							}
						}
					}
				}
				return new Promise(resolve => {
					this.$refs['form'].validate()
					.then(state => {
						if(state){
							this.$emit('submit', form);	
							resolve(form);
						}else{
							this.$toast.open({
							  message: 'The marked fields are required',
							  type: 'error',
							  position: 'top-right'
							});
							resolve(state)
						}
					})
				})

			}
		}
	}
</script>
<style>
  @import url('./form.css');
</style>