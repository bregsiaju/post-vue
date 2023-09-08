import { defineStore } from "pinia"

export const useMenuStore = defineStore('menus', {
  state: () => ({
    menus: [],
    loading: false,
    error: null
  }),
  getters: {
    getMenuPerCategory: (state) => {
      return (categoryName) => state.menus.filter((item) => item.category === categoryName)
    }
  },
  actions: {
    async fetchMenus() {
      this.menus = []
      this.loading = true
      try {
        this.menus = await fetch('menu.json').then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})