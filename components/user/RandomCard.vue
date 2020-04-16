<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">{{
          fullName
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="100">
        <v-avatar color="orange" size="100">
          <img :src="user.picture.medium" />
        </v-avatar>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-chip class="ma-2" color="orange" label outlined>
        {{ user.location.city }}
      </v-chip>
      <v-chip class="ma-2" color="orange" label outlined>
        {{ user.gender }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true }
  },
  computed: {
    fullName() {
      return `${this.user.name.title} ${this.user.name.first} ${this.user.name.last}`
    }
  }
}
</script>
