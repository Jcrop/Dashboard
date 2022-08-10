<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
  import MainLayout from '@/views/MainLayout'
  export default {
    name: 'App',
    components:{
      MainLayout
    }
  }
</script>
<style>
  @import url('@/assets/css/style.css');
</style>
