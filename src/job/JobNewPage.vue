<template>
  <div>
    <JobForm :initialJob="job" @onSave="jobCreate" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import JobForm from '@/job/components/JobForm'

const { mapActions } = createNamespacedHelpers('job')

export default {
  data: () => ({
    job: {
      name: 'test',
      cron: '@every 15m',
      stepConfigs: [
        {
          tag: 'foo',
          variables: {
            actual: { type: 'dynamic', val: '${0:code}' },
            expected: { type: 'integer', val: 200 }
          }
        },
        {
          tag: 'foo2'
        }
      ]
    }
  }),
  methods: {
    ...mapActions([
      'jobCreate'
    ])
  },
  components: {
    JobForm
  }
}
</script>
