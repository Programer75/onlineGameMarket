<template>
    <div class="content">
        <h1>My Vue.js App</h1>
        <img alt="Vue logo" src="../assets/images/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 95vw;
    height: 800px;
    background-color: #f0f0f0;
    border-radius: 15px;
    padding: 0px
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
        HelloWorld,
    },
    //     beforeCreate(){
//     getUser(  ).then((data)=>{
//       this.user = {
//         ...data
//       } 
//     })
//   },
}
</script>