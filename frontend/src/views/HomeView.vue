<template>
  <div class="home">
    <div class="content">
      <h1>My Vue.js App</h1>
      <img alt="Vue logo" src="../assets/images/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
