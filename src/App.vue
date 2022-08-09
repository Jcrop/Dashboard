<template>
  <div id="app">
    <router-view/>
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
