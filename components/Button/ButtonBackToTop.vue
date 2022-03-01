<template>
  <nuxt-link
    to="/"
    class="btn -outlined -blue btn-backToTop"
    ontouchstart=""
  >
    <span class="btn-text">トップページへ戻る</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsBackToTop'
}
</script>

<style lang="scss" scoped>
.btn-backToTop {
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
.btn-backToTop {
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
