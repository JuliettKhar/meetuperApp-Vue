import axios from "axios"

export default {
	namespaced: true,

	state: {
		items: [],
	},
	mutations: {},
	actions: {
		fetchThreads({ commit }, meetupId) {
			return axios.get(`/api/v1/threads?meetupId=${meetupId}`)
				.then(resp => {
					const threads = resp.data;
					commit('setItems', { resource: 'threads', items: threads }, { root: true})

				});
		}
	}
}