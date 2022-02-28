<template>
  <div class="toast">
    <div class="toast-text">
      質問を公開しました。
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsToastBase'
}
</script>

<style lang="scss" scoped>
.toast {
  background-color: $black;
  display: inline-block;
  position: fixed;
  @include sp {
    border-radius: 5px;
    bottom: 24px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .24);
    left: 5vw;
    padding: 14px 24px;
  };
  @include pc {
    border-radius: 6px;
    bottom: 80px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .24);
    left: 40px;
    min-width: 240px;
    padding: 16px 24px;
  };
}
.toast-text {
  color: $white;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
  };
}
</style>
