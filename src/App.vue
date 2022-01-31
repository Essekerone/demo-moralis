<template>
  <div class="background-image"></div>
  <div id="nav">
    <router-link to="/">BattleGround</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/shop">Shop</router-link> |
    <router-link to="/player">PlayerPanel</router-link>
  </div>
  <router-view/>
</template>
<script lang="ts">
export default {

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #61ffb3;
}
.background-image {
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1000;
  background: rgb(4,51,51);
  background: radial-gradient(circle, rgba(4,51,51,1) 0%, rgba(2,0,36,1) 0%, rgba(23,240,174,0.87718837535014) 24%, rgba(102,103,171,1) 90%);
  /*background: url('../assets/background-main.jpg') no-repeat center center fixed;*/
  /*background-size: cover;*/
}
</style>
