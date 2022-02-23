<template>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="btn -icon btn-twitter"
    ontouchstart=""
  >
    <icon-base
      height="18"
      icon-name="twitter"
      width="18"
    >
      <icon-twitter />
    </icon-base>
  </a>
</template>

<script>
export default {
  name: 'ComponentsButtonTwitter'
}
</script>

<style lang="scss" scoped>
.btn-twitter {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-twitter {
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
