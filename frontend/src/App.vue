<template>
  <MainHeader />
  <main>
    <router-view/>
  </main>
  <MainFooter />
</template>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0px;
}

main {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainFooter,
    MainHeader, 
    // Define your components here
  },
  data() {
    return {
      data:{},
            // Set this based on your authentication logic
            // Add any data properties you need here
        };
    },
}
</script>