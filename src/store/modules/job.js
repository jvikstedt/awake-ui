import api from '@/api'

import {
  ERROR_TRIGGERED
} from '@/store/types'

const JOB_FETCH_ALL_SUCCESS = 'JOB_FETCH_ALL_SUCCESS'
const JOB_FETCH_SUCCESS = 'JOB_FETCH_SUCCESS'
const JOB_RESET = 'JOB_RESET'
const JOB_CREATE_SUCCESS = 'JOB_CREATE_SUCCESS'
const JOB_UPDATE_SUCCESS = 'JOB_UPDATE_SUCCESS'

const state = {
  jobs: [],
  job: null
}

const mutations = {
  [JOB_FETCH_ALL_SUCCESS] (state, jobs) {
    state.jobs = jobs
  },
  [JOB_FETCH_SUCCESS] (state, job) {
    state.job = job
  },
  [JOB_RESET] (state) {
    state.job = null
  },
  [JOB_CREATE_SUCCESS] (state, job) {
    state.job = job
  },
  [JOB_UPDATE_SUCCESS] (state, job) {
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
    commit(JOB_RESET)
    try {
      const job = await api.get(`/jobs/${jobID}`)

      commit(JOB_FETCH_SUCCESS, job)
    } catch (e) {
      commit(ERROR_TRIGGERED, e, { root: true })
    }
  },
  async jobCreate ({ commit, state }, jobData) {
    try {
      const job = await api.post(`/jobs`, jobData)

      commit(JOB_RESET)
      commit(JOB_CREATE_SUCCESS, job)
    } catch (e) {
      commit(ERROR_TRIGGERED, e, { root: true })
    }
  },
  async jobUpdate ({ commit, state }, jobData) {
    try {
      const job = await api.put(`/jobs/${jobData.id}`, jobData)

      commit(JOB_RESET)
      commit(JOB_UPDATE_SUCCESS, job)
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
