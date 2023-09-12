<template>
  <div class="order-details p-3">
    <div class="d-flex gap-2 align-items-baseline mb-3">
      <h5 class="mb-0">Order Details</h5>
      <span>#3948</span>
    </div>
    <div class="mb-2">
      <div class="input-group input-group-sm">
        <span class="input-group-text" id="basic-addon1">Customer</span>
        <input type="text" class="form-control" placeholder="name" v-model="order.customer">
      </div>
    </div>
    <div>
      <div class="input-group input-group-sm">
        <span class="input-group-text" id="basic-addon1">Type</span>
        <select class="form-select form-select-sm" v-model="order.type">
          <option value="Dine in" selected>Dine in</option>
          <option value="Take away">Take away</option>
        </select>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="total-items">Total items: {{ getTotalItems }}</div>
      </div>
      <div class="col text-end">
        <button v-if="getTotalItems > 0" class="btn btn-sm btn-outline-red btn-remove" @click="cartStore.$reset">Remove
          all</button>
      </div>
    </div>
    <p v-if="getTotalItems === 0" class="text-center mt-3 mb-5">The order list is empty</p>
    <div v-else class="order-list mt-3">
      <CartItem v-for="item in carts" :key="item.id" :dataMenu="item" />
    </div>
    <div v-if="getTotalItems > 0" class="total-payment px-3 py-2 mt-3">
      <div class="row">
        <div class="col">Subtotal</div>
        <div class="col text-end fw-medium">Rp{{ $rupiah(getTotalPrice) }}</div>
      </div>
      <div class="row">
        <div class="col">Tax 5%</div>
        <div class="col text-end fw-medium">Rp{{ $rupiah(getTax) || 0 }}</div>
      </div>
      <hr>
      <div class="row text-dark-purple fw-bold">
        <div class="col">Total</div>
        <div class="col text-end">Rp{{ $rupiah(totalPayment) }}</div>
      </div>
    </div>
    <div v-if="getTotalItems > 0" class="payment-methods row">
      <div v-for="payment in paymentOption" :key="payment.id" class="col"
        :class="{ selected: order.paymentMethod === payment.name }" @click="order.paymentMethod = payment.name">
        <div class="d-flex gap-2 align-items-center justify-content-center">
          <Icon :icon="payment.icon" width="24"></Icon>
          <span>{{ payment.name }}</span>
        </div>
      </div>
    </div>
    <button class="btn btn-checkout text-white w-100 fw-bold" :disabled="getTotalItems < 1">Process order</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'
import CartItem from '../components/CartItem.vue'

export default {
  name: 'OrderList',
  components: {
    Icon,
    CartItem
  },
  data() {
    return {
      paymentOption: [
        {
          id: 1,
          name: 'Cash',
          icon: 'tabler:cash'
        },
        {
          id: 2,
          name: 'QRIS',
          icon: 'heroicons:qr-code'
        },
        {
          id: 3,
          name: 'Card',
          icon: 'ion:card-outline'
        },
      ],
      order: {
        customer: '',
        type: 'Dine in',
        items: [],
        paymentMethod: 'Cash'
      }
    }
  }
}
</script>

<script setup>
const { carts, getTotalItems, getTotalPrice } = storeToRefs(useCartStore())
const cartStore = useCartStore()
const getTax = computed(() => {
  // console.log(getTotalPrice)
  return (getTotalPrice.value * 0.05)
})
const totalPayment = computed(() => {
  return getTotalPrice.value + getTax.value
})
</script>

<style lang="scss" scoped>
.order-details {
  border-radius: 6px;
  background: #FFF;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}

.total-items {
  background: #ae7be8;
  color: #fff;
  border-radius: 12px;
  font-size: 14px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  min-height: 28px;
}

.btn-remove {
  border: none;

  &:hover {
    background: none;
    color: inherit;
  }
}

.order-list {
  max-height: 158px;
  overflow-y: auto;
}

.total-payment {
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  hr {
    border-style: dashed;
    margin: 10px 0;
  }
}

.payment-methods {
  &.row {
    margin: 16px 0 20px 0;
    gap: 8px;
  }

  .col {
    border-radius: 16px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
    padding: 10px 0;
    border: 1px solid transparent;
    cursor: pointer;

    &.selected {
      color: white;
      background-color: #ae7be8;
      border-color: #8751ab;
    }
  }
}

.btn-checkout {
  background: linear-gradient(232deg, rgb(177, 122, 240) 0%, rgb(253, 164, 210));
}
</style>