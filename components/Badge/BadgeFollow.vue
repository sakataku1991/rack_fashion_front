<template>
  <p class="badge badge-follow">
    <span class="badge-follow-text">フォローされています</span>
  </p>
</template>

<script>
export default {
  name: 'ComponentsBadgeFollow'
}
</script>

<style lang="scss" scoped>
.badge-follow {
  background-color: $gray_f4;
  display: inline-block;
  pointer-events: none;
  @include sp {
    border: 1px solid $gray_f4;
    border-radius: 3px;
    padding: 1px 4px 2px 4px;
  };
  @include pc {
    border: 1px solid $gray_f4;
    border-radius: 3px;
    padding: 1px 4px 2px 4px;
  };
}
.badge-follow-text {
  color: $gray_6;
  overflow-wrap: break-word;
  @include sp {
    font-size: 1.0rem;
  };
  @include pc {
    font-size: 1.0rem;
  };
}
</style>
