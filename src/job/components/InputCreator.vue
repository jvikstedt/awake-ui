<template>
  <v-layout row wrap>
    <v-flex sm2>
      <v-text-field outline label="name" v-model="inputName" />
    </v-flex>
    <v-flex sm2>
      <v-select
        :items="items"
        label="Type"
        v-model="inputType"
        solo
      />
    </v-flex>
    <v-flex sm2>
      <v-btn @click="inputCreate">Add input</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  props: ['onInputAdd'],
  data: () => ({
    inputName: '',
    inputType: '',
    items: [
      { text: 'Integer', value: 'integer' },
      { text: 'String', value: 'string' },
      { text: 'Float', value: 'float' },
      { text: 'Bool', value: 'bool' },
      { text: 'Dynamic', value: 'dynamic' }
    ]
  }),
  methods: {
    inputCreate () {
      this.onInputAdd(this.inputName, this.inputType)
      this.inputName = ''
      this.inputType = ''
    }
  }
}
</script>

<style>
</style>
