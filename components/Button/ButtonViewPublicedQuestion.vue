<template>
  <nuxt-link
    to="/question"
    class="btn btn-viewPublicedQuestion"
    ontouchstart=""
  >
    <icon-base
      class="icon icon-visibility"
      height="16"
      icon-name="visibility"
      width="16"
    >
      <icon-visibility />
    </icon-base>
    <span class="btn-text">公開した質問を見る</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonViewPublicedQuestion'
}
</script>

<style lang="scss" scoped>
.btn-viewPublicedQuestion {
  align-items: center;
  background-color: $blue_bgLight;
  display: flex;
  justify-content: center;
  @include sp {
    border: 1px solid $blue;
    border-radius: 4px;
    gap: 4px;
  };
  @include pc {
    border: 1px solid $blue;
    border-radius: 4px;
    gap: 4px;
  };
}
.btn-text {
  color: $blue;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-viewPublicedQuestion {
  @include sp {
    &:active {
      background-color: $blue_20pct;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_20pct;
    }
  };
}
</style>
