<template>
  <v-form>
    <v-text-field v-model="job.name" label="Name" required />
    <v-text-field v-model="job.cron" label="Cron" />
    <v-expansion-panel expand>
      <v-expansion-panel-content v-for="(sc, index) in job.stepConfigs" :key="index">
        <div slot="header">{{index}}</div>
        <v-card>
          <StepConfig :stepConfig="sc" />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
