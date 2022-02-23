<template>
  <nuxt-link
    to="/question"
    class="btn -outlined -blue btn-viewPublicedQuestion"
    ontouchstart=""
  >
    <span class="btn-text">見る</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonDashboardMyQuestionViewPublicedQuestion'
}
</script>

<style lang="scss" scoped>
.btn-viewPublicedQuestion {
  @include sp {
  };
  @include pc {
    line-height: 1;
    padding: 1px 4px 1px;
    width: 100%;
  };
}
.btn-text {
  @include sp {
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
// ホバー時の効果
.btn-viewPublicedQuestion {
  @include sp {
    &:active {
      background-color: $blue_20pct !important;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_20pct !important;
    }
  };
}
</style>
