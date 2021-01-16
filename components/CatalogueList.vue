<template>
  <div class="catalogue" :class="{'catalogue--cart': isCart}">
    <Card
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :photo="product.photo"
      :price="product.price"
      :name="product.name"
      :rating="product.rating"
      :isCart="isCart"
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
    },
    isCart: {
      type: Boolean,
      required: true,
      default () {
        return false
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
