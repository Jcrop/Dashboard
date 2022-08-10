<template>
	<div class="wrapper-list">
		<ul class="v-list-card" v-if="list.length">
			<li v-for="item in list.slice(page.start, page.end)" :key="item.id" class="v-item-card">
				<h3 class="title-card">
					{{item.title}}
				</h3>
				<div class="settings">
					<div class="state">
						State: <span class="badge" :class="item.completed ? 'success' : 'danger'">{{item.completed ? 'Complete':'Incomplete'}}</span>
					</div>
					<div class="btns-group">
						<span class="icons check" @click="checkTodo(item)" :class="{active: item.completed}">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
						</span>
						<span class="icons trash" @click="deleteTodo(item)">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>
						</span>
					</div>
				</div>
			</li>
		</ul>
		<div v-else class="alert">
			There are no Todos registered
		</div>
		<div class="pagination">
			<button v-for="i in pages" :key="i" @click="currentPage = i" class="btn-icon" :class="{active: i == currentPage}">
				{{i}}
			</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'VListCard',
		props:{
			list:{
				type: Array,
				default: () => []
			},
			perPage: {
	  		type: Number,
	  		default: () => 12
	  	}
		},
		computed:{
	    pages(){
	    	return Math.ceil(this.list.length / this.perPage);
	    },
	    page(){
	    	let start = (this.currentPage - 1) * this.perPage;
	    	let end = start + this.perPage;
	    	return {
	    		start,
	    		end
	    	}
	    }
	  },
	  data () {
	    return {
	    	currentPage: 1,
	    }
	  },
	  methods:{
	  	checkTodo(item){
	  		Object.assign(item,{
	  			completed: !item.completed
	  		});
	  		this.$toast.open({
				  message: 'Successful Update',
				  type: 'success',
				  position: 'top-right'
				});
	  	},
	  	deleteTodo(item){
	  		this.$store.commit('Todos/DELETE_TODO', item);
	  		this.$toast.open({
				  message: 'Successful Removal',
				  type: 'success',
				  position: 'top-right'
				});
	  	}
	  }
	}
</script>
<style>
  @import url('@/assets/css/vcard.css');
</style>