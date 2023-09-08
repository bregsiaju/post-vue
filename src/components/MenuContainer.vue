<template>
  <div class="pb-4">
    <h5 class="mb-3">Menu</h5>
    <p v-if="loading">Loading menu ...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="menus" class="row g-4 row-cols-lg-3">
      <div v-for="menu in menus" :key="menu.id" class="col">
        <CardMenu :data="menu" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardMenu from './CardMenu.vue'
import { storeToRefs } from 'pinia'
import { useMenuStore } from '../stores/menus'

const { menus, loading, error } = storeToRefs(useMenuStore())
const { fetchMenus } = useMenuStore()

fetchMenus()
</script>

<style lang="scss" scoped></style>