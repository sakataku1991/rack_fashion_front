<template>
  <nuxt-link
    to="/login"
    class="btn -outlined -blue btn-login"
    ontouchstart=""
  >
    <span class="btn-text">ログイン</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonLogin'
}
</script>

<style lang="scss" scoped>
.btn-login {
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
.btn-login {
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
