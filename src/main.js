import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './routers'

FastClick.attach(document.body)
Vue.config.productionTip = false //禁止启动时生成生产提示

/* eslint-disable no-new */
// new Vue({
//         el: "#app",
//         router,
//         components: { App },
//         template: '<App/>',
//     })
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')