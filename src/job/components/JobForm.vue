<template>
  <div>
    <el-form ref="job" :model="job" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="job.name" placeholder="Name" />
      </el-form-item>
      <el-form-item label="Cron">
        <el-input v-model="job.cron" placeholder="Cron" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSaveClick">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['initialJob'],
  data: function () {
    return {
      job: this.initialJob
    }
  },
  methods: {
    onSaveClick () {
      this.$emit('onSave', this.job)
    }
  }
}
</script>
