<template>
  <header id="header" class="Header">
    <div class="contentBoxSp contentBoxMaxPc">
      <div class="Header__content">
        <!-- 「RACK」のロゴ -->
        <div class="Header__brandCI">
          <h1 class="Header__brandLogo">
            <link-logo
              class="Header__brandLogoLink"
            />
          </h1>
        </div>
        <nav class="Header__actionArea">
          <div class="Header__actionIcons">
            <!-- 検索ボタン -->
            <div class="Header__actionIconsSearch">
              <button-search-link
                class="Header__actionIconsSearchBtn"
              />
            </div>
            <!-- インフォメーション（通知・お知らせ）ボタン -->
            <div class="Header__actionIconsNotification">
              <button-notification
                class="Header__actionIconsNotificationBtn"
                @click.native="isActivePopoverMenuUserInformation = !isActivePopoverMenuUserInformation"
              />
              <badge-notification
                class="Header__actionIconsNotificationBadge"
              />
              <!-- インフォメーション（通知・お知らせ）メニューのポップオーバー -->
              <popover-menu-user-information
                v-show="isActivePopoverMenuUserInformation"
                class="Header__actionIconsNotificationPopover"
              />
            </div>
          </div>
          <div class="Header__actionMenu">
            <!-- ユーザーアバター -->
            <div class="Header__actionMenuAvatar">
              <button-user-avatar-menu
                class="Header__actionMenuAvatarBtn"
                @click.native="isActivePopoverMenuUserAvatar = !isActivePopoverMenuUserAvatar"
              />
              <!-- ユーザーアバターのメニューのポップオーバー -->
              <popover-menu-user-avatar
                v-show="isActivePopoverMenuUserAvatar"
                class="Header__actionMenuAvatarPopover"
              />
            </div>
          </div>
          <div class="Header__actionButtons">
            <!-- 「質問する」ボタン -->
            <button-question
              class="Header__actionButtonsQuestionBtn"
            />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LoggedInAppBar',
  props: {
    clippedLeft: {
      type: Boolean,
      default: false
    }
  },
  data ({ $store }) {
    return {
      homePath: $store.state.loggedIn.homePath,
      isActivePopoverMenuUserInformation: false,
      isActivePopoverMenuUserAvatar: false
    }
  },
  computed: {
    inNotHomePath () {
      return this.$route.name !== this.homePath.name
    }
  }
}
</script>

<style lang="scss" scoped>
// ヘッダー全体
.Header {
  align-items: center;
  background-color: $white;
  display: flex;
  @include sp {
    border-bottom: 1px solid $blue_grayBoader;
    position: relative;
  };
  @include pc {
    border-bottom: 1px solid $blue_grayBoader;
  };
}
// ヘッダーの中身
.Header__content {
  align-items: center;
  display: flex;
  justify-content: space-between;
  @include sp {
  };
  @include pc {
    height: 100%;
  };
}
// ヘッダーのロゴ部分全体
.Header__brandCI {
  @include sp {
  };
  @include pc {
  };
}
// 「RACK」のロゴ
.Header__brandLogo {
  @include sp {
  };
  @include pc {
  };
}
.Header__brandLogoLink {
  @include sp {
  };
  @include pc {
  };
}
// ヘッダーのアクション部分全体
.Header__actionArea {
  align-items: center;
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
// ヘッダーのアクション｜アイコン系
.Header__actionIcons {
  align-items: center;
  display: flex;
  @include sp {
    gap: 8px;
  };
  @include pc {
    gap: 12px;
  };
}
// 検索ボタン
.Header__actionIconsSearch {
  @include sp {
  };
  @include pc {
  };
}
.Header__actionIconsSearchBtn {
  @include sp {
  };
  @include pc {
  };
}
// インフォメーション（通知・お知らせ）ボタン
.Header__actionIconsNotification {
  position: relative;
  @include sp {
  };
  @include pc {
  };
}
.Header__actionIconsNotificationBtn {
  @include sp {
  };
  @include pc {
  };
}
// 通知のバッヂ（赤い丸）
.Header__actionIconsNotificationBadge {
  position: absolute;
  @include sp {
    right: -1px;
    top: -1px;
  };
  @include pc {
    right: 2px;
    top: 2px;
  };
}
.Header__actionIconsNotificationPopover {
  position: absolute !important;
  @include sp {
    left: calc(50% - calc(100vw / 2));
    top: 57px;
  };
  @include pc {
    left: calc(50% - calc(320px / 2));
    top: 46px;
  };
}
// ヘッダーのアクション｜ユーザーメニュー
.Header__actionMenu {
  @include sp {
    margin-left: 16px;
  };
  @include pc {
    margin-left: 20px;
  };
}
// ユーザーアバター
.Header__actionMenuAvatar {
  @include sp {
  };
  @include pc {
    position: relative;
  };
}
.Header__actionMenuAvatarBtn {
  @include sp {
    padding: 0;  // TODO 後で消す！
  };
  @include pc {
    padding: 0;  // TODO 後で消す！
  };
}
::v-deep .Header__actionMenuAvatarBtn .btn-userAvatar-img {
  @include sp {
    height: 40px;
    width: 40px;
  };
  @include pc {
    height: 40px;
    width: 40px;
  };
}
// ユーザーアバターのメニューのポップオーバー
.Header__actionMenuAvatarPopover {
  position: absolute !important;
  @include sp {
    left: calc(50% - calc(100vw / 2));
    top: 57px;
  };
  @include pc {
    left: calc(50% - calc(240px / 2));
    top: 46px;
  };
}
// ヘッダーのアクション｜ボタン系
.Header__actionButtons {
  align-items: center;
  display: flex;
  @include sp {
    gap: 12px;
    margin-left: 20px;
  };
  @include pc {
    gap: 16px;
    margin-left: 24px;
  };
}
// 「質問する」ボタン
.Header__actionButtonsQuestionBtn {
  @include sp {
    padding: 2px 12px;
  };
  @include pc {
    padding: 3px 12px;
  };
}
::v-deep .Header__actionButtonsQuestionBtn .btn-text {
  @include sp {
    font-size: 1.3rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
</style>
