<template>
  <v-app id="app-template">
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5"
        >2Brains&nbsp;<span class="font-weight-light">Test | Welcome </span>
        <span v-if="authUser">{{ authUser.email }}</span></span
      >
      <v-spacer />

      <div v-if="authUser" class="mx-1">
        <v-btn @click="logoutUser">Logout</v-btn>
      </div>
      <div v-else class="mx-1">
        <v-btn to="/" nuxt>Sign Up</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, index) in items">
          <v-list-item :key="index" link>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                <v-btn text small block :href="item.link">{{
                  item.text
                }}</v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid class="fill-height">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    drawer: false,
    items: [
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/cpqm07/' },
      { text: 'GitHub', link: 'http://github.com/cpqm07' }
    ]
  }),
  computed: {
    ...mapState({
      authUser: (state) => state.firebase.authUser
    })
  },

  methods: {
    async logoutUser() {
      try {
        await this.$fireAuth.signOut()
        // eslint-disable-next-line no-console
        console.log('signOut')
        this.$router.push('/')
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('signOut Error', error)
      }
    }
  }
}
</script>
