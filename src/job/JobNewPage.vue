<template>
  <div>
    <JobForm :initialJob="{}" @onSave="jobCreate" />
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
