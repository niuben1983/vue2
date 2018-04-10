// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex);
import router from './router'

import promise from 'es6-promise';
promise.polyfill();

const store = new Vuex.Store({
    state: {
      count: 0,
      age: 18
    },
    mutations: {
      increment (state) {
        state.count++
      },
      outcrement (state) {
        state.count--
      }
    }
  })

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
