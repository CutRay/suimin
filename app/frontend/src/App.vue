<template>
  <div>
    <p class="message">{{ message }}</p>
    <ul>
      <li><router-link to="/">Top</router-link></li>
      <li><router-link to="/page">Page</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'message'
    }
  }
}
</script>
<style>
.message {
  color: red;
}
</style>
