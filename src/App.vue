<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <Navbar />
  <SideBar />
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  padding: 60px 0 0 200px;
}
</style>