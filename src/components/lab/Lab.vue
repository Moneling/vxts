<template>
    <div>
        <tabbar>
        <tabbar-item>
            <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
            <x-icon type="ios-arrow-up" class="icon-red"></x-icon>
            <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item show-dot>
            <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
            <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected >
            <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
            <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item badge="2">
            <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
            <span slot="label">News</span>
        </tabbar-item>
    </tabbar>
    </div>
</template>

<script>
    import {Tabbar,TabbarItem} from 'vux'
    export default {
        name:'lab',
        data(){
            return {
                msg:"this is Lab"
            }
        },
        components:{
            Tabbar,TabbarItem
        }
    }
</script>

<style scoped>

</style>