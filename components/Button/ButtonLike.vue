<template>
  <div class="btn-like-wrapper">
    <button
      type="button"
      aria-label="いいね！"
      value="true"
      class="btn -icon btn-like"
      ontouchstart=""
    >
      <icon-base
        class="icon icon-heartOutline"
        height="13"
        icon-name="heart-outline"
        width="13"
      >
        <icon-heart-outline />
      </icon-base>
    </button>
    <span class="btn-like-count">12</span>
  </div>
</template>

<script>
export default {
  name: 'ComponentsButtonLike'
}
</script>

<style lang="scss" scoped>
.btn-like-wrapper {
  align-items: center;
  display: flex;
  @include sp {
    gap: 2px;
  };
  @include pc {
    gap: 2px;
  };
}
.btn-like {
  color: $gray_a;
  @include sp {
    padding: 1px;
  };
  @include pc {
    padding: 1px;
  };
}
// ホバー時の効果
.btn-like {
  @include sp {
    &:active {
      color: $gray_5;
    }
  };
  @include pc {
    &:hover {
      color: $gray_5;
    }
  };
}
.btn-like-count {
  // color: $like;
  color: $gray_a;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
    margin-top: 0px;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
    margin-top: -1px;
  };
}
</style>
