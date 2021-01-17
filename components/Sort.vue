<template>
  <section :class="$style.sort">
    <p :class="$style.sort__text">
      Сортировать по:
      <button type="buton" class="button" @click="toggleMenuShow">
        <span :class="$style.sort__type">{{ sortType === 'price' ? 'цене' : 'популярности' }}</span>
      </button>
    </p>
    <ul :class="[sortMenuShow && $style.show, $style.sort__menu]">
      <li>
        <button class="button" :class="$style.sort__btn" type="button" @click="onSortByPriceClick">
          <span>По цене</span>
        </button>
      </li>
      <li>
        <button class="button" :class="$style.sort__btn" type="button" @click="onSortByRatingClick">
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
      sortType: 'sortType',
      sortMenuShow: 'sortMenuShow'
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
    },
    toggleMenuShow (evt) {
      this.$store.commit('TOGGLE_SORT_MENU_SHOW')
    }
  }
}
</script>

<style lang="scss" module>
  .sort {
    position: relative;
    margin-left: auto;
    font-size: 16px;

    &__text {
      font-size: 16px;
      padding-bottom: 14px;

      button:focus {
        outline: none;
      }
    }

    &__type {
      position: relative;
      padding-right: 10px;
      color: $color-font--secondary;

      &:hover,
      &:focus {
        outline: none;
        color: $color-font--main;
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -1px);
        border: 3px solid transparent;
        border-top: 5px solid $color-font--secondary;
      }
    }

    &__menu {
      position: absolute;
      right: 0;
      top: 30px;
      z-index: 10;
      display: none;
      min-width: 160px;
      padding-top: 8px;
      padding-bottom: 8px;
      background: $white;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      transition: all 0.2s linear;
    }

    .show {
      display: block;
    }

    &__btn {
      display: block;
      width: 100%;
      padding: 4px 12px;
      text-align: left;
      font-size: 16px;
      color: $color-font--fade;

      &:hover {
        color: $color-font--main;
        background-color: $grayExtraLight;
      }
    }
  }

</style>
