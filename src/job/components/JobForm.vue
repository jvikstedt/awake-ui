<template>
  <v-form>
    <v-text-field v-model="job.name" label="Name" required />
    <v-text-field v-model="job.cron" label="Cron" />
    <StepConfig v-for="(sc, index) in job.stepConfigs" :stepConfig="sc" :key="index" />
    <v-btn color="info" @click="onSaveClick">Save</v-btn>
  </v-form>
</template>

<script>
import StepConfig from '@/job/components/StepConfig'

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
  },
  components: {
    StepConfig
  }
}
</script>
