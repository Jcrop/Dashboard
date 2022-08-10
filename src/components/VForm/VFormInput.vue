<template>
	<fieldset class="fieldset-form" :class="{error}">
    <legend class="legend-form" :class="{'field-required': input.required}">{{input.label}}</legend>
    <component :is="input.is ? input.is : 'input'" @input="inputValue" v-bind="input.prop" class="control-from"/>
  </fieldset>
</template>

<script>
	export default {

		name: 'VFormInput',
		props:{
			input: {
				type: Object
			},
			value: {
				default: () => null
			},
			error:{
				type: Boolean
			}
		},
		model:{
			prop: 'value',
			event: 'input'
		},
		methods:{
			inputValue(input){
				this.$emit('input', input.target.value);
			}
		}
	}
</script>