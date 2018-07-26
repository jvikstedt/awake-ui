<template>
  <div>
    <router-link :to="'/jobs/' + job.id + '/edit'" class="item" v-for="job in jobs" :key="job.id">
      {{ job.name }}
    </router-link>
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
