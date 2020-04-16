<template>
  <div>
    <v-row>
      <v-col v-for="(user, index) in randomUsers" :key="index" cols="12" sm="3">
        <random-card :user="user" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RandomCard from '@/components/user/RandomCard'

export default {
  middleware: 'auth',
  components: {
    RandomCard
  },

  computed: {
    ...mapState({
      randomUsers: (state) => state.randomUsers.randomUsers
    })
  },
  created() {
    this.fetchRandomUsers()
  },
  methods: {
    async fetchRandomUsers() {
      const response = await this.$store.dispatch('randomUsers/getRandomUsers')

      if (response.error) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'error',
          text: response.error
        })
      } else {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: 'Fetch RandomUsers Succesfully'
        })
      }
    }
  }
}
</script>
