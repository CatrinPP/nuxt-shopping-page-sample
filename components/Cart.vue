<template>
  <div :class="$style.cart">
    <div :class="$style.cart__top">
      <p :class="$style.cart__title">
        Корзина
      </p>
      <button class="button" :class="$style.cart__close" aria-label="закрыть корзину" @click="closeCart" />
    </div>

    <div v-if="successStatus" :class="$style.cart__success">
      <img src="~/assets/img/ok-hand.png" alt="Ок">
      <p>Заявка успешно отправлена</p>
      <p>Вскоре наш менеджер свяжется с Вами</p>
    </div>
    <div v-else :class="$style.cart__filled">
      <div v-if="products.length > 0">
        <p>Товары в корзине:</p>
        <Cards :products="products" :isCart="true" />
        <OrderForm />
      </div>
      <div v-else :class="$style.cart__empty">
        <p>Пока что вы ничего не добавили в корзину.</p>
        <button class="button button--big" :class="$style.cart__button_bg" aria-label="закрыть корзину" @click="closeCart">
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
      products: 'selectedProducts',
      successStatus: 'successOrderStatus'
    })
  },
  methods: {
    closeCart () {
      this.$store.commit('HIDE_MODAL')
      this.$store.commit('UNSET_SUCCESS_FORM_STATUS')
    }
  }
}
</script>

<style lang="scss" module>
  .cart {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 460px;
    padding: 48px;
    background: #fff;
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0 0 8px;
    overflow: auto;

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      margin-bottom: 24px;
      padding-right: 50px;
      font-size: 32px;
      font-weight: 700;
    }

    &__close {
      position: relative;
      width: 24px;
      height: 24px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 14px;
        height: 2px;
        background-color: $color-main;
        transform: rotate(45deg);
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 14px;
        height: 2px;
        background-color: $color-main;
        transform: rotate(-45deg);
      }

      &:hover,
      &:focus {
        outline: none;

        &::after,
        &::before {
          background-color: $color-secondary;
        }
      }
    }

    &__empty {
      p {
        margin-bottom: 24px;
        font-size: 22px;
        text-align: left;
      }
    }

    &__filled {
      p {
        margin-bottom: 16px;
        font-size: 18px;
        color: $color-secondary;
      }
    }

    &__success {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        text-align: center;
        line-height: 1.2em;

        &:first-of-type {
          margin-top: 24px;
          font-size: 24px;
          font-weight: 700;
        }

        &:last-of-type {
          font-size: 16px;
        }
      }
    }
  }

</style>
