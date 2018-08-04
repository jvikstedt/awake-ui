<template>
  <transition name="fade">
    <v-alert v-if="flash" :value="flash" :type="flash.status" dismissible>
      {{ flash.body }}
    </v-alert>
  </transition>
</template>

<script>
import {
  CLEAR_FLASH
} from '@/store/types'

export default {
  computed: {
    flash () {
      return this.$store.state.flash
    }
  },

  methods: {
    removeFlash (event) {
      this.$store.commit(CLEAR_FLASH)
    }
  }
}
</script>
<style>
  .flash-message {
    margin-bottom: 1em !important;
  }
</style>
