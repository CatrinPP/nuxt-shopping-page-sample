<template>
  <header :class="$style.header">
    <div class="container">
      <div :class="$style.header__wrapper">
        <p :class="$style.header__title">
          TestList
        </p>
        <button
          class="cart"
          @click="onCartButtonClick"
        >
          <IconCart />
        </button>
      </div>
    </div>
    <Cart />
  </header>
</template>

<script>
export default {
  methods: {
    onCartButtonClick () {
      this.$store.commit('SHOW_CART')
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
  }
}
</style>
