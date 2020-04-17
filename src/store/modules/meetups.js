import axios from "axios"

export default {
	namespaced: true,

	state: {
		items: [],
		item: {}
	},
	mutations: {},
	actions: {
		fetchMeetups({ commit }) {
			commit('setItems', { resource: 'meetups', items: [] }, { root: true})
			return axios.get("/api/v1/meetups").then(res => {
				const meetups = res.data;
				commit('setItems', { resource: 'meetups', items: meetups }, { root: true })
			})
		},

		fetchMeetupById({ commit }, meetupId) {
			commit('setItem', { resource: 'meetups', item: {} }, { root: true})
			return axios.get(`/api/v1/meetups/${meetupId}`)
				.then(resp => {
					const meetup = resp.data;
					commit('setItem', { resource: 'meetups', item: meetup }, { root: true})
				});
		},
	}
}