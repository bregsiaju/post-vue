<template>
  <div class="main-content">
    <div class="row container-fluid">
      <div class="col-8 menu">
        <div class="category">
          <h5 class="mb-3">Categories</h5>
          <div class="d-flex gap-3 category-list">
            <button v-for="category in categories" :key="category.id" class="btn btn-outline-dark"
              :class="{ active: selectedCategories === category.id }" v-html="category.title"
              @click="selectCategory(category)"></button>
          </div>
        </div>
        <MenuContainer />
      </div>
      <div class="col-4 p-4">
        <OrderList />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import MenuContainer from '../components/MenuContainer.vue';
import OrderList from '../components/OrderList.vue';
import { useMenuStore } from '../stores/menus';

export default {
  components: {
    MenuContainer,
    OrderList
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          value: 'all',
          title: '&#129368; All Menu'
        },
        {
          id: 2,
          value: 'coffee',
          title: '&#9749; Coffee'
        },
        {
          id: 3,
          value: 'tea',
          title: '&#129483; Tea'
        },
        {
          id: 4,
          value: 'chocolate',
          title: '&#127851; Chocolate'
        },
        {
          id: 5,
          value: 'snacks',
          title: '&#127839; Snacks'
        },
        {
          id: 6,
          value: 'ice cream',
          title: '&#127848; Ice Cream'
        },
      ]
    }
  }
}
</script>

<script setup>
const { getMenuPerCategory } = useMenuStore()

let selectedCategories = ref(1)

const selectCategory = (category) => {
  selectedCategories.value = category.id;
  getMenuPerCategory(category.value)
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
  margin-bottom: 20px;

  .category-list {
    overflow-x: auto;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
      height: 5px;
      // background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: transparent;
    }

    .btn {
      border-radius: 50px;
      padding: 8px 16px;
      border-color: #5C5470;
      color: #5C5470;
      font-size: 14px;
      white-space: nowrap;

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