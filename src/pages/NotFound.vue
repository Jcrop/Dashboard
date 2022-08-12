<template>
  <div class="not-found">
  	<h1>
  		4<span>0</span>4
  	</h1>
    <router-link class="btn" :to="{name: 'home'}">
      Ir al Inicio
    </router-link>
  </div>
</template>

<script>
export default {

  name: 'NotFound',

  data () {
    return {

    }
  }
}
</script>
<style>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .not-found h1{
    color: #0054FE;
    margin: 0 0 30px;
    font-size: 150px;
    line-height: 1;
    font-weight: 800;
  }

  .not-found h1 span {
    opacity: 0.5;
  }
</style>