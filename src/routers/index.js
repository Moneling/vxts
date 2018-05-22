import Vue from 'vue'
import Router from 'vue-router'
import Lab from '../components/lab/Lab'

Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'Lab',
        component: Lab
    }]
})