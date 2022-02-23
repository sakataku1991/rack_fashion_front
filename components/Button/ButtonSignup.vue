<template>
  <nuxt-link
    to="/signup"
    class="btn -normal -blue btn-signup"
    ontouchstart=""
  >
    <span class="btn-text">会員登録</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonSignup'
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
