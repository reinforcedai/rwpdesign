<template>
  <span v-if="false" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'https://res.cloudinary.com/reinforcedai/image/upload/v1634629726/segreto-016_jyqx3j.jpg'
    }
  },
  head() {
    return {
      titleTemplate: '%s | Richard W Puckrin',
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },

      // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
        },
        { hid: 'twitter:site', name: 'twitter:site', content: 'Richard W Puckrin' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://rwp-design.com'
        },

        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Richard W Puckrin' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://rwp-design.com'
        },
      ]
    }
  }
}
</script>
