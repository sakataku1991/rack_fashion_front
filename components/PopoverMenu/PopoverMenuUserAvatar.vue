<template>
  <div class="PopoverMenu__userAvatar">
    <!-- ユーザーアバターのメニュー -->
    <menu-user-avatar />
  </div>
</template>

<script>
export default {
  name: 'ComponentsPopoverMenuUserAvatar'
}
</script>

<style lang="scss" scoped>
.PopoverMenu__userAvatar {
  background-color: $white;
  position: relative;
  @include sp {
    box-shadow: 0px 4px 10px -2px rgba($black_rgb, .16);
  };
  @include pc {
    border-radius: 6px;
    filter: drop-shadow(0px 3px 10px rgba($black_rgb, .16));
    width: 240px;
  };
}
// ポップオーバー上部の「▲」マーク
.PopoverMenu__userAvatar::before {
  background-color: $white;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  content: "";
  pointer-events: none;
  position: absolute;
  @include sp {
  };
  @include pc {
    height: 10px;
    left: calc(50% - calc(16px / 2));
    top: -10px;
    width: 16px;
  };
}
</style>
