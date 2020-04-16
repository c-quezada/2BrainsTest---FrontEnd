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
    printMessage(message) {
      this.$store.dispatch('snackbar/setSnackbar', {
        text: message,
        color: 'error'
      })
    },
    async auth(loginInfo, type) {
      // eslint-disable-next-line no-console
      console.log('loginInfo', loginInfo)
      // eslint-disable-next-line no-console
      console.log('type', type)

      switch (type) {
        case 'signIn':
          await this.$fireAuth
            .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
            .then((response) => this.$router.push('/inspire'))
            .catch((error) => this.printMessage(error))
          break
        case 'signUp':
          await this.$fireAuth
            .createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
            .then((response) => this.$router.push('/inspire'))
            .catch((error) => this.printMessage(error))
          break
      }
    }
  }
}
</script>
