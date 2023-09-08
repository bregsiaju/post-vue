<template>
  <div class="card-menu rounded">
    <div class="ratio ratio-1x1 rounded overflow-hidden">
      <img :src="`/img/${props.data.image}`" :alt="props.data.name" class="object-fit-cover">
    </div>
    <div class="mt-2 mb-1 fw-semibold">{{ props.data.name }}</div>
    <div class="menu-desc lh-sm mb-1">{{ props.data.description }}</div>
    <p class="fw-medium mb-2"><sup class="text-dark-purple">Rp</sup>{{ $rupiah(props.data.price) }}</p>
    <button class="btn btn-primary w-100 text-white btn-sm" @click="cart.addItem(props.data)">Add to Cart</button>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
const cart = useCartStore()

const props = defineProps({
  data: Object
})
</script>

<style lang="scss" scoped>
.card-menu {
  background: #FAFBFE;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  padding: 12px;
  height: 100%;
  display: grid;

  .menu-desc {
    font-size: 10px;
    color: #777777;
  }
}
</style>