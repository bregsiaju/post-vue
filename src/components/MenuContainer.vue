<template>
  <div class="pb-4">
    <h5 class="mb-3">Menu</h5>
    <div class="row g-4 row-cols-lg-3">
      <div v-for="menu in menus" :key="menu.id" class="col">
        <CardMenu :data="menu" />
      </div>
    </div>
  </div>
</template>

<script>
import CardMenu from './CardMenu.vue'; './CardMenu.vue'

export default {
  name: 'MenuContainer',
  components: {
    CardMenu
  },
  data() {
    return {
      menus: []
    }
  },
  async mounted() {
    await fetch('menu.json').then(resp => resp.json()).then(data => {
      console.log(data)
      this.menus = data
    })
  }
}
</script>

<style lang="scss" scoped></style>