import api from '@/api'

import {
  ERROR_TRIGGERED
} from '@/store/types'

const JOB_FETCH_ALL_SUCCESS = 'JOB_FETCH_ALL_SUCCESS'
const JOB_FETCH_SUCCESS = 'JOB_FETCH_SUCCESS'

const state = {
  jobs: [],
  job: {}
}

const mutations = {
  [JOB_FETCH_ALL_SUCCESS] (state, jobs) {
    state.jobs = jobs
  },
  [JOB_FETCH_SUCCESS] (state, job) {
    state.job = job
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
  },
  async jobFetch ({ commit, state }, jobID) {
    try {
      const job = await api.get(`/jobs/${jobID}`)

      commit(JOB_FETCH_SUCCESS, job)
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
