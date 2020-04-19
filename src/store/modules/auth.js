import axios from "axios"

export default {
	namespaced: true,

	state: {
		user: null,
	},
	getters: {
		getAuthUser (state) {
			return state.user || null
		},
		isAuthenticated (state) {
			return !!state.user
		}
	},
	mutations: {
		setAuthUser (state, user) {
			state.user = user;
		}
	},
	actions: {
    signIn ( {commit}, payload) {
			return axios.post('/api/v1/users/login', payload)
				.then(res => {
					const user = res.data;
					commit('setAuthUser', user)
				});
		},
		
		logout ({commit}) {
			return axios.post('/api/v1/users/logout')
			.then( () => commit('setAuthUser', null) )
			.catch( e => console.log(e))
		},

    signUp ( payload) {
      return axios.post('/api/v1/users/register', payload);
		},
		
		getAuthUser ({commit}) {
			return axios.get('/api/v1/users/me')
			.then(res => {
				const user = res.data;
				commit('setAuthUser', user)
			})
			.catch(e => {
				commit('setAuthUser', null)
				return e
			})
		}
	}
}