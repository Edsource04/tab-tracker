<template>
  <v-toolbar fixed class="teal" dark>
    <v-toolbar-title class="mr-4">
     <span class="home" @click="navigateTo('home')">Tab Tracker</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo('login')">
        Login
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo('register')">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover{
      color: #9C27B0;
  }
</style>
