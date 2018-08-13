import api from '@/api'

import {
  ERROR_TRIGGERED
} from '@/store/types'

const RESULT_FETCH_ALL_SUCCESS = 'RESULT_FETCH_ALL_SUCCESS'

const state = {
  results: []
}

const mutations = {
  [RESULT_FETCH_ALL_SUCCESS] (state, results) {
    state.results = results
  }
}

const actions = {
  async resultFetchAll ({ commit, state }) {
    try {
      const response = await api.get(`/results`)
      commit(RESULT_FETCH_ALL_SUCCESS, response)
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
