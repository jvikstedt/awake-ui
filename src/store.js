import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const ERROR_TRIGGERED = 'ERROR_TRIGGERED'
const JOB_FETCH_ALL_SUCCESS = 'JOB_FETCH_ALL_SUCCESS'

export default new Vuex.Store({
  state: {
    jobs: []
  },
  mutations: {
    [JOB_FETCH_ALL_SUCCESS] (state, jobs) {
      state.jobs = jobs
    },
    [ERROR_TRIGGERED] (state, error) {
    }
  },
  actions: {
    async jobFetchAll ({ commit, state }) {
      try {
        const response = await api.get(`/jobs`)
        commit(JOB_FETCH_ALL_SUCCESS, response)
      } catch (e) {
        commit(ERROR_TRIGGERED, e)
      }
    }
  }
})
