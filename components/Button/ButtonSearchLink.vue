<template>
  <nuxt-link
    to="/search"
    class="btn -icon btn-search"
    ontouchstart=""
  >
    <icon-base
      class="search"
      height="24"
      icon-name="search"
      width="24"
    >
      <icon-search />
    </icon-base>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonSearchLink'
}
</script>

<style lang="scss" scoped>
.btn-search {
  color: $black;
  @include sp {
    border-radius: 50%;
    padding: 4px;
  };
  @include pc {
    border-radius: 50%;
    padding: 6px;
  };
}
.btn-search {
  @include sp {
    &:active {
      color: $blue;
      background-color: $gray_ea;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
      background-color: $gray_ea;
    }
  };
}
</style>
