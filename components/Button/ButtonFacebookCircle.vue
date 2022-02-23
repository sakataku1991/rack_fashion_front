<template>
  <nuxt-link
    to="#"
    target="_blank"
    el="noopener noreferrer"
    class="btn-sns -facebookCircle"
    ontouchstart=""
  >
    <icon-base
      class="icon-facebookCircle"
      height="24"
      icon-name="facebook-circle"
      width="24"
    >
      <icon-facebook-circle />
    </icon-base>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonFacebookCircle'
}
</script>

<style lang="scss" scoped>
.btn-sns.-facebookCircle {
  display: block;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-sns.-facebookCircle {
  @include sp {
    transition: 0.3s;
    &:active {
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      transition: 0.05s;
    }
  };
}
</style>
