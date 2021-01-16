<template>
  <button class="category" @click="onClick(id)">
    <span>{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    async onClick (id) {
      await this.$store.commit('SET_CATEGORY', id)
      try {
        await this.$store.dispatch('getProductsList')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss">
  .category {
    font-size: 16px;
  }
</style>
