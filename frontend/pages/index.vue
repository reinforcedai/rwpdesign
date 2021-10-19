<template>
  <v-row justify="center" align="center" class="fill-height secondary" no-gutters>

    <v-col cols="12">
      <Carousel />
    </v-col>

    <v-col cols="10" class="py-16">
      <h1 class="primary--text text-center">Testimonials</h1>
      <Testimonials :testimonials=testimonials />
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    transition: '',
    title: 'Home',
    description: '',
    image: 'https://res.cloudinary.com/reinforcedai/image/upload/v1634629726/segreto-016_jyqx3j.jpg',
    items: [
        {
          title: '',
          text: '',
        },
      ],
  }),

  async asyncData({ $strapi }) {
    return {
      testimonials: await $strapi.find("testimonies"),
      // homepage: await $strapi.find("homepage"),
      // global: await $strapi.find("global"),
    };
  },

}
</script>
