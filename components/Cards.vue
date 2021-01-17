<template>
  <div :class="[{'cards--cart': isCart}, $style.cards]">
    <Card
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :photo="product.photo"
      :price="product.price.toLocaleString()"
      :name="product.name.toLowerCase()"
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
      required: false,
      default () {
        return false
      }
    }
  }
}
</script>

<style lang="scss" module>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

</style>
