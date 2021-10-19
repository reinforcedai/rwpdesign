import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  head: {
    titleTemplate: '%s - Richard W Puckrin',
    title: 'Home',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    '~/plugins/vue-swal'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/strapi',
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#FFFFFF',
          accent: '#A8A8A8',
          secondary: '#101010',
          info: '#332424',
          warning: '#00B55E',
          error: '#5C5C5C',
          success: '#00e776'
        },
      }
    }
  },

  build: {
  },

  env: {
    backendUrl: process.env.BACKEND_URL || "http://localhost:1337",
    },

  strapi: {
    entities: [],
  },


}
