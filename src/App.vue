<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import CollapsedSidebar from './components/CollapsedSidebar.vue'

export default {
  components: {
    RouterView,
    Navbar,
    SideBar,
    CollapsedSidebar
  },
  data() {
    return {
      isCollapsed: false
    }
  },
  methods: {
    collapseSide() {
      this.isCollapsed = true
    },
    expandSide() {
      this.isCollapsed = false
    }
  }
}
</script>

<template>
  <Navbar :class="{ 'menu-collapse': isCollapsed }" />
  <CollapsedSidebar v-if="isCollapsed" @expand="expandSide" />
  <SideBar v-else @collapse="collapseSide" />
  <main :class="{ 'menu-collapse': isCollapsed }">
    <RouterView />
  </main>
</template>

<style lang="scss">
main {
  padding: 60px 0 0 200px;

  &.menu-collapse {
    padding-left: 70px;
  }
}

.navbar.menu-collapse {
  .header-right {
    padding-left: 0px;
  }
}
</style>