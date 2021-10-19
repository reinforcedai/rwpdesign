<template>
  <v-row justify="center" class="secondary py-16">

    <v-col cols="12" class="text-center pt-10">
       <h1 class="primary--text font-weight-bold text-h4">{{ title }}</h1>
    </v-col>

    <v-col cols="10" md="4" class="text-center">
      <contact />
    </v-col>

    <v-col cols="10" md="6">
      <ContactForm />
    </v-col>
  </v-row>
</template>
<script>

export default {
  data: () => ({
    title: 'Contact Us',
    description: '',
  }),
  
}
</script>
