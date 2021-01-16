<template>
  <div :class="{show: isCartShown}" class="cart-modal">
    <p>Корзина</p>
    <button class="close" aria-label="закрыть корзину" @click="onCloseButtonClick">
      X
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isCartShown: 'showCart'
    })
  },
  methods: {
    onCloseButtonClick () {
      this.$store.commit('HIDE_CART')
    }
  }
}
</script>

<style lang="scss">
  .cart-modal {
    display: none;
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 460px;
    padding: 48px;
    background: #fff;
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0 0 8px;

    &.show {
      display: block;
    }
  }

</style>
