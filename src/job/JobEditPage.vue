<template>
  <div>
    {{ job.name }}
  </div>
</template>

<script>
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
  }
}
</script>
