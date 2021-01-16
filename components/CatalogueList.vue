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
  props: {
    products: {
      type: Array,
      required: false,
      default () {
        return []
      }
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
