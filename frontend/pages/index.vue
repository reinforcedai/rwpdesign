<template>
  <v-row justify="center" align="center" class="fill-height secondary" no-gutters>

    <v-col cols="12">
      <Carousel :slides="slides" />
    </v-col>

    <v-col cols="12" class="py-16">
      <h1 class="primary--text text-center pb-5">Testimonials</h1>
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
    slides: [
          {
            src: require('../assets/img/segreto-016.jpeg'),
            text: 'Commercial',
          },
          {
            src: require('../assets/img/segreto-terrace.jpeg'),
            text: 'Residential',
          },
          {
            src: require('../assets/img/firmenich-1-grande.jpeg'),
            text: 'Furniture Design',
          },
          {
            src: require('../assets/img/mv3.jpeg'),
            text: 'Commercial',
          },
          {
            src: require('../assets/img/mv4.jpeg'),
            text: 'Landscaping',
          },
          {
            src: require('../assets/img/mv5.jpeg'),
            text: 'Interior Architecture',
          },
        ],
  }),

  async asyncData({ $strapi }) {
    return {
      testimonials: await $strapi.find("testimonials"),
      // homepage: await $strapi.find("homepage"),
      // global: await $strapi.find("global"),
    };
  },

}
</script>
