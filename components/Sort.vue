<template>
  <section class="sort">
    <p>
      Сортировать по:
      <span>{{ sortType === 'price' ? 'цене' : 'популярности' }}</span>
    </p>
    <ul class="sort__menu">
      <li>
        <button @click="onSortByPriceClick">
          <span>По цене</span>
        </button>
      </li>
      <li>
        <button @click="onSortByRatingClick">
          <span>По популярности</span>
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      sortType: 'sortType'
    })
  },
  methods: {
    onSortByPriceClick () {
      this.$store.commit('SET_SORT_TYPE', 'price')
      this.$store.commit('SORT_PRODUCTS_BY_PRICE')
    },
    onSortByRatingClick () {
      this.$store.commit('SET_SORT_TYPE', 'rating')
      this.$store.commit('SORT_PRODUCTS_BY_RATING')
    }
  }
}
</script>

<style lang="scss">
  .sort {
    position: relative;
    margin-left: auto;
    padding-bottom: 50px;
    font-size: 16px;

    &__menu {
      display: none;
      position: absolute;
      right: 0;
      bottom: 0;
    }

    &:hover &__menu {
      display: block;
    }
  }

</style>
