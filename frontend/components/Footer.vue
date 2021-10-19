<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="secondary text-center">
      <v-row class="info py-16">
        
        <v-col cols="12" md="4" class="text-center text-no-wrap">
          <h3 class="success--text text-uppercase">Contact Us</h3>
          <contact />
        </v-col>

        <v-col cols="12" md="4">
          <nuxt-link to="/" exact class="text-decoration-none">
            <h1 class="success--text">{{ siteName }}</h1>
            <!-- <v-img
              contain
              src=""
              width="400"
              class="mx-auto"
            /> -->
          </nuxt-link>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <h3 class="success--text text-uppercase">Follow Us</h3>
          <social-links />
        </v-col>
      </v-row>

      <v-card-text class="success--text my-16">
        &copy; {{ new Date().getFullYear() }} - {{ companyName }}
      </v-card-text>
      
    </v-card>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['companyName', 'siteName']),
  },
}
</script>
