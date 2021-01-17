<template>
  <svg
    :class="$style.icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13.75 13.14"
    stroke="#f2c94c"
    stroke-with="20px"
  >
    <linearGradient :id="`linear-gradient${id}`" x1="0" y1="0" x2="0" y2="100%">
      <stop :offset="[rating > 0 ? '0%' : '100%']" stop-color="#ffffff" />
      <stop :offset="[rating > 0 ? `${100 - 20 * rating}%` : '100%']" stop-color="#ffffff" />
      <stop :offset="[rating > 0 ? `${100 - 20 * rating}%` : '100%']" stop-color="#f2c94c" />
      <stop offset="100%" stop-color="#f2c94c" />
    </linearGradient>
    <path :fill="`url(#linear-gradient${id})`" fill-rule="evenodd" d="M7,.13a.61.61,0,0,1,.56.34L9.35,4.09l4,.59a.59.59,0,0,1,.5.42.6.6,0,0,1-.15.64L10.8,8.56l.68,4a.63.63,0,0,1-.91.66L7,11.31,3.43,13.19a.63.63,0,0,1-.91-.66l.68-4L.31,5.74A.6.6,0,0,1,.16,5.1a.59.59,0,0,1,.5-.42l4-.59L6.44.47A.61.61,0,0,1,7,.13Z" transform="translate(-0.12 -0.13)" />
  </svg>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.icon {
  position: relative;
  margin: auto;
  width: 14px;
  height: 14px;
}
</style>
