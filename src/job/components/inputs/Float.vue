<template>
  <v-text-field outline label="Value" :value="value" @input="onChange" />
</template>

<script>

export default {
  props: ['value'],
  methods: {
    onChange (e) {
      const asFloat = parseFloat(e)
      if (isNaN(asFloat)) {
        this.$emit('input', null)
      } else {
        this.$emit('input', asFloat)
      }
    }
  }
}
</script>

<style>
</style>
