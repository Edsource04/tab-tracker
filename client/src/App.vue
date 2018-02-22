<template>
  <div id="app">
    <v-app>
      <AppHeader />
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
  </v-app>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
