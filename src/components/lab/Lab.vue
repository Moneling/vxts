<template>
    <div>
        <tabbar>
        <tabbar-item show-dot>
            <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png">  -->
            <router-link slot="label" to="/market">市场</router-link>
        </tabbar-item>
        <tabbar-item show-dot>
            <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
            <router-link slot="label" to="/home" class="active">主页</router-link>
        </tabbar-item>
        <tabbar-item badge="4">
            <!-- <img slot="icon" src="../../assets/bg.jpg"> -->
           <router-link slot="label" to="/person">个人中心</router-link>
        </tabbar-item>
    </tabbar>
    </div>
</template>

<script>
    import {Tabbar,TabbarItem,Badge,Cell} from 'vux'
    export default {
        name:'lab',
        data(){
            return {
                msg:"this is Lab",
                active:'home'
            }
        },
        components:{
            Tabbar,TabbarItem,Badge,Cell
        }
    }
</script>

<style lang="less" scoped>
    .active{
        color: green;
    }
</style>