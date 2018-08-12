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
            <component :is="getComponent(stepConfig.variables[key].type)" :value="stepConfig.variables[key].val" @input="(val) => onVariablesValChange(key, val)" />
          </v-flex>
          <v-flex pl-1 sm5 :key="key + '-type'">
            <v-text-field outline label="Type" :value="stepConfig.variables[key].type" @input="(val) => onVariablesTypeChange(key, val)" />
          </v-flex>
        </template>

        <InputCreator :onInputAdd="addNewVariable" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import _ from 'lodash'

import InputCreator from '@/job/components/InputCreator'

import IntegerInput from '@/job/components/inputs/Integer'
import StringInput from '@/job/components/inputs/String'
import FloatInput from '@/job/components/inputs/Float'
import BoolInput from '@/job/components/inputs/Bool'
import DynamicInput from '@/job/components/inputs/Dynamic'

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
    addNewVariable (name, type) {
      let defaultValue = null
      switch (type) {
        case 'bool':
          defaultValue = true
          break
        case 'integer':
          defaultValue = 0
          break
        case 'float':
          defaultValue = 0.0
          break
        default:
          defaultValue = ''
          break
      }
      this.stepConfig.variables = {
        ...this.stepConfig.variables,
        [name]: { type, val: defaultValue }
      }
    },
    removeVariableByKey (key) {
      this.stepConfig.variables = _.omit(this.stepConfig.variables, key)
    },
    getComponent (inputType) {
      switch (inputType) {
        case 'integer':
          return IntegerInput
        case 'string':
          return StringInput
        case 'float':
          return FloatInput
        case 'bool':
          return BoolInput
        case 'dynamic':
          return DynamicInput
      }
    }
  },
  components: {
    InputCreator,
    IntegerInput,
    StringInput,
    FloatInput,
    BoolInput,
    DynamicInput
  }
}
</script>
