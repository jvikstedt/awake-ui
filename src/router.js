import Vue from 'vue'
import Router from 'vue-router'
import JobListPage from './job/JobListPage.vue'
import JobEditPage from './job/JobEditPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'jobs',
      component: JobListPage
    },
    {
      path: '/jobs/:id/edit',
      name: 'job',
      component: JobEditPage
    }
  ]
})
