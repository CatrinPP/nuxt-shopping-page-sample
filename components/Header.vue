<template>
  <header :class="$style.header">
    <div class="container">
      <div :class="$style.header__wrapper">
        <p :class="$style.header__title">
          TestList
        </p>
        <button
          class="button button--cart"
          :class="$style.header__button"
          @click="onCartButtonClick"
        >
          <IconCart />
          <span v-if="products.length > 0" :class="$style.header__selected">{{ products.length }}</span>
        </button>
      </div>
    </div>
    <!-- <Cart /> -->
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      products: 'selectedProducts'
    })
  },
  methods: {
    onCartButtonClick () {
      this.$store.commit('SHOW_MODAL')
    }
  }
}
</script>

<style module lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 22px;
    color: $color-font--secondary;
  }

  &__selected {
    position: absolute;
    right: 6px;
    top: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    font-size: 8px;
    color: $white;
    font-weight: 700;
    border-radius: 50%;
    background-color: $grayLight;
    transition: all 0.3s linear;
  }

  &__button {
    &:hover {
      .header__selected {
        transform: scale(1.4);
      }
    }
  }
}
</style>
