<template>
  <v-row justify="center" align="center" class="fill-height secondary py-16 px-3" no-gutters>

    <v-col
      v-for='photo in photos'
      :key='photo.id'
      cols="10"
      md="4"
      class="pa-3"
    >
      <v-card
        flat
        min-height="300"
        class="info"
      >
        <v-img
          :src="getMedia(photo.image.url)"
          height="300"
          alt="image"
          class="primary--text"
        />
        <h3 class="primary--text text-center">{{ photo.title }}</h3>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getMedia } from "../utils/medias";

export default {
  data: () => ({
    title: 'Gallery',
    description: '',
    image: ''
  }),

  async asyncData({ $strapi }) {
    return {
      photos: await $strapi.find("galleries"),
    };
  },

  methods: {
    getMedia,
  },
}
</script>
