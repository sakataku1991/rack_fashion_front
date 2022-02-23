<template>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="btn-sns -twitterCircle"
    ontouchstart=""
  >
    <icon-base
      class="icon-twitterCircle"
      height="24"
      icon-name="twitter-circle"
      width="24"
    >
      <icon-twitter-circle />
    </icon-base>
  </a>
</template>

<script>
export default {
  name: 'ComponentsButtonTwitterCircle'
}
</script>

<style lang="scss" scoped>
.btn-sns.-twitterCircle {
  display: block;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-sns.-twitterCircle {
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
