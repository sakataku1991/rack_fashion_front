<template>
  <nuxt-link to="/" class="link-logo" ontouchstart="">
    <app-logo-white />
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsLinkLogoWhite'
}
</script>

<style lang="scss" scoped>
.link-logo {
  display: block;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.link-logo {
  @include sp {
    transition: 0.3s;
    &:active {
      opacity: 0.7;
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
      transition: 0.05s;
    }
  };
}
</style>
