<template>
  <div>
    <el-button
      size="mini"
      @click="handleNew">New</el-button>

    <el-table
      :data="jobs"
      style="width: 100%">
      <el-table-column
        label="Name"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        label="Date"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createdAt }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  },
  methods: {
    handleNew () {
      this.$router.push(`/jobs/new`)
    },
    handleEdit (jobID) {
      this.$router.push(`/jobs/${jobID}/edit`)
    },
    handleDelete (jobID) {
      this.$store.dispatch('job/jobDelete', jobID)
    }
  }
}
</script>
