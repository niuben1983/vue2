import Vue from 'vue'
import Router from 'vue-router'
import Index from './page/index/app'
import Axios from './page/axios/app'
import AxiosAll from './page/axios/app-all'
import Props from './page/props-route/app'
import VuexState from './page/vuex/state'
import VuexGetters from './page/vuex/getters'
import VuexMutations from './page/vuex/mutations'
import VuexAction from './page/vuex/action'

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
        },
        {
            name: 'vuexState',
            path: '/vuex/state',
            component: VuexState
        },
        {
            name: 'VuexGetters',
            path: '/vuex/getters',
            component: VuexGetters
        },
        {
            name: 'VuexMutations',
            path: '/vuex/mutations',
            component: VuexMutations
        },
        {
            name: 'VuexAction',
            path: '/vuex/action',
            component: VuexAction
        }
        
    ]
})