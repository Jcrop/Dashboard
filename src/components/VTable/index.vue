<template>
	<div class="wrapper-table">
		<table class="v-table">
			<thead>
				<tr>
					<th v-for="(field, index) in columns" :key="index">
						{{field.label}}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in rows.slice(page.start, page.end)" :key="item.id">
					<td v-for="(field, index) in columns" :key="index" :data-label="field.label">
						<slot :name="field.field" :field="item[field.field]" :row="item">
							{{item[field.field]}}
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="pagination">
			<button v-for="i in pages" :key="i" @click="currentPage = i" class="btn-icon" :class="{active: i == currentPage}">
				{{i}}
			</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'VTable',
  props:{
  	columns:{
  		type: Array
  	},
  	rows:{
  		type: Array
  	},
  	perPage: {
  		type: Number,
  		default: () => 5
  	}
  },
  computed:{
    pages(){
    	return Math.ceil(this.rows.length / this.perPage);
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
  }
}
</script>
<style>
  @import url('./table.css');
</style>