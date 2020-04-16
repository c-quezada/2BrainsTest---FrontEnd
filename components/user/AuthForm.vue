<template>
  <v-card-text>
    <v-form v-model="valid">
      <v-text-field
        v-model="userInfo.email"
        label="Email"
        type="text"
        :rules="[required('email'), emailFormat()]"
      ></v-text-field>

      <v-text-field
        v-model="userInfo.password"
        label="Password"
        type="password"
        counter
        :rules="[required('password'), minLength('password', 8)]"
      ></v-text-field>
    </v-form>
    <v-card-actions>
      <v-btn :disabled="!valid" @click="auth(userInfo, 'signUp')"
        >Sign Up</v-btn
      >
      <v-spacer />
      <v-btn :disabled="!valid" @click="auth(userInfo, 'signIn')"
        >Sign In</v-btn
      >
    </v-card-actions>
  </v-card-text>
</template>

<script>
import validations from '@/utils/validations'

export default {
  props: {
    auth: { type: Function, required: true }
  },
  data: () => ({
    valid: false,
    userInfo: {
      email: '',
      password: ''
    },
    ...validations
  })
}
</script>
