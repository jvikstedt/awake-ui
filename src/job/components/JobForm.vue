<template>
  <v-form>
    <v-layout row wrap>
      <v-flex pr-2 sm6>
        <v-text-field v-model="job.name" label="Name" required />
      </v-flex>
      <v-flex pl-2 sm6>
        <v-text-field v-model="job.cron" label="Cron" />
      </v-flex>
    </v-layout>
    <v-switch :label="job.active ? 'Enabled' : 'Disabled̈́'" v-model="job.active" />
    <v-expansion-panel expand>
      <v-expansion-panel-content v-for="(sc, index) in job.stepConfigs" :key="index">
        <div slot="header">{{index}}</div>
        <v-card>
          <StepConfig :stepConfig="sc" />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-layout row wrap pt-2>
      <v-flex sm12>
        <v-btn @click="addNewStepConfig">Add Step</v-btn>
        <v-btn color="info" @click="onSaveClick">Save</v-btn>
      </v-flex>
    </v-layout>
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
    },
    addNewStepConfig () {
      this.job = {
        ...this.job,
        stepConfigs: [...this.job.stepConfigs, { tag: '', variables: {} }]
      }
    }
  },
  components: {
    StepConfig
  }
}
</script>
