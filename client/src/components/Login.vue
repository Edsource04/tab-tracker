<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
           <br>
           <v-text-field
             label="Password"
             v-model="password"
           ></v-text-field>
           <br>
          <div v-html="error" class="error"/>
          <v-btn  class="teal" dark @click="login">Login</v-btn>
         </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      AuthenticationService.login({
        email: this.email,
        password: this.password
      }).then((user) => {
        this.$router.push('home')
      }).catch((err) => {
        this.error = err.response.data.error
      })
    }
  }
}
</script>

<style scoped>
  .error {
    color: red
  }
</style>
