<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
           <input type="email"
             name="email"
             v-model="email"
             placeholder="Type Email" />
           <br>
          <input type="password"
            name="password"
            v-model="password"
            placeholder="Type Password" />
           <br>
          <div v-html="error" class="error"/>
          <v-btn  class="cyan" dark @click="register">Register</v-btn>
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
    register () {
      AuthenticationService.register({
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
