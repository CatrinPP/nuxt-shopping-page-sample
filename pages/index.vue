<template>
  <div class="page">
    <Header />
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
  }
}
</script>

<style lang="scss">
.page {
  position: relative;
  padding-top: 90px;
  font-family: $font-main;
  font-size: 16px;
  line-height: 1.2em;
  background-color: #fff;
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
