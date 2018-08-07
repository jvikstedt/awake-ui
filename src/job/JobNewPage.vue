<template>
  <div>
    <JobForm :initialJob="{stepConfigs: []}" @onSave="jobCreate" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import JobForm from '@/job/components/JobForm'

const { mapActions } = createNamespacedHelpers('job')

export default {
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
