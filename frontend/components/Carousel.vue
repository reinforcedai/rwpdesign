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
            <h1 class="text-uppercase font-weight-bold text-md-h2 text-h4">{{ slide.text }}</h1>
            <v-btn
              outlined
              x-large
              class="primary--text mt-10"
            >Contact Us</v-btn>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        cycle: true,
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
      }
    },
  }
</script>
