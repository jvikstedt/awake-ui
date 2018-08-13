<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="result in results" :key="result.id">
      <div slot="header">{{ result.id }}</div>
      <v-card>
        <v-card-text>
          <pre> {{ JSON.stringify(result, null, 2) }} </pre>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('result/resultFetchAll')
  },
  computed: {
    results () {
      return this.$store.state.result.results
    }
  }
}
</script>
