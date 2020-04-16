<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="amber" flat>
          <v-toolbar-title
            >Welcome - 2Brains Vuejs FirebaseAuth Nuxt</v-toolbar-title
          >
        </v-toolbar>
        <AuthForm :submit-form="loginUser" button-text="Login" />
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
    async loginUser(loginInfo) {
      const response = await this.$fireAuth.signInWithEmailAndPassword(
        loginInfo.email,
        loginInfo.password
      )

      if (response.error) {
        // eslint-disable-next-line no-console
        console.log('SignIn Error', response.error)
      } else {
        // eslint-disable-next-line no-console
        console.log('SignIn Successfully', response)
        this.$router.push('/inspire')
      }
    }
  }
}
</script>
