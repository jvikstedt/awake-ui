<template>
  <v-app>
    <v-navigation-drawer app />
    <v-toolbar app />
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <v-layout column>
              <v-flex>
                <Flash />
              </v-flex>
              <v-flex>
                <router-view />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app />
  </v-app>
</template>

<script>
import Flash from '@/common/Flash'

export default {
  components: {
    Flash
  }
}
</script>
