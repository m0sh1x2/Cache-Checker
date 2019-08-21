import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0,
        value: 0,
        drawer: false,
        sites: [
            { id: 0, url: "https://news.ycombinator.com", status: "200" },
            { id: 1, url: "https://lobste.rs/", status: "200" },
            { id: 2, url: "https://medium.com/", status: "200" }
        ]
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        },
        updateDrawer: (state) => {
            state.drawer = !state.drawer;
        }

    },
    actions: {
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        },
        updateDrawer: ({ commit }) => {
            commit('updateDrawer');
        }
    },
    getters: {
        getCounter: state => {
            return state.counter;
        },
        getValue: state => {
            return state.value;
        },
        getDrawer: state => {
            return state.drawer;
        }
    }
})