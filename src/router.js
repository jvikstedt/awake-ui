import Vue from 'vue'
import Router from 'vue-router'
import JobListPage from './job/JobListPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jobs',
      component: JobListPage
    }
  ]
})
