<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script setup lang="ts">
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
</script>
