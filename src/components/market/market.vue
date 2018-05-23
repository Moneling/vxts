<template>
    <div class="vux-1px-t">
         <swipeout >
            <swipeout-item
             @on-close="handleEvents('on-close')"
             @on-open="handleEvents('on-open')"
             transition-mode="follow">
                <div slot="right-menu">
                    <swipeout-button type="primary">关注</swipeout-button>
                    <swipeout-button  type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">
                         <img style="display:inline-block;" src="../../assets/bg.jpg" width="30" height="30">
                         <!-- <h2>Test</h2> -->
                         <span>淡泊明志...</span>
                </div>
            </swipeout-item>
            <swipeout-item
             @on-close="handleEvents('on-close')"
             @on-open="handleEvents('on-open')"
             transition-mode="follow">
                <div slot="right-menu">
                    <swipeout-button type="primary">关注</swipeout-button>
                    <swipeout-button  type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">
                         <img style="display:inline-block;" src="../../assets/bg.jpg" width="30" height="30">
                         <!-- <h2>Test</h2> -->
                         <span>淡泊明志...</span>
                </div>
            </swipeout-item>
            <swipeout-item
             @on-close="handleEvents('on-close')"
             @on-open="handleEvents('on-open')"
             transition-mode="follow">
                <div slot="right-menu">
                    <swipeout-button type="primary">关注</swipeout-button>
                    <swipeout-button  type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">
                         <img style="display:inline-block;" src="../../assets/bg.jpg" width="30" height="30">
                         <!-- <h2>Test</h2> -->
                         <span>淡泊明志...</span>
                </div>
            </swipeout-item>
            <swipeout-item
             @on-close="handleEvents('on-close')"
             @on-open="handleEvents('on-open')"
             transition-mode="follow">
                <div slot="right-menu">
                    <swipeout-button type="primary">关注</swipeout-button>
                    <swipeout-button  type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">
                         <img style="display:inline-block;" src="../../assets/bg.jpg" width="30" height="30">
                         <!-- <h2>Test</h2> -->
                         <span>淡泊明志...</span>
                </div>
            </swipeout-item>
         </swipeout>

    </div>
</template>

<script>
    import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton , XInput, Group, Cell } from 'vux'
    export default {
        data(){
            return {
                msg:'Market'
            }
        },
        components:{
            GroupTitle,
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            XButton,
            XInput, Group, Cell
        },
        methods:{
            onButtonClick (type) {
                    alert('on button click ' + type)
                },
            handleEvents (type) {
                    console.log('event: ', type)
                }
        }
    }
</script>

<style lang="less" scoped>
    .demo-content {
        padding: 10px 10px;
        display: flex;
        align-items: center;
        >span{
            margin-left: 10px;
        }
        >img{
            border-radius: 50%;
        }
    }
</style>