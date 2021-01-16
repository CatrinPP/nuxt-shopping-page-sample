<template>
  <button class="category">
    <span>{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">
  .category {
    font-size: 16px;
  }
</style>
