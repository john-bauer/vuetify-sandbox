<template>
  <v-toolbar app dark>
      <router-link to="/" class="noRouterStyle">
        <v-toolbar-title>
          <span>Vuetify</span>
          <span class="font-weight-light ma-1">sandbox</span>
        </v-toolbar-title>
      </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu
        bottom
        offset-y
        open-on-hover
        dark
        >
        <v-btn
          slot="activator"
          dark
          flat
        >
          Components
          <v-icon small dark>expand_more</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
          v-for="item in components"
          :key="item.title"
          :to="item.link"
          >{{ item.title }}
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: String,
  },
  data() {
    return {
      home: '/',
      components: [
        {
          icon: 'buttons',
          title: 'Buttons',
          link: '/components/buttons',
        },
        {
          icon: 'home',
          title: 'Tabs',
          link: '/components/tabs',
        },
        {
          icon: 'home',
          title: 'Dialogs',
          link: '/components/dialogs',
        },
      ],
    };
  },
};
</script>

<style>
.noRouterStyle {
  text-decoration: none;
  color: #fff;
}

</style>
