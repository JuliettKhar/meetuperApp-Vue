import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetups: [],
    categories: [],
    threads: [],
    meetup: {}
  },
  getters: {
    getMeetups: state => state.meetups,
    getCategories: state => state.categories,
  },
  mutations: {
    setItems(state, { resource, items }) {
      state[resource] = items
    },
    setItem (state, { resource, item }) {
      state[resource] = item
    }
  },
  actions: {
    fetchMeetups({ commit }) {
      commit('setItem', { resource:'meetups', items: {} })
      axios.get("/api/v1/meetups").then(res => {
        const meetups = res.data;
        commit('setItems', { resource:'meetups', items: meetups })
      })
    },

    fetchCategories({ commit }) {
      axios.get("/api/v1/categories").then(res => {
        const categories = res.data;
        commit('setItems', { resource:'categories', items: categories })
      });
    },

    fetchMeetupById({ commit }, meetupId) {
      commit('setItem', { resource:'meetup', items: {} })
      axios.get(`/api/v1/meetups/${meetupId}`)
        .then(resp => {
          const meetup = resp.data;
          commit('setItems', { resource:'meetup', items: meetup })
        });
    },

    fetchThreads({ commit }, meetupId) {
      axios.get(`/api/v1/threads?meetupId=${meetupId}`)
        .then(resp => {
          const threads = resp.data;
          commit('setItems', { resource:'threads', items: threads })

        });
    }
  },
  modules: {
  }
})
