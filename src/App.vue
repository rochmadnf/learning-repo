<template>
  <div>
    <div class="links">
      <RouterLink to="/" active-class="active" class="link">Home</RouterLink>
      <RouterLink to="/about" active-class="active" class="link">About</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style scoped>
.links {
  padding: 20px
}

.links a {
  margin: 0 5px
}

.link {
  color: #f1f5f9;
}

.active {
  font-weight: 700;
  color: #EF4444;
}
</style>