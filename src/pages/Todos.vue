<template>
	<div class="Todos modules">
		<section class="tools-btns">
			<button class="btn" @click="modal.state = true">
				<i class="icon">	
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
				</i>
				<span class="label">
					Add new todo
				</span>
			</button>
		</section>
		<VListCard :list="list" />
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
	import VListCard from '@/components/VListCard'
	import VForm from '@/components/VForm'
	import VModal from '@/components/VModal'
	export default {
		name: 'Todos',
		components:{
			VListCard,
			VForm,
			VModal
		},
		data () {
			return {
				modal: {
					state: false,
					titulo: 'Add New Todo',
					prop: {
						form: {
							title: {
								value: null,
								is: 'textarea',
								label: 'Title',
								required: true,
								prop:{

								}
							}
						}
					}
				}
			}
		},
		computed:{
			list(){
				return this.$store.state.Todos.todos;
			}
		},
		mounted(){
			this.$store.dispatch('Todos/getTodos', {id: this.$route.params.id});
		},
		methods: {
			onSubmit(){;
				let {title} = this.$refs['modal'].onSubmit();
		    let todo = {
					userId: this.$route.params.id,
			    id: this.list[0].id,
			    title,
			    completed: false
		    }
		    this.$store.commit('Todos/UPDATE_TODO', todo);
		    this.modal.state = false;
		  }
		}
	}
</script>