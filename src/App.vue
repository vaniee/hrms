<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/leavehome">Leave Management</router-link> | 
      <router-link to="/leaverequestquickpage">Leave Pending Request</router-link> |
      <router-link to="/claimhome">Claim Management</router-link> |
      <router-link to="/about">About</router-link>
    </div>
      <v-container fluid>
        <v-app>
          <router-view/>
        </v-app>
      </v-container>
  </div>
</template>

<style lang="less">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
