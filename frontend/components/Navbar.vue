<template>
  <v-row>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="info"
    >
        <nuxt-link to="/" exact class="text-decoration-none">
          <v-system-bar
            height="55"
            class="secondary primary--text"
          >
          <h1>{{ siteName }}</h1>
            <!-- <v-img
              alt="logo"
              contain
              src=""
              transition="scale-transition"
              width="200"
              class="shrink"
            /> -->
          </v-system-bar>
      </nuxt-link>
      <v-list nav>
        <v-menu offset-y attach>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-bind="attrs"
              v-on="on"
              exact
            >
              <v-list-item-content>
                <v-list-item-title class="primary--text text-capitalize">Services <v-icon dark color="accent">mdi-chevron-right</v-icon></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list class="secondary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              exact
            >
              <v-list-item-content>
                <v-list-item-title class="primary--text text-capitalize">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="primary--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
      app
      flat
      color="rgba(0, 0, 0, 0.6)"
    >
      <v-app-bar-nav-icon
        dark
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <nuxt-link to="/" exact class="text-decoration-none ml-5">
      <h1>{{ siteName }}</h1>
        <!-- <v-img
          contain
          src=""
          alt="logo"
          class="mx-auto"
          width="200"
        /> -->
      </nuxt-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down pr-16">
        <v-menu offset-y attach>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              tile
              text
              x-large
              class="primary--text text-capitalize"
            >
              Services <v-icon dark color="accent">mdi-chevron-right</v-icon>
            </v-btn>
          </template>
            <v-btn
              v-for="(item, index) in items"
              :key="index"
              :to="item.to"
              block
              text
              tile
              class="secondary primary--text text-capitalize"
            >
              {{ item.title }}
            </v-btn>
        </v-menu>
        <v-btn
          v-for="(item, i) in navItems"
          :key="i"
          :to="`${item.to}`"
          tile
          text
          x-large
          class="primary--text text-capitalize"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Our Services', to: '/services', },
        { title: 'Commercial', to: '/commercial', },
        { title: 'Residential', to: '/residential', },
        { title: 'Furniture Design', to: '/furniture', },
      ],
    }
  },
  computed: {
      ...mapGetters(['siteName', 'navItems']),
    },
  
}
</script>
