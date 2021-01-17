<template>
  <button class="button" :class="[id === activeCategory ? $style.active : '' , $style.category]" @click="onClick(id)">
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

<style lang="scss" module>
  .category {
    font-size: 16px;
    color: $color-font--fade;
    text-align: left;

    &:focus {
      outline: none;
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &:not(.active):hover,
    &:not(.active):focus {
      color: $color-font--secondary;
    }

    &.active {
      color: $color-font--main;
      text-decoration: underline;
      cursor: auto;
    }
  }
</style>
