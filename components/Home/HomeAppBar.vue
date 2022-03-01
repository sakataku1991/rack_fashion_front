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
          </div>
          <div class="Header__actionButtons">
            <!-- 「ログイン」ボタン -->
            <button-login
              class="Header__actionButtonsLoginBtn"
            />
            <!-- 「会員登録」ボタン -->
            <button-signup
              class="Header__actionButtonsSignupBtn"
            />
          </div>
        </nav>
      </div>
    </div>
  </header>

  <!-- <v-app-bar
    app
    :height="homeAppBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <v-spacer />

    // ログインボタン
    <before-login-app-bar-login-button />

    // 会員登録ボタン
    <before-login-app-bar-signup-button />
  </v-app-bar> -->
</template>

<script>
export default {
  name: 'ComponentsBeforeLoginAppBar',
  data ({ $store }) {
    return {
      homeAppBarHeight: $store.state.styles.homeAppBarHeight,
      isActivePopoverMenuUserInformation: false,
      isActivePopoverMenuUserAvatar: false
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
// 「ログイン」ボタン
.Header__actionButtonsLoginBtn {
  @include sp {
    line-height: 1.5 !important;
    padding: 3px 6px;
  };
  @include pc {
    line-height: 1.5 !important;
    padding: 5px 12px;
  };
}
::v-deep .Header__actionButtonsLoginBtn .btn-text {
  @include sp {
    font-size: 1.3rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
// 「会員登録」ボタン
.Header__actionButtonsSignupBtn {
  @include sp {
    line-height: 1.5 !important;
    padding: 3px 6px;
  };
  @include pc {
    line-height: 1.5 !important;
    padding: 5px 12px;
  };
}
::v-deep .Header__actionButtonsSignupBtn .btn-text {
  @include sp {
    font-size: 1.3rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
</style>
