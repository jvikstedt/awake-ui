<template>
  <v-app>
    <v-navigation-drawer app />
    <v-toolbar app />
    <v-content>
      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex d-flex xs12 order-xs5>
            <v-layout column>
              <v-flex d-flex>
                <Flash />
              </v-flex>
              <v-flex d-flex>
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
