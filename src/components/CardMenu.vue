<template>
  <div class="card-menu rounded">
    <div class="ratio ratio-1x1 rounded overflow-hidden">
      <img :src="`/img/${data.image}`" :alt="data.name" class="object-fit-cover">
    </div>
    <div class="mt-2 mb-1 fw-semibold">{{ data.name }}</div>
    <div class="menu-desc lh-sm mb-1">{{ data.description }}</div>
    <p class="fw-medium mb-2"><sup class="text-dark-purple">Rp</sup>{{ rupiah(data.price) }}</p>
    <button class="btn btn-primary w-100 text-white btn-sm">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'CardMenu',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    rupiah(number) {
      return Number(number).toLocaleString('id-ID')
    }
  }
}
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