<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <v-btn
        v-for="(link, i) in socialLinks"
        :key="i"
        icon
        :href="link.url"
        target="_blank"
        class="mx-1 success--text"
      >
        <v-icon size="30px">
          {{ link.icon }}
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
      ...mapGetters(['socialLinks']),
    },
}
</script>
