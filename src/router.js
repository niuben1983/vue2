import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import(/* webpackChunkName: "Index" */ './page/index/app')
const Axios = () => import(/* webpackChunkName: "Axios" */ './page/axios/app')
const AxiosAll = () => import(/* webpackChunkName: "AxiosAll" */ './page/axios/app-all')
const Props = () => import(/* webpackChunkName: "Props" */ './page/props-route/app')
const VuexState = () => import(/* webpackChunkName: "VuexState" */ './page/vuex/state')
const VuexGetters = () => import(/* webpackChunkName: "VuexGetters" */ './page/vuex/getters')
const VuexMutations = () => import(/* webpackChunkName: "VuexMutations" */ './page/vuex/mutations')
const VuexAction = () => import(/* webpackChunkName: "VuexAction" */ './page/vuex/action')
const Mockjs = () => import(/* webpackChunkName: "mockjs" */ './page/mockjs/app')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            name: 'axios',
            path: '/axios/:userId?',
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
        },
        {
            name: 'Mockjs',
            path: '/mockjs',
            component: Mockjs
        }
    ]
})