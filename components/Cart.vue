<template>
  <div :class="{show: isCartShown}" class="cart-modal">
    <p>Корзина</p>
    <button class="close" aria-label="закрыть корзину" @click="closeCart">
      X
    </button>
    <div v-if="successStatus">
      <p>Заявка успешно отправлена</p>
    </div>
    <div v-else>
      <div v-if="products.length > 0">
        <p>Товары в корзине:</p>
        <CatalogueList :products="products" :isCart="true" />
        <OrderForm />
      </div>
      <div v-else>
        <p>Пока что вы ничего не добавили в корзину.</p>
        <button class="close" aria-label="закрыть корзину" @click="closeCart">
          <span>Перейти к выбору</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isCartShown: 'showCart',
      products: 'selectedProducts',
      successStatus: 'successOrderStatus'
    })
  },
  methods: {
    closeCart () {
      this.$store.commit('HIDE_CART')
      this.$store.commit('UNSET_SUCCESS_FORM_STATUS')
    }
  }
}
</script>

<style lang="scss">
  .cart-modal {
    display: none;
    position: absolute;
    z-index: 30;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 460px;
    padding: 48px;
    background: #fff;
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0 0 8px;
    overflow: auto;

    &.show {
      display: block;
    }
  }

</style>
