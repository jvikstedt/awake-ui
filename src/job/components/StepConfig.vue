<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 :key="key + '-val'">
          <v-text-field v-model="stepConfig.tag" label="Tag" required />
        </v-flex>
        <template v-for="(value, key) in stepConfig.variables">
          <v-flex pr-1 sm6 :key="key + '-val'">
            <v-text-field outline label="Name" :value="stepConfig.variables[key].val" @input="(val) => onVariablesValChange(key, val)" />
          </v-flex>
          <v-flex pl-1 sm6 :key="key + '-type'">
            <v-text-field outline label="Type" :value="stepConfig.variables[key].type" @input="(val) => onVariablesTypeChange(key, val)" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['stepConfig'],
  methods: {
    onVariablesValChange (key, value) {
      this.stepConfig.variables = {
        ...this.stepConfig.variables,
        [key]: { ...this.stepConfig.variables[key], val: value }
      }
    },
    onVariablesTypeChange (key, value) {
      this.stepConfig.variables = {
        ...this.stepConfig.variables,
        [key]: { ...this.stepConfig.variables[key], type: value }
      }
    }
  }
}
</script>
