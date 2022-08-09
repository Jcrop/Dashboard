<template>
	<div id="Users" class="modules">
		<section class="tools-btns">
			<button class="btn">
				<i class="icon">	
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
				</i>
				<span class="label">
					Add new user
				</span>
			</button>
		</section>
		<section class="wrapper-module">
			<v-table v-bind="tabla">
				<template v-slot:address="{field}">
					{{field.street}} {{field.suite}}<br>
					<small><i>ZIP Code: {{field.zipcode}}</i></small>
				</template>
				<template v-slot:company="{field}">
					{{field.name}}
				</template>
				<template v-slot:options="{field, row}">
					<router-link :to="{name: 'todos', params: {id: row.id}}">
						View Todos
					</router-link>
				</template>
			</v-table>
		</section>
	</div>
</template>

<script>
	import VTable from '@/components/VTable'
	export default {
		name: 'Users',
		components: {
			VTable,
		},
		mounted(){
			this.$store.dispatch('Users/getUsers');
		},
		computed: {
		  tabla() {
		    return {
					columns: [
						{field: 'name', label: 'Name'},
						{field: 'username', label: 'Username'},
						{field: 'email', label: 'Email'},
						{field: 'address', label: 'Address'},
						{field: 'company', label: 'Company'},
						{field: 'options', label: 'Options'},
					],
					rows: this.$store.state.Users.users
				};
		  }
		}
	}
</script>