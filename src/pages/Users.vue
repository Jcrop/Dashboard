<template>
	<div id="Users" class="modules">
		<section class="tools-btns">
			<button class="btn" @click="modal.state = true">
				<i class="icon">	
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
				</i>
				<span class="label">
					Add new User
				</span>
			</button>
		</section>
		<section class="wrapper-module">
			<v-table v-bind="tabla">
				<template v-slot:address="{field}">
					{{field.street}} {{field.suite}}<br>
					<small><i>ZIP Code: {{field.zipcode}}</i></small><br>
					<small><b>City: {{field.city}}</b></small>
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
		<transition name="fade">
      <v-modal v-if="modal.state" @close="modal.state = false" :titulo="modal.titulo" :size="modal.size" footer>
        <VForm v-bind="modal.prop" ref="modal" :btnSubmit="false"/>
        <template #footer>
          <button class="btn" @click="onSubmit">
            Create
          </button>
        </template>
      </v-modal>
    </transition>
	</div>
</template>

<script>
	import VTable from '@/components/VTable'
	import VModal from '@/components/VModal'
	import VForm from '@/components/VForm'
	export default {
		name: 'Users',
		components: {
			VTable,
			VModal,
			VForm
		},
		data(){
			return {
				modal: {
					state: false,
					titulo: 'Add New User',
					prop: {
						form: {
							name: {
								value: null,
								label: 'Name',
								required: true,
								prop: {

								}
							},
							username: {
								value: null,
								label: 'Username',
								required: true,
								prop: {

								}
							},
							email: {
								value: null,
								label: 'Email',
								required: true,
								prop: {

								}
							},
							address: {
								subInputs: true,
								street:{
									value: null,
									label: 'Street',
									required: true,
									props: {

									}
								},
								suite:{
									value: null,
									label: 'Suite',
									required: true,
									props: {

									}
								},
								city:{
									value: null,
									label: 'City',
									required: true,
									props: {

									}
								},
								zipcode:{
									value: null,
									label: 'Zipcode',
									required: true,
									props: {

									}
								},
							},
							company: {
								subInputs: true,
								name:{
									value: null,
									label: 'Company',
									required: true,
									props: {

									}
								},
							}
						}
					}
				}
			}
		},
		mounted(){
			this.$store.dispatch('Users/getUsers');
		},
		computed: {
			users(){
				return this.$store.state.Users.users;
			},
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
					rows: this.users
				};
		  }
		},
		methods: {
			onSubmit(){
				this.$refs['modal'].onSubmit()
				.then(res => {
					if(res){
						res.id = Number(this.users[0].id + 1);
						this.$store.commit('Users/ADD_USERS', res)
						this.$toast.open({
						  message: 'Successful Registration',
						  type: 'success',
						  position: 'top-right'
						});
						this.modal.state = false;
					}
				});
			}
		}
	}
</script>