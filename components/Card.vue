<template>
  <div :class="[isCart && $style.card_cart , $style.card]">
    <div :class="$style.card__top">
      <div :class="$style.card__rating">
        <IconStar :id="id" :rating="rating" />
        <span>{{ rating }}</span>
      </div>
      <img :class="$style.card__image" :src="`https://frontend-test.idaproject.com${photo}`" :alt="name">
      <button class="button" :class="$style.card__add" type="button" @click="onAddToCartButtonClick(id)">
        <IconCart :id="id" :color="'#959dad'" :size="'16px'" />
      </button>
      <button class="button" :class="$style.card__delete" type="button" @click="onDeleteButtonClick(id)">
        <IconTrash />
      </button>
    </div>
    <p :class="$style.card__name">
      {{ name }}
    </p>
    <p :class="$style.card__price">
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
      type: String,
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
      required: false,
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

<style lang="scss" module>
  .card {
    width: calc((100% - 48px) / 4);
    height: 272px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    background: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &__top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: auto;
    }

    &__rating {
      display: flex;
      align-items: center;

      span {
        margin-left: 2px;
        color: $gold;
        font-size: 10px;
        font-weight: 700;
      }
    }

    &__add {
      display: block;

      &:focus {
        outline: none;
      }
    }

    &__delete {
      display: none;

      &:focus {
        outline: none;
      }
    }

    &__image {
      max-width: 80%;
      max-height: 100%;
    }

    &__name {
      margin-bottom: 6px;
      font-size: 14px;
      color: $color-font--secondary;
      text-transform: capitalize;
    }

    &__price {
      font-weight: 700;
      font-size: 14px;
    }

    &.card_cart {
      position: relative;
      width: 100%;
      height: 120px;
      padding-left: 130px;
      padding-right: 50px;

      .card__add {
        display: none;
      }

      .card__delete {
        position: absolute;
        right: 16px;
        top: 44px;
        display: block;
      }

      .card__image {
        position: absolute;
        left: 25px;
        top: 15px;
        max-height: 90px;
        max-width: 71px;
      }

      .card__top {
        order: 1;
      }

      .card__name {
        margin-bottom: 6px;
        font-size: 14px;
        color: $color-font--secondary;
        text-transform: capitalize;
      }

      .card__price {
        font-weight: 700;
        font-size: 14px;
        color: $color-font--main;
      }
    }
  }

</style>
