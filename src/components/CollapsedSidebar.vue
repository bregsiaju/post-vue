<template>
  <div class="mini-left-menu position-fixed z-2 vh-100 bg-white d-flex flex-column justify-content-between">
    <div>
      <div class="toggle-nav expand position-absolute d-flex justify-content-center align-items-center"
        @click="$emit('expand')">
        <Icon icon="icon-park-outline:double-right" width="24" class="text-white" />
      </div>
      <div class="list-group rounded-0 mt-3">
        <RouterLink to="/dashboard" class="list-group-item text-center" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Dashboard">
          <Icon icon="radix-icons:dashboard" width="20" />
        </RouterLink>
        <RouterLink to="/" class="list-group-item text-center" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Cashier">
          <Icon icon="streamline:money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine"
            width="20" />
        </RouterLink>
        <RouterLink to="/menu" class="list-group-item text-center" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Manage Menu">
          <Icon icon="tabler:coffee" width="22" />
        </RouterLink>
        <RouterLink to="/reports" class="list-group-item text-center" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Reports">
          <Icon icon="mdi:report-line" width="20" />
        </RouterLink>
        <RouterLink to="/customer" class="list-group-item text-center" data-bs-toggle="tooltip" data-bs-placement="right"
          data-bs-title="Manage Customer">
          <Icon icon="uil:user" width="20" />
        </RouterLink>
      </div>
    </div>
    <div class="logout text-center" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Log out">
      <Icon icon="uil:signout" rotate="180deg" width="20" />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { Tooltip } from 'bootstrap'

export default {
  name: 'CollapsedSidebar',
  components: {
    Icon
  },
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
  }
}
</script>

<style lang="scss" scoped>
.mini-left-menu {
  padding-top: 60px;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25);
  position: fixed;

  .list-group-item {
    border: none;
    padding: 14px 20px;
  }

  .logout {
    margin-left: 0;
    margin-right: 0;
  }

  a.router-link-exact-active {
    background: #B98AEE;
    color: #fff;
  }
}
</style>