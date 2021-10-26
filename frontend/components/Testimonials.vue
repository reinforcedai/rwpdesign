<template>
  <v-row justify="center" align="center" class="fill-height px-2" no-gutters>
    <v-col
      v-for='testimonial in testimonials'
      :key='testimonial.id'
      cols="12"
      md="4"
      class="pa-2"
    >
      <v-card
        flat
        min-height="200"
        class="info"
      >
        <v-card-title>
          <v-avatar size="100" class="mx-auto">
            <v-img
              :src="getMedia(testimonial.image.url)"
              alt="photo"
              class=""
            />
          </v-avatar>
        </v-card-title>
        <h3 class="primary--text text-center">{{ testimonial.name }}</h3>
        <v-card-subtitle class="accent--text text-center">{{ testimonial.portfolio }}</v-card-subtitle> 
        <v-card-subtitle class="accent--text">{{ testimonial.testimony }}</v-card-subtitle> 
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getMedia } from "../utils/medias";

export default {
  props: {
    testimonials: {
      type: Array,
      default: () => ({}),
    },
  },

  methods: {
    getMedia,
  },
}
</script>
