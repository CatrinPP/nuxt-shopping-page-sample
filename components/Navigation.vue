<template>
  <nav :class="$style.navigation">
    <Category
      v-for="category in categories"
      :id="category.id"
      :key="category.id"
      :name="category.name"
    />
  </nav>
</template>

<script>
export default {
  async fetch () {
    this.categories = await fetch(
      'https://frontend-test.idaproject.com/api/product-category'
    ).then(res => res.json())
  },
  data () {
    return {
      categories: []
    }
  }
}
</script>

<style lang="scss" module>
  .navigation {
    display: flex;
    flex-direction: column;
    width: 161px;
    padding-right: 30px;
  }
</style>
