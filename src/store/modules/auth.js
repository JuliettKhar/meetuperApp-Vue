/*eslint-disable */
import axios from "axios"

export default {
	namespaced: true,

	state: {
		items: [],
	},
	mutations: {},
	actions: {
    signIn ( {commit}, payload) {
      console.log(payload)
    },

    signUp ( {commit}, payload) {
      console.log(payload)
    }
	}
}