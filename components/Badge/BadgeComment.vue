<template>
  <p class="badge-comment-wrapper">
    <span aria-label="コメント" class="badge -icon badge-comment">
      <icon-base
        height="12"
        icon-name="comment-outline"
        width="12"
      >
        <icon-comment-outline />
      </icon-base>
    </span>
    <span class="badge-comment-count">12</span>
  </p>
</template>

<script>
export default {
  name: 'ComponentsBadgeComment'
}
</script>

<style lang="scss" scoped>
.badge-comment-wrapper {
  align-items: center;
  background-color: rgba($blue_rgb, 0.8);
  display: flex;
  width: fit-content;
  @include sp {
    border-radius: 3px;
    gap: 2px;
    padding: 1px 6px;
  };
  @include pc {
    border-radius: 3px;
    gap: 2px;
    padding: 1px 6px;
  };
}
.badge-comment {
  color: $white;
  @include sp {
  };
  @include pc {
  };
}
.badge-comment-count {
  color: $white;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
  };
}
</style>
