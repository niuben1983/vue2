import Vue from 'vue'
import Router from 'vue-router'
import Index from './page/index/app'
import Axios from './page/axios/app'
import AxiosAll from './page/axios/app-all'
import Props from './page/props-route/app'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            name: 'axios',
            path: '/axios/:userId',
            component: Axios
        },
        {
            name: 'axiosAll',
            path: '/axiosAll',
            component: AxiosAll
        },
        {
            name: 'props',
            path: '/props',
            component: Props
        }
        
    ]
})