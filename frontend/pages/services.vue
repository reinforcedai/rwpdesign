<template>
  <v-row justify="center" class="secondary" no-gutters>

    <v-col cols="12">
      <v-img
        :src="require('../assets/img/segreto-016.jpeg')"
        class="services-bg"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="10" md="4" class="text-center">
            <h1 class="primary--text font-weight-bold text-h4">{{ title }}</h1>
          </v-col>
        </v-row>
      </v-img>
    </v-col>


    <v-col cols="11">
      <v-row
        v-for="(item, i) in items"
        :key="item.i"
        justify="center"
        class="accent--text my-10"
      >
        <v-col cols="11" md="4" class="px-5">
          <nuxt-link to="" class="text-decoration-none">
            <h3 class="text-h5 font-weight-bold success--text">{{ item.title }}</h3>
            <p class="accent--text">{{ item.text }}</p>
            <p class="accent--text">{{ item.duration }}</p>
            <p class="accent--text">{{ item.cost }}</p>
          </nuxt-link>
          <v-btn outlined x-large class="success--text">Book Now</v-btn>
        </v-col>
        <v-col cols="11" md="6">
          <v-lazy>
            <v-img :src="item.src"></v-img>
          </v-lazy>
        </v-col>
      </v-row>
    </v-col>


    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    title: 'Our Services',
    description: '',
    image: '',
    items: [
        {
          title: 'Design Consultancy',
          src: require('../assets/img/segreto-016.jpeg'),
          text: 'Book for an hour and discover how we can transform your space',
          duration: '1 hr',
          cost: '950 AED',
          to: '',
        },
        {
          title: 'Space Audit',
          src: require('../assets/img/segreto-016.jpeg'),
          text: 'How many people can your space accomodate',
          duration: '6 hr',
          cost: '5,200 AED',
          to: '',
        },
        {
          title: 'Design Brief and Concept Pack',
          src: require('../assets/img/segreto-016.jpeg'),
          text: 'Design Pack suitable to assess the look and feel of the space',
          duration: '40 hr',
          cost: 'Contact Us',
          to: '',
        },
      ],
    
  }),

}
</script>
<style scoped>
.services-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}
</style>
