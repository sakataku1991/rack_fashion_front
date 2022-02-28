<template>
  <div class="badge-like-wrapper">
    <span class="badge -icon badge-like">
      <icon-base
        class="icon icon-heartOutline"
        height="13"
        icon-name="heart-outline"
        width="13"
      >
        <icon-heart-outline />
      </icon-base>
    </span>
    <span class="badge-like-count">12</span>
  </div>
</template>

<script>
export default {
  name: 'ComponentsBadgeLike'
}
</script>

<style lang="scss" scoped>
.badge-like-wrapper {
  align-items: center;
  display: flex;
  @include sp {
    gap: 2px;
  };
  @include pc {
    gap: 2px;
  };
}
.badge-like {
  color: $gray_a;
  @include sp {
    padding: 1px;
  };
  @include pc {
    padding: 1px;
  };
}
.badge-like-count {
  color: $gray_a;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
    margin-top: -1px;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
    margin-top: -1px;
  };
}
</style>
