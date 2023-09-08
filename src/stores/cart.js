import { defineStore } from "pinia"

export const useCartStore = defineStore('cart', {
  state: () => ({
    carts: [],
  }),
  getters: {
    getTotalItems: (state) => {
      // console.log('muncul gak nih')
      if (state.carts.length) {
        return state.carts?.reduce((total, item) => {
          // console.log(total)
          // console.log(item.qty)
          return total + item.qty
        }, 0)
      }
      return 0
    },
    getTotalPrice: (state) => {
      if (state.carts.length) {
        return state.carts?.reduce((total, item) => {
          // console.log(item.price)
          return total + item.price * item.qty
        }, 0)
      }
      return 0
    }
  },
  actions: {
    addItem(product) {
      // console.log(product)
      const existingItem = this.carts.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.qty += 1
      } else {
        this.carts.push({ ...product, qty: 1 })
      }
      // console.log(this.carts)
    },
    increaseQty(id) {
      const itemIndex = this.carts.findIndex(item => item.id === id)
      this.carts[itemIndex].qty++
    },
    decreaseQty(id) {
      const itemIndex = this.carts.findIndex(item => item.id === id)

      if (this.carts[itemIndex].qty <= 1) {
        this.removeItem(id)
      } else {
        this.carts[itemIndex].qty--
      }
    },
    removeItem(id) {
      const itemIndex = this.carts.findIndex(item => item.id === id)
      this.carts.splice(itemIndex, 1)
    }
  }
})