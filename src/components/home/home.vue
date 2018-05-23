<template>
    <div>
         <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
         <panel  header="最新资讯"  :list="list" :type="type" @on-img-error="onImgError"></panel>
    </div>
</template>

<script>
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Panel, } from 'vux'

    const baseList = [{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
        }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
        }, {
        url: 'javascript:',
        // img: 'https://static.vux.li/demo/5.jpg', // 404
        title: '送你一次旅行',
        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }]

    const list =[
        {
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        // url: '/component/cell'
        }, {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题二',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: {
            // path: '/component/radio',
            replace: false
            },
            meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
            }
        },
        {
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题三',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        // url: '/component/cell'
        }, {
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title: '标题四',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: {
            // path: '/component/radio',
            replace: false
            },
            meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
            }
        }
      ]




  export default {
        name:'home',
        data(){
            return{
                msg:"Main",
                demo01_list: baseList,
                demo01_index: 0,
                list:list,
                type:'1'
            }
        },
        components:{
            Swiper, GroupTitle, SwiperItem, XButton,Panel, Divider
        },
        methods:{
            demo01_onIndexChange (index) {
                this.demo01_index = index
                },
            onImgError (item, $event) {
                // console.log(item, $event)
                }
        }
    }
</script>

<style lang="stylus" scoped>

</style>