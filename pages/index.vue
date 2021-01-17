<template>
  <div :class="$style.page">
    <Header />
    <main :class="$style.main">
      <div class="container">
        <div :class="$style.top">
          <h1 :class="$style.title">
            Каталог
          </h1>
          <Sort />
        </div>
        <div :class="$style.mid">
          <Navigation />
          <CatalogueList :products="products" />
        </div>
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

<style lang="scss" module>
.page {
  position: relative;
  padding-top: 90px;
  font-family: $font-main;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2em;
  background-color: #fff;
}

.top {
  display: flex;
  align-items: baseline;
}

.title {
  font-weight: 700;
  font-size: 32px;
  color: $color-font--main;
}

.mid {
  display: flex;
  width: 100%;
  align-items: flex-start;
}
</style>
