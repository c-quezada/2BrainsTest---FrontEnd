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
      <v-spacer />
      <v-btn :disabled="!valid" color="amber" @click="submitForm(userInfo)">{{
        buttonText
      }}</v-btn>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import validations from '@/utils/validations'

export default {
  props: {
    submitForm: { type: Function, required: true },
    buttonText: { type: String, required: true }
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
