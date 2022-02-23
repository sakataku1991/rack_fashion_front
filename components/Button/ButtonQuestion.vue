<template>
  <nuxt-link
    to="/new"
    class="btn -normal -blue btn-question"
    ontouchstart=""
  >
    <span class="btn-text">質問<span class="hideSp">する</span></span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonQuestion'
}
</script>

<style lang="scss" scoped>
.btn-question {
  @include sp {
    padding: 2px 14px;
  };
  @include pc {
    padding: 2px 14px;
  };
}
// ホバー時の効果
.btn-question {
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
