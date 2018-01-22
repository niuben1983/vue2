import Vue from 'vue'
import Router from 'vue-router'
import Index from './page/index/app'
import Axios from './page/axios/app'
import AxiosAll from './page/axios/app-all'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/axios',
            component: Axios
        }
    ]
})