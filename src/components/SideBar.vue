<template>
  <div class="left-menu z-3 vh-100 bg-white d-flex flex-column justify-content-between">
    <div>
      <img src="@/assets/img/brand.png" class="logo" alt="cafe">
      <div class="toggle-nav position-absolute d-flex justify-content-center align-items-center"
        @click="$emit('collapse')">
        <Icon icon="icon-park-outline:double-left" width="24" class="text-white" />
      </div>
      <div class="list-group rounded-0 mt-3">
        <RouterLink to="/dashboard" class="list-group-item d-flex align-items-center gap-2">
          <Icon icon="radix-icons:dashboard" width="20" />
          <span>Dashboard</span>
        </RouterLink>
        <RouterLink to="/" class="list-group-item d-flex align-items-center gap-2">
          <Icon icon="streamline:money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine"
            width="20" />
          <span>Cashier</span>
        </RouterLink>
        <RouterLink to="/menu" class="list-group-item d-flex align-items-center gap-2">
          <Icon icon="tabler:coffee" width="22" />
          <span>Menu</span>
        </RouterLink>
        <RouterLink to="/reports" class="list-group-item d-flex align-items-center gap-2">
          <Icon icon="mdi:report-line" width="20" />
          <span>Reports</span>
        </RouterLink>
        <RouterLink to="/customer" class="list-group-item d-flex align-items-center gap-2">
          <Icon icon="uil:user" width="20" />
          <span>Customers</span>
        </RouterLink>
      </div>
    </div>
    <div class="logout d-flex align-items-center gap-1">
      <Icon icon="uil:signout" rotate="180deg" width="20" />
      <span>Sign Out</span>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'SideBar',
  components: {
    Icon
  }
}
</script>

<style lang="scss">
.left-menu {
  min-width: 200px;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
}

.left-menu .logo {
  margin: 14px 24px;
}

.toggle-nav {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #ae7be8;
  right: -16px;
  top: 16px;
  cursor: pointer;
}

.list-group-item {
  border: none;
  padding: 14px 36px;

  &:hover {
    color: #8751ab;
  }
}

a.router-link-exact-active {
  border-right: 4px solid #AE7BE8;
  background: linear-gradient(270deg, #B98AEE 0%, rgba(255, 255, 255, 0) 70%);
  color: #8751ab;
  font-weight: 600;
}

.logout {
  padding: 14px 12px;
  margin: 10px 24px;
  border-top: 1px dashed #8751ab;
  color: #D93C65;
  cursor: pointer;
}
</style>