<template>
  <p class="data data-hashtag">
    <span class="data-hashtag-text">#<slot>hashtag</slot></span>
  </p>
</template>

<script>
export default {
  name: 'ComponentsDataHashtag'
}
</script>

<style lang="scss" scoped>
.data {
  @include sp {
  };
  @include pc {
  };
}
.data-hashtag {
  background-color: $gray_fa;
  border: 1px solid $gray_c;
  @include sp {
    border-radius: 4px;
    padding: 4px 10px;
  };
  @include pc {
    border-radius: 4px;
    padding: 4px 10px;
  };
}
.data-hashtag-text {
  color: $gray_5;
  @include sp {
    font-size: 1.3rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.3rem;
    line-height: 1.5;
  };
}
</style>
