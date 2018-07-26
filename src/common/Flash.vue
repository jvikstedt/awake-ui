<template>
  <transition name="fade">
    <el-alert
      v-if="flash"
      class="flash-message"
      :title="flash.header"
      :type="flash.status"
      :description="flash.body"
      show-icon
      @close="removeFlash"
    />
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
