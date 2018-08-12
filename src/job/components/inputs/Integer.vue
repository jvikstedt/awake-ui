<template>
  <v-text-field outline label="Value" :value="value" @input="onChange" />
</template>

<script>

export default {
  props: ['value'],
  methods: {
    onChange (e) {
      const asInt = parseInt(e)
      if (isNaN(asInt)) {
        this.$emit('input', null)
      } else {
        this.$emit('input', asInt)
      }
    }
  }
}
</script>

<style>
</style>
