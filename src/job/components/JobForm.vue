<template>
  <v-form>
    <v-text-field v-model="job.name" label="Name" required />
    <v-text-field v-model="job.cron" label="Cron" />
    <v-btn color="info" @click="onSaveClick">Save</v-btn>
  </v-form>
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
