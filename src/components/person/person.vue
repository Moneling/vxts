<template>
    <div>
    <!-- <img src="./bg.jpg" alt=""> -->
        <blur :blur-amount=40 :url = "url" :height="150">
            <p class= "center"> <img :src="url">
            <span class = 'nickName'> Jonins </span>
            <span class = 'range'> Svip </span>
        </p>
        </blur>
        <card :header="{title}">
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-r">
                <span>1130</span>
                <p class="card-padding">余额</p>
                </div>
                <div class="vux-1px-r">
                <span>15</span>
                <p class="card-padding">卡卷</p>
                </div>
                <div class="vux-1px-r">
                <span>0</span>
                <p class="card-padding">余额</p>
                </div>
                <div>
                <span>88</span>
                <p class="card-padding">卡卷</p>
                </div>
            </div>
        </card>
        <group>
            <cell title="我的账户" value="保护中"></cell>
            <cell title="Money"  value="888" is-link></cell>
            <cell title="Withdraw" disabled is-link><badge text="3"></badge></cell>
        </group>
        <group title="Use is-link to show arrow">

            <cell title="Notifications" is-link></cell>
            <cell title="Privacy" is-link></cell>
            <cell title="General" is-link>
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
        </group>

</div>
</template>


<script>
    import {Blur,Card, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
    import bg from "./bg.jpg";

    export default {
        data() {
            return {
                msg: 'Person',
                url: bg,
                title: '我的钱包'
            }
        },
        components: {
            Blur,
            Card,
            Cell,
            CellBox,
            CellFormPreview, Group, Badge
        }
    }
</script>


<style lang = "less" scoped>
    @import '~vux/src/styles/1px.less';

.center {
    text-align: left;

    padding-top: 20px;

    padding-left: 20px;

    color: #fff;

    font-size: 18px;

   >img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 4px solid#ececec;
    }
    .nickName {
        position: absolute;
        left: 125px;
        top: 40px;
        font-size: 20px
    }
    .range {
        position: absolute;
        left: 125px;
        top: 70px;
        font-size: 14px;
    }
}
    .card-demo-flex {
        display: flex;
    }
    .card-demo-content01 {
        padding: 10px 0;
    }
    .card-padding {
        padding: 5px;
    }

    .card-demo-flex> div {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .card-demo-flex span {
            color: #f74c31;
        }
</style>
