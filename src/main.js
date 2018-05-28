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
        age: 18,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        outcrement(state) {
            state.count--
        },
        addTodos(state, payload) {
            state.todos.push({ id: payload.id, text: '...', done: true });
        },
        delTodos(state) {
            state.todos.splice(state.todos.length - 1, 1);
        }
    },
    actions: {
        increment(context, payload) {
            setTimeout(() => {
                context.commit('increment', payload);
            }, 1000)
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
