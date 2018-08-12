<template>
  <v-select
    :items="items"
    label="Value"
    solo
    v-model="selected"
    :input="value"
    @change="onChange"
  ></v-select>
</template>

<script>

export default {
  props: ['value'],
  data: () => ({
    selected: true,
    items: [
      { text: 'True', value: true },
      { text: 'False', value: false }
    ]
  }),
  methods: {
    onChange () {
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style>
</style>
