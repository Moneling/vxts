<template>
    <div>
        <x-header :left-options="{showBack: false}">移动测试</x-header>
    </div>
</template>

<script>
import XHeader from 'vux/src/components/x-header'
    export default {
        name:'Header',
        data(){
            return {
                msg:"this is Header"
            }
        },
        components:{
            XHeader
        }
    }
</script>

<style scoped>

</style>