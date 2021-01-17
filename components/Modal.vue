<template>
  <div :class="[$style.modal, isModalShown && $style.show]">
    <div :class="$style.modal__overlay">
      <Cart />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isModalShown: 'showModal'
    })
  }
}
</script>

<style lang="scss" module>
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 25;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &__overlay {
      width: 100%;
      height: 100%;
      background-color: rgba($color: $white, $alpha: 0.8);
    }

    &.show {
      display: block;
    }
  }

</style>
