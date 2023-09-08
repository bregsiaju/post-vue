<template>
  <nav class="navbar bg-body-tertiary shadow-lg position-fixed min-vw-100 z-1">
    <div class="container-fluid justify-content-start flex-nowrap">
      <div class="navbar-brand fw-bold">
        <img src="@/assets/img/brand.png" class="logo" alt="cafe">
      </div>
      <div class="header-right container d-flex justify-content-between align-items-center flex-fill">
        <!-- search box -->
        <form class="d-flex position-relative" role="search">
          <input class="form-control" type="search" placeholder="Search menu" aria-label="Search" name="search">
          <Icon icon="mdi:search" class="text-dark-purple icon-search" height="24"></Icon>
        </form>
        <div class="profil d-flex align-items-center gap-4">
          <div class="position-relative">
            <Icon icon="mi:notification" height="24"></Icon>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <img src="@/assets/img/pp.jpg" class="rounded-circle" alt="">
            <div>
              <h6 class="mb-0">Ciayou</h6>
              <span>Kasir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'NavBar',
  components: {
    Icon
  }
}
</script>

<style>
.logo {
  width: 61px;
}

.header-right {
  padding-left: 140px;
}

.profil img {
  width: 45px;
}

.icon-search {
  position: absolute;
  left: 0.375rem;
  top: 50%;
  transform: translateY(-50%);
}

.form-control[type=search] {
  padding-left: 2rem;
}
</style>