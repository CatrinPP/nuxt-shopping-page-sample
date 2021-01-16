<template>
  <div class="page">
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <p class="title">
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
    </header>

    <main class="main">
      <div class="container">
        <div class="top">
          <h1 class="title">
            Каталог
          </h1>
          <Sort />
        </div>
        <Navigation />
        <CatalogueList :products="products" />
      </div>
    </main>
    <Cart />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData ({ store }) {
    try {
      await store.dispatch('getProductsList')
    } catch (err) {
      console.error(err)
    }
  },
  computed: {
    ...mapState({
      products: 'productsList'
    })
  },
  methods: {
    onCartButtonClick () {
      this.$store.commit('SHOW_CART')
    }
  }
}
</script>

<style>
.page {
  position: relative;
}

.container {
  width: 100%;
  padding-left: 88px;
  padding-right: 88px;
}

.header {
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top {
  display: flex;
  align-items: baseline;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 22px;
  color: #35495e;
}
</style>
