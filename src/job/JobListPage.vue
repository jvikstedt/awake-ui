<template>
  <div>
    <div v-for="job in jobs" :key="job.id">
      {{ job.name }}
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('job/jobFetchAll')
  },
  computed: {
    jobs () {
      return this.$store.state.job.jobs
    }
  }
}
</script>
