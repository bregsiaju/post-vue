<template>
  <div class="main-content">
    <div class="row container-fluid">
      <div class="col-8 menu">
        <div class="category">
          <h5 class="mb-3">Categories</h5>
          <div class="d-flex gap-3 category-list">
            <button v-for="item in categories" :key="item.id" class="btn btn-outline-dark"
              :class="{ active: selectedCategories === item.id }" v-html="item.name"
              @click="selectedCategories = item.id"></button>
          </div>
        </div>
        <MenuContainer />
      </div>
    </div>
  </div>
</template>

<script>
import MenuContainer from '../components/MenuContainer.vue';

export default {
  components: {
    MenuContainer
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: '&#129368; All Menu'
        },
        {
          id: 2,
          name: '&#9749; Coffee'
        },
        {
          id: 3,
          name: '&#127851; Chocolate'
        },
        {
          id: 4,
          name: '&#127839; Snacks'
        },
        {
          id: 5,
          name: '&#127848; Ice Cream'
        },
      ],
      selectedCategories: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  padding: 28px 8px 0 32px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
}

.category {
  margin-bottom: 30px;

  .category-list {
    .btn {
      border-radius: 50px;
      padding: 8px 16px;
      border-color: #5C5470;
      color: #5C5470;
      font-size: 14px;

      &:hover {
        background: linear-gradient(232deg, rgba(185, 138, 238, 0.80) 0%, rgba(251, 190, 222, 0.80) 100%);
        color: #000;
      }

      &.active {
        background: linear-gradient(232deg, rgba(185, 138, 238, 0.80) 0%, rgba(251, 190, 222, 0.80) 100%);
        color: #000;
        box-shadow: 0px 2px 4px 0px rgba(174, 123, 232, 0.29);
        font-weight: 600;
        border: none;
      }
    }
  }
}
</style>