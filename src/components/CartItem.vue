<template>
  <div class="order-list-item position-relative mb-3">
    <div class="d-flex align-items-center gap-2">
      <div class="ratio ratio-1x1 rounded overflow-hidden">
        <img :src="'/img/iced-choco.jpg'" class="object-fit-cover" alt="Chocolate">
      </div>
      <div>
        <p class="mb-1">Expresso</p>
        <p class="mb-0"><small>Rp21.000</small></p>
      </div>
    </div>
    <div class="position-absolute bottom-0 end-0 d-flex align-items-center gap-2">
      <Icon icon="iconoir:minus" width="18" class="icon-minus" />
      <span class="qty text-center">
        <input type="number" class="form-control" value="2" min="0">
      </span>
      <Icon icon="iconoir:plus" width="18" class="icon-plus" />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'CartItem',
  components: {
    Icon
  }
}
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