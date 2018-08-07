import api from '@/api'
import router from '@/router'

import {
  ERROR_TRIGGERED,
  SUCCESS_MESSAGE
} from '@/store/types'

const JOB_RESET = 'JOB_RESET'
const JOB_FETCH_ALL_SUCCESS = 'JOB_FETCH_ALL_SUCCESS'
const JOB_FETCH_SUCCESS = 'JOB_FETCH_SUCCESS'
const JOB_CREATE_SUCCESS = 'JOB_CREATE_SUCCESS'
const JOB_UPDATE_SUCCESS = 'JOB_UPDATE_SUCCESS'
const JOB_DELETE_SUCCESS = 'JOB_DELETE_SUCCESS'

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
  },
  [JOB_DELETE_SUCCESS] (state, job) {
    state.jobs = state.jobs.filter(j => j.id !== job.id)
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
      commit(SUCCESS_MESSAGE, `Job (${jobData.name}) created succesfully!`, { root: true })
      router.push('/jobs')
    } catch (e) {
      commit(ERROR_TRIGGERED, e, { root: true })
    }
  },
  async jobUpdate ({ commit, state }, jobData) {
    try {
      const job = await api.put(`/jobs/${jobData.id}`, jobData)

      commit(JOB_RESET)
      commit(JOB_UPDATE_SUCCESS, job)
      commit(SUCCESS_MESSAGE, `Job (${jobData.name}) updated succesfully!`, { root: true })
    } catch (e) {
      commit(ERROR_TRIGGERED, e, { root: true })
    }
  },
  async jobDelete ({ commit, state }, jobID) {
    try {
      const response = await api.delete(`/jobs/${jobID}`)
      commit(JOB_DELETE_SUCCESS, response)
      commit(SUCCESS_MESSAGE, `Job (${response.name}) deleted succesfully!`, { root: true })
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
