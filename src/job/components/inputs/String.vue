<template>
  <v-text-field outline label="Value" :value="value" @input="onChange" />
</template>

<script>

export default {
  props: ['value'],
  methods: {
    onChange (e) {
      this.$emit('input', e)
    }
  }
}
</script>

<style>
</style>
