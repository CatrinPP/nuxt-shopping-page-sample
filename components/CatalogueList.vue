<template>
  <div class="catalogue">
    <Card
      v-for="product in products"
      :key="product.id"
      :photo="product.photo"
      :price="product.price"
      :name="product.name"
      :rating="product.rating"
    />
  </div>
</template>

<script>
export default {
  async fetch () {
    this.products = await fetch(
      'https://frontend-test.idaproject.com/api/product?category=1'
    ).then(res => res.json())
  },
  data () {
    return {
      products: []
    }
  }
}
</script>

<style lang="scss">
  .catalogue {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>
