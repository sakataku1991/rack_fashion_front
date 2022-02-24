<template>
  <nuxt-link
    to="/category/トップス"
    class="category"
    ontouchstart=""
  >
    <data-category
      class="category-text"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsCategory'
}
</script>

<style lang="scss" scoped>
.category {
  @include sp {
  };
  @include pc {
  };
}
.category-text {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.category {
  transition:
    background-color 0.3s ease-out,
    border 0.3s ease-out,
    color 0.3s ease-out,
    filter 0.3s ease-out;
  @include sp {
    &:active {
      transition:
        background-color 0.1s ease-out,
        border 0.1s ease-out,
        color 0.1s ease-out,
        filter 0.1s ease-out;
    }
  };
  @include pc {
    &:hover {
      transition:
        background-color 0.1s ease-out,
        border 0.1s ease-out,
        color 0.1s ease-out,
        filter 0.1s ease-out;
    }
  };
}
</style>
