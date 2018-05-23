import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Person from '../components/person/person'
import Market from '../components/market/market'

Vue.use(Router)
export default new Router({
    routes: [{
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/person',
        name: 'person',
        component: Person
    }, {
        path: '/market',
        name: 'market',
        component: Market
    }]
})