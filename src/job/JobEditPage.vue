<template>
  <div>
    <JobForm v-if="job" :initialJob="job" @onSave="jobUpdate" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import JobForm from '@/job/components/JobForm'

const { mapActions } = createNamespacedHelpers('job')

export default {
  created () {
    this.$store.dispatch('job/jobFetch', this.jobID)
  },
  computed: {
    job () {
      return this.$store.state.job.job
    },
    jobID () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions([
      'jobUpdate'
    ])
  },
  components: {
    JobForm
  }
}
</script>
