import Vue from 'vue'
import Vuex from 'vuex'
import job from './modules/job'
import result from './modules/result'

import {
  ERROR_TRIGGERED,
  SUCCESS_MESSAGE,
  CLEAR_FLASH
} from '@/store/types'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'job': job,
    'result': result
  },
  state: {
    flash: null
  },
  mutations: {
    [ERROR_TRIGGERED] (state, error) {
      state.flash = { status: 'error', header: 'Something went wrong!', body: error.toString() }
    },
    [SUCCESS_MESSAGE] (state, msg) {
      state.flash = { status: 'success', header: 'All good!', body: msg }
    },
    [CLEAR_FLASH] (state) {
      state.flash = null
    }
  }
})
