<template>
  <div className="mt-5">
    <v-toolbar flat color="white">
      <v-toolbar-title>Jobs</v-toolbar-title>
      <v-divider class="mx-2" inset vertical />
      <v-spacer></v-spacer>
      <v-btn color="primary" dark class="mb-2" @click="handleNew">New Job</v-btn>
    </v-toolbar>
    <v-data-table :headers="headers" :items="jobs" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.createdAt }}</td>
        <td class="">
          <v-icon small class="mr-2" @click="editJob(props.item.id)">
            edit
          </v-icon>
          <v-icon small @click="deleteJob(props.item.id)">
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('job/jobFetchAll')
  },
  data: () => ({
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'CreatedAt', value: 'createdAt' },
      { text: 'Actions', value: 'name', sortable: false }
    ]
  }),
  computed: {
    jobs () {
      return this.$store.state.job.jobs
    }
  },
  methods: {
    handleNew () {
      this.$router.push(`/jobs/new`)
    },
    editJob (jobID) {
      this.$router.push(`/jobs/${jobID}/edit`)
    },
    deleteJob (jobID) {
      this.$store.dispatch('job/jobDelete', jobID)
    }
  }
}
</script>
