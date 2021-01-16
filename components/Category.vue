<template>
  <button :class="{'active': id === activeCategory}" class="category" @click="onClick(id)">
    <span>{{ name }}</span>
  </button>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState({
      activeCategory: 'category'
    })
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

    &.active {
      background: none;
      border: none;
    }
  }
</style>
