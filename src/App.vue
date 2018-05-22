<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-lab></v-lab>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Lab from './components/lab/Lab'
export default {
  name: 'app',
  data(){
    return{
      
    }
  },
  components:{
   'v-header': Header,
   'v-lab' :Lab
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
