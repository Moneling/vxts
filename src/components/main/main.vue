<template>
    <div>
         <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    </div>
</template>

<script>
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

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
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
    }]

    export default {
        name:'vmain',
        data(){
            return{
                msg:"Main",
                 demo01_list: baseList,
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>