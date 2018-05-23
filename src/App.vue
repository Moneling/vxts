<template>
  <div id="app">
    <div id="top"><v-header></v-header></div>
    <div id="content">
      <router-view></router-view>
    </div>
    <div id="bottom"><v-lab></v-lab> </div>
    <!--  -->
    <!-- <div id="mian-content"> -->
      <!--  -->
    <!-- </div> -->
    <!--  -->
    <!-- -->
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
@import '~vux/src/styles/1px.less';
@import url("./style/index.less");
  body {
    background-color: #fbf9fe;
  }
  #top{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
  }
 #bottom{
    position: fixed;
    bottom: 0;
    padding: 0;
    width: 100%;
  }

  #content{
    padding-top: 45px;
    padding-bottom: 45px;
    width: 100%;
    height: 100%;
  }
</style>


