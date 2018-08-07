<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 :key="stepConfig.tag">
          <v-text-field v-model="stepConfig.tag" label="Tag" required />
        </v-flex>
        <template v-for="(value, key) in stepConfig.variables">
          <v-flex pr-1 sm2 :key="key + '-label'">
            <p>{{ key }}</p>
            <v-btn @click="() => removeVariableByKey(key)">X</v-btn>
          </v-flex>
          <v-flex pr-1 sm5 :key="key + '-val'">
            <v-text-field outline label="Name" :value="stepConfig.variables[key].val" @input="(val) => onVariablesValChange(key, val)" />
          </v-flex>
          <v-flex pl-1 sm5 :key="key + '-type'">
            <v-text-field outline label="Type" :value="stepConfig.variables[key].type" @input="(val) => onVariablesTypeChange(key, val)" />
          </v-flex>
        </template>

        <v-flex sm2 key="new-variable-label">
          <v-text-field outline label="Name" v-model="newVariableName" />
        </v-flex>
        <v-flex sm2 key="new-variable">
          <v-btn @click="addNewVariable">Add</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['stepConfig'],
  data: function () {
    return {
      newVariableName: ''
    }
  },
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
    },
    addNewVariable () {
      if (this.newVariableName === '') { return }

      this.stepConfig.variables = {
        ...this.stepConfig.variables,
        [this.newVariableName]: { type: 'string', val: '' }
      }
      this.newVariableName = ''
    },
    removeVariableByKey (key) {
      this.stepConfig.variables = _.omit(this.stepConfig.variables, key)
    }
  }
}
</script>
