import { defineStore } from "pinia"

export const useMenuStore = defineStore('menus', {
  state: () => ({
    menus: [],
    filteredMenus: [],
    isFilter: false,
    isSearch: false,
    loading: false,
    error: null
  }),
  actions: {
    async fetchMenus() {
      if (this.menus.length === 0) {
        this.loading = true
        try {
          const response = await fetch('menu.json')
          this.menus = await response.json()
        } catch (error) {
          this.error = error
        } finally {
          this.loading = false
        }
      }
    },
    async getMenuPerCategory(categoryName) {
      this.isFilter = true
      await this.fetchMenus()
      console.log('nama kategori ' + categoryName)

      if (categoryName !== 'all') {
        this.filteredMenus = this.menus.filter((item) => item.category === categoryName)
        console.log(this.filteredMenus)
      } else {
        this.filteredMenus = this.menus
      }
    },
    async searchMenu(keyword) {
      this.isSearch = true
      await this.fetchMenus()
      this.filteredMenus = this.menus.filter((menu) => menu.name.toLowerCase().includes(keyword))
      console.log(keyword)
      console.log(this.filteredMenus)
    }
  }
})