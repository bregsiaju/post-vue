<template>
  <div class="order-list-item position-relative mb-3">
    <div class="d-flex align-items-center gap-2">
      <div class="ratio ratio-1x1 rounded overflow-hidden">
        <img :src="`/img/${dataMenu.image}`" class="object-fit-cover" alt="Chocolate">
      </div>
      <div>
        <p class="mb-1">{{ dataMenu.name }}</p>
        <p class="mb-0"><small>Rp{{ $rupiah(dataMenu.price) }}</small></p>
      </div>
    </div>
    <div class="position-absolute bottom-0 end-0 d-flex align-items-center gap-2">
      <Icon icon="iconoir:minus" width="18" class="icon-minus" @click="decreaseQty(dataMenu.id)" />
      <span class="qty text-center">
        <input type="number" class="form-control" :value="dataMenu.qty" min="0">
      </span>
      <Icon icon="iconoir:plus" width="18" class="icon-plus" @click="increaseQty(dataMenu.id)" />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'CartItem',
  components: {
    Icon
  },
  props: {
    dataMenu: {
      type: Object,
      required: true
    }
  }
}
</script>

<script setup>
import { useCartStore } from '../stores/cart'
const { increaseQty, decreaseQty } = useCartStore()
</script>

<style lang="scss" scoped>
.ratio {
  max-width: 50px;
}

.qty input {
  width: 32px;
  text-align: center;
  padding: 0;
  border: none;
}

.icon-minus {
  border: 1px solid #8751ab;
  border-radius: 50%;
  color: #8751ab;
}

.icon-plus,
.icon-minus:hover {
  border-radius: 50%;
  background-color: #8751ab;
  color: #FFF;
  cursor: pointer;
}

/* hide arrow input num */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  appearance: none;
  -moz-appearance: textfield;
}
</style>