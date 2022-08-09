<template>
		<div class="vModal" :class="{ sideBar, sideBarOverlay }" :style="sideBar ? {maxWidth: `${maxWidth[size]}px`, left: 'auto', width: '100%'} : {overflowY: 'auto'}">
			<div class="vModelOverlay" ref="overlay">
				<div class="vModalContainer" :style="!sideBar ? {maxWidth: `${maxWidth[size]}px`} : {}">
					<div class="vModalHeader">
						<span class="text">{{titulo}}</span>
						<div class="icons d-flex align-items-center justify-content-end flex-grow-1">
							<slot name="optiosnHeader"></slot>
							<a class="vModalClose" @click.prevent="closeModal" href="#" v-if="closeActive">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
							</a>
						</div>
					</div>
					<div class="vModelContent">
						<slot></slot>
					</div>
					<div class="vModalFooter" v-if="footer">
						<slot name="footer"></slot>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {

  name: 'vModal',
  props: {
  	titulo:{
  		type: String,
  		default: 'Titulo'
  	},
  	size: {
  		type: String,
  		default: 'sm'
  	},
  	footer: {
  		type: Boolean,
  		default: false
  	},
  	overlayClose: Boolean,
  	sideBarOverlay: Boolean,
  	sideBar: Boolean,
  },
  data () {
    return {
    	closeActive: true,
    	element: null
    }
  },
  computed:{
  	maxWidth(){
  		return {
  			'xxs': 450,
  			'xs': 700,
  			'sm': 800,
  			'md': 920,
  			'lg': 1400
  		}
  	},
  	closeOverlay(){
  		return (a)=>{
  			let _overlay = this.$refs['overlay'];
  			if(a.target == _overlay)
  				this.closeModal();
  		}
  	}
  },
  mounted() {
  	if(!this.sideBar)
	  	document.body.insertBefore(this.$el, null);

	  if(!this.sideBar || this.sideBarOverlay)
	  	document.body.style.overflowY = 'hidden';
  	
  	if(this.overlayClose)
	  	window.addEventListener('click', this.closeOverlay);
  },
  destroyed(){
  	document.body.style.overflowY = '';
  	if(this.overlayClose)
  		window.removeEventListener('click', this.closeOverlay);
  },
  methods:{
  	closeModal(value){
  		this.$emit('close', value);
  	},
  	closeState(value){
  		if([undefined, null, ''].indexOf(value)){
  			this.closeActive = value;
  		}else{
  			this.closeActive = !this.closeActive;
  		}
  	},
  }
}
</script>
<style>
	@import url('@/assets/css/vmodal.css');
</style>