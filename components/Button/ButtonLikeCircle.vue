<template>
  <div class="btn-likeCircle-wrapper">
    <button
      type="button"
      aria-label="いいね！"
      value="true"
      class="btn -icon btn-likeCircle"
      ontouchstart=""
    >
      <icon-base
        class="icon icon-heartOutline"
        height="20"
        icon-name="heart-outline"
        width="20"
      >
        <icon-heart-outline />
      </icon-base>
    </button>
    <span class="btn-likeCircle-count">12</span>
  </div>
</template>

<script>
export default {
  name: 'ComponentsButtonLikeCircle'
}
</script>

<style lang="scss" scoped>
.btn-likeCircle-wrapper {
  @include sp {
    align-items: center;
    display: flex;
    gap: 2px;
  };
  @include pc {
    text-align: center;
  };
}
.btn-likeCircle {
  background-color: $white !important;  // TODO 後で「!important」消す
  @include sp {
    border: 1px solid $like !important;  // TODO 後で「!important」消す
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba($black_rgb, .06);
    height: 48px;
    width: 48px;
  };
  @include pc {
    border: 1px solid $like !important;  // TODO 後で「!important」消す
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba($black_rgb, .06);
    height: 40px;
    width: 40px;
  };
}
.icon-heartOutline {
  color: $like;
  @include sp {
    height: 24px;
    width: 24px;
  };
  @include pc {
    height: 20px;
    width: 20px;
  };
}
// ホバー時の効果
.btn-likeCircle {
  @include sp {
    &:active {
      background-color: $like_bg !important;  // TODO 後で「!important」消す
      box-shadow: 0px 2px 3px rgba($like_rgb, .06);
    }
  };
  @include pc {
    &:hover {
      background-color: $like_bg !important;  // TODO 後で「!important」消す
      box-shadow: 0px 2px 3px rgba($like_rgb, .06);
    }
  };
}
.btn-likeCircle + .btn-likeCircle-count {
  @include sp {
  };
  @include pc {
    margin-top: 2px;
  };
}
.btn-likeCircle-count {
  // color: $like;
  color: $like;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
</style>
