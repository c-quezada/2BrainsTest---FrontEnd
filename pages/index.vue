<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="amber" flat>
          <v-toolbar-title
            >Welcome - 2Brains Vuejs FirebaseAuth Nuxt</v-toolbar-title
          >
        </v-toolbar>
        <AuthForm :auth="auth" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AuthForm from '@/components/user/AuthForm'

export default {
  components: {
    AuthForm
  },
  methods: {
    async auth(loginInfo, type) {
      let response = null

      switch (type) {
        case 'signIn':
          response = await this.$fireAuth.signInWithEmailAndPassword(
            loginInfo.email,
            loginInfo.password
          )
          break
        case 'signUp':
          response = await this.$fireAuth.createUserWithEmailAndPassword(
            loginInfo.email,
            loginInfo.password
          )
          break
      }

      if (response.error) {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: response.error
        })
      } else {
        this.$router.push('/inspire')
        this.$store.dispatch('snackbar/setSnackbar', {
          text: 'Welcome'
        })
      }
    }
  }
}
</script>
