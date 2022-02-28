<template>
  <button
    type="submit"
    value="投稿"
    class="btn -normal -blue btn-formComment"
    ontouchstart=""
  >
    <span class="btn-text">投稿</span>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonComment'
}
</script>

<style lang="scss" scoped>
.btn-formComment {
  @include sp {
  };
  @include pc {
  };
}
.btn-text {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-formComment {
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
