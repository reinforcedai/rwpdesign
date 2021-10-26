<template>
    <v-carousel
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus-thick"
      height="80vh"
      class=""
    >
      <v-carousel-item
        v-for="(slide,i) in slides"
        :key="i"
        :src="slide.src"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col class="text-center primary--text">
            <h1 class="text-capitlize font-weight-bold text-md-h2 text-h4">{{ slide.text }}</h1>
            <v-btn
              outlined
              x-large
              class="primary--text mt-10"
            >
              Contact Us
            </v-btn>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
</template>

<script>

import { getMedia } from "../utils/medias";

  export default {

    props: {
      slides: {
        type: Array,
        default: () => ({}),
      },
    },

    methods: {
      getMedia,
    },
  
    data () {
      return {
        cycle: true,
      }
    },

  }
</script>
