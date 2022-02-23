<template>
  <button
    type="button"
    aria-label="コメントを見る"
    class="btn -normal -blue btn-browseComments"
    ontouchstart=""
  >
    <span class="btn-text">この質問に寄せられた<br class="hidePc">情報(コメント)を見る</span>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonBrowseComments'
}
</script>

<style lang="scss" scoped>
.btn-browseComments {
  @include sp {
    border-radius: 6px !important;
  };
  @include pc {
    border-radius: 6px !important;
  };
}
.btn-text {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-browseComments {
  @include sp {
    &:active {
    }
  };
  @include pc {
    &:hover {
    }
  };
}
</style>
