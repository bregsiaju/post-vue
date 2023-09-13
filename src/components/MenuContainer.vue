<template>
  <div class="pb-4">
    <h5 class="mb-3">Menu</h5>
    <p v-if="loading">Loading menu ...</p>
    <div v-if="menus.length === 0 || filteredMenus.length === 0" class="row g-4 row-cols-lg-3">
      <p class="w-100 text-center">Menu yang dicari tidak ditemukan.</p>
    </div>
    <div v-else-if="isFilter || isSearch" class="row g-4 row-cols-lg-3">
      <div v-for="menu in filteredMenus" :key="menu.id" class="col">
        <CardMenu :data="menu" />
      </div>
    </div>
    <div v-else-if="menus" class="row g-4 row-cols-lg-3">
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

const { menus, filteredMenus, isFilter, isSearch, loading } = storeToRefs(useMenuStore())
const { fetchMenus } = useMenuStore()

fetchMenus()
</script>

<style lang="scss" scoped></style>