<template>
  <span class="data data-category">{{ $t(`${$store.state.question.current.category.name}`) }}</span>
</template>

<script>
export default {
  name: 'ComponentsDataCategory'
}
</script>

<style lang="scss" scoped>
.data {
  @include sp {
  };
  @include pc {
  };
}
.data-category {
  display: inline-block;
  @include sp {
  };
  @include pc {
  };
}
</style>
