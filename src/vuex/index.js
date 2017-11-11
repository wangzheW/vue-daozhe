import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home: home
	},
	state: {
		defaultCity: "北京"
	},
	getters: {
		getCity: function(state) {
			return state.defaultCity 
		}
	},
	mutations: {
		setCity (state, city) {
			state.defaultCity = city
		}
	},
	actions: {
		changeCity: function(context) {
			setTimeout(function() {
				context.commit("setCity", "南京")
			}, 1000);

		}
	}
})
