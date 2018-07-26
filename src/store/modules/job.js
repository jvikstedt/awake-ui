import api from '@/api'

import {
  ERROR_TRIGGERED
} from '@/store/types'

const JOB_FETCH_ALL_SUCCESS = 'JOB_FETCH_ALL_SUCCESS'

const state = {
  jobs: []
}

const mutations = {
  [JOB_FETCH_ALL_SUCCESS] (state, jobs) {
    state.jobs = jobs
  }
}

const actions = {
  async jobFetchAll ({ commit, state }) {
    try {
      const response = await api.get(`/jobs`)
      commit(JOB_FETCH_ALL_SUCCESS, response)
    } catch (e) {
      commit(ERROR_TRIGGERED, e, { root: true })
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
