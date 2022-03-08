<template>
  <div class="PopoverMenu__userInformation">
    <!-- インフォメーション（通知・お知らせ）メニュー -->
    <menu-user-information />
  </div>
</template>

<script>
export default {
  name: 'ComponentsPopoverMenuUserInformation'
}
</script>

<style lang="scss" scoped>
.PopoverMenu__userInformation {
  background-color: $white;
  position: relative;
  @include sp {
  };
  @include pc {
    border-radius: 6px;
    filter: drop-shadow(0px 3px 10px rgba($black_rgb, .16));
    width: 320px;
  };
}
// ポップオーバー上部の「▲」マーク
.PopoverMenu__userInformation::before {
  background-color: $white;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  content: "";
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  @include sp {
    display: none;
  };
  @include pc {
    height: 10px;
    left: calc(50% - calc(16px / 2));
    top: -10px;
    width: 16px;
  };
}
// タブのボタンの角を丸くする
::v-deep .Tab__userInformationListItem:first-of-type .Tab__userInformationListItemBtn {
  @include sp {
  };
  @include pc {
    border-radius: 6px 0 0 0;
  };
}
::v-deep .Tab__userInformationListItem:last-of-type .Tab__userInformationListItemBtn {
  @include sp {
  };
  @include pc {
    border-radius: 0 6px 0 0;
  };
}
</style>
