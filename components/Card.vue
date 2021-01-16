<template>
  <div class="card" :class="{'card--cart': isCart}">
    <div class="top">
      <div class="popularity">
        <IconStar />
        <span>{{ rating }}</span>
      </div>
      <img class="image" :src="`https://frontend-test.idaproject.com${photo}`" :alt="name">
      <button class="add-btn" @click="onAddToCartButtonClick(id)">
        <IconCart />
      </button>
      <button class="delete-btn" @click="onDeleteButtonClick(id)">
        <IconTrash />
      </button>
    </div>
    <p class="name">
      {{ name }}
    </p>
    <p class="price">
      {{ price }} ₽
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    isCart: {
      type: Boolean,
      required: true,
      default () {
        return false
      }
    }
  },
  methods: {
    onAddToCartButtonClick (id) {
      this.$store.commit('ADD_TO_CART', id)
    },
    onDeleteButtonClick (id) {
      this.$store.commit('DELETE_FROM_CART', id)
    }
  }
}
</script>

<style lang="scss">
  .card {
    width: 264px;
    padding: 16px;
    background: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    .top {
      align-items: flex-start;
    }

    .add-btn {
      display: block;
    }

    .delete-btn {
      display: none;
    }

    &--cart {
      .add-btn {
        display: none;
      }

      .delete-btn {
        display: block;
      }
    }
  }

  .image {
    width: 142px;
  }

</style>
