import Vue from 'vue'
import Router from 'vue-router'
import JobListPage from './job/JobListPage.vue'
import JobNewPage from './job/JobNewPage.vue'
import JobEditPage from './job/JobEditPage.vue'
import ResultListPage from './result/ResultListPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/jobs'
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobListPage
    },
    {
      path: '/jobs/new',
      name: 'newjob',
      component: JobNewPage
    },
    {
      path: '/jobs/:id/edit',
      name: 'editjob',
      component: JobEditPage
    },
    {
      path: '/results',
      name: 'results',
      component: ResultListPage
    }
  ]
})
