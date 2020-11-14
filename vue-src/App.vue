<template>
  <div id="app">
    <ul>
      <router-link to="/login" tag="li">Login</router-link>
      <router-link to="/" tag="li">Home</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
