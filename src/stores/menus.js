import { defineStore } from "pinia"

export const useMenuStore = defineStore('menus', {
  state: () => ({
    menus: [],
    loading: false,
    error: null
  }),
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
    },
    async getMenuPerCategory(categoryName) {
      await this.fetchMenus()
      console.log('nama kategori ' + categoryName)

      if (categoryName !== 'all') {
        const filteredCategory = this.menus.filter((item) => item.category === categoryName)
        console.log(filteredCategory)
        this.menus = filteredCategory
      } else {
        await this.fetchMenus()
      }
    }
  }
})