<template>
  <div class="card">
    <div class="top">
      <div class="popularity">
        <IconStar />
        <span>{{ rating }}</span>
      </div>
      <img class="image" :src="`https://frontend-test.idaproject.com${photo}`" :alt="name">
      <button>
        <IconCart />
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
  }

  .image {
    width: 142px;
  }

</style>
