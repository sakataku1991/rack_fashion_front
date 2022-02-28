<template>
  <div class="Dashboard__questions">
    <!-- ダッシュボードのヘッダー -->
    <div class="Dashboard__header">
      <div class="contentBoxM">
        <div class="Dashboard__headerContent">
          <!-- ダッシュボードのユーザー情報 -->
          <div class="Dashboard__headerUserInfo">
            <card-dashboard-user-info />
          </div>
          <!-- ダッシュボードのタブ -->
          <div class="Dashboard__headerTab">
            <tab-user-content
              :current-tab="currentTab"
              :tabs="tabs"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- ユーザーのコンテンツ -->
    <section class="section MyContent">
      <div class="contentBoxM">
        <div class="MyContent__content">
          <!-- 基本情報 -->
          <div class="MyContent__basicInformation dashboard-section">
            <h2 class="title-dashboard-content">
              基本情報
            </h2>
            <div class="MyContent__basicInformationDef">
              <dl class="MyContent__basicInformationDefList">
                <div class="MyContent__basicInformationDefListItem">
                  <dt class="MyContent__basicInformationDefListItemTitle">
                    <p class="MyContent__basicInformationDefListItemTitleText title-dashboard-content-child">
                      RACK ID
                    </p>
                  </dt>
                  <dd class="MyContent__basicInformationDefListItemData">
                    <p class="MyContent__basicInformationDefListItemDataText">
                      {{ $store.state.user.current.rack_id }}
                    </p>
                  </dd>
                </div>
                <div class="MyContent__basicInformationDefListItem">
                  <dt class="MyContent__basicInformationDefListItemTitle">
                    <p class="MyContent__basicInformationDefListItemTitleText title-dashboard-content-child">
                      メールアドレス
                    </p>
                  </dt>
                  <dd class="MyContent__basicInformationDefListItemData">
                    <p class="MyContent__basicInformationDefListItemDataText">
                      {{ $store.state.user.current.email }}
                    </p>
                    <p class="MyContent__basicInformationDefListItemDataBtn">
                        <nuxt-link
                          to="/dashboard/settings/account/email"
                          class="btn -outlined -blue btn-change"
                          ontouchstart=""
                        >
                          <span class="btn-text">変更</span>
                        </nuxt-link>
                    </p>
                  </dd>
                </div>
                <div class="MyContent__basicInformationDefListItem">
                  <dt class="MyContent__basicInformationDefListItemTitle">
                    <p class="MyContent__basicInformationDefListItemTitleText title-dashboard-content-child">
                      パスワード
                    </p>
                  </dt>
                  <dd class="MyContent__basicInformationDefListItemData">
                    <p class="MyContent__basicInformationDefListItemDataText">
                      ****************
                    </p>
                    <div class="MyContent__basicInformationDefListItemDataTextNote">
                      <ul class="list -note">
                        <li>
                          セキュリティ保護のためパスワードは非表示となっています。
                        </li>
                      </ul>
                    </div>
                    <p class="MyContent__basicInformationDefListItemDataBtn">
                        <nuxt-link
                          to="/dashboard/settings/account/password"
                          class="btn -outlined -blue btn-change"
                          ontouchstart=""
                        >
                          <span class="btn-text">変更</span>
                        </nuxt-link>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <!-- 通知設定 -->
          <div class="MyContent__notificationSettings dashboard-section">
            <h2 class="title-dashboard-content">
              通知設定
            </h2>
            <div class="MyContent__notificationSettingsDef">
              <dl class="MyContent__notificationSettingsDefList">
                <div class="MyContent__notificationSettingsDefListItem">
                  <dt class="MyContent__notificationSettingsDefListItemTitle">
                    <p class="MyContent__notificationSettingsDefListItemTitleText title-dashboard-content-child">
                      通知方法
                    </p>
                  </dt>
                  <dd class="MyContent__notificationSettingsDefListItemData">
                    <div class="agga">
                      <ul class="easfaf11">
                        <li class="aesgag1">
                          メール
                        </li>
                        <li class="aesgag1">
                          Web
                        </li>
                      </ul>
                    </div>
                  </dd>
                </div>
                <div class="MyContent__notificationSettingsDefListItem">
                  <dt class="MyContent__notificationSettingsDefListItemTitle">
                    <p class="MyContent__notificationSettingsDefListItemTitleText title-dashboard-content-child">
                      通知する内容
                    </p>
                  </dt>
                  <dd class="MyContent__notificationSettingsDefListItemData">
                    <div class="agga">
                      <ul class="easfaf11">
                        <li class="aesgag1">
                          誰かにフォローされたとき
                        </li>
                        <li class="aesgag1">
                          自分の質問にコメントがついたとき
                        </li>
                        <li class="aesgag1">
                          自分が書いたコメントが「役に立った」に選ばれたとき
                        </li>
                      </ul>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <!-- RACKの退会・アカウントの削除 -->
          <div class="MyContent__deleteAccount dashboard-section">
            <h2 class="title-dashboard-content">
              RACKの退会・アカウントの削除
            </h2>
            <div class="MyContent__deleteAccountMessage">
              <p class="MyContent__deleteAccountMessageText">
                <ul class="list -note">
                  <li>
                    一度アカウントを削除すると、二度と元に戻せません。十分ご注意ください。
                  </li>
                </ul>
              </p>
              <p class="MyContent__deleteAccountMessageBtn">
                  <nuxt-link
                    to="/dashboard/settings/account/deactivate"
                    class="btn -outlined -blue btn-change"
                    ontouchstart=""
                  >
                    <span class="btn-text">アカウントの削除はこちらから</span>
                  </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PagesDashboardSettingsAccount',
  layout: 'dashboard',
  // falseを返すページのアクセスを制限する
  validate ({ route }) {
    return route.name !== 'account'
  },
  data () {
    return {
      dashboardPath: 'question-id-dashboard',
      currentTab:
        'アカウント',
      tabs: [
        { name: 'アカウント', slug: 'dashboard/settings/account' }
      ],
      params: {
        user: {
          id: this.$store.state.user.current.id,
          name: this.$store.state.user.current.name,
          rack_id: this.$store.state.user.current.rack_id,
          sex: this.$store.state.user.current.sex,
          sex_id: this.$store.state.user.current.sex_id,
          gender: this.$store.state.user.current.gender,
          code: this.$store.state.user.current.code,
          email: this.$store.state.user.current.email,
          profile: this.$store.state.user.current.profile,
          instagram: this.$store.state.user.current.instagram,
          twitter: this.$store.state.user.current.twitter,
          homepage: this.$store.state.user.current.homepage,
          avatar: this.$store.state.user.current.avatar,
          avatar_image_url: this.$store.state.user.current.avatar_image_url
        }
      }
    }
  },
  computed: {
    currentQuestion () {
      return this.$store.state.question.current
    }
  }
}
</script>

<style lang="scss" scoped>
// ダッシュボード全体
.Dashboard__questions {
  @include sp {
  };
  @include pc {
  };
}
// 「ダッシュボードのヘッダー」＋「コンテンツメニュー（タブ切り替え）」
.Dashboard__header {
  background-color: $white;
  @include sp {
    box-shadow: 0px 2px 4px rgba($black_rgb, .08);
  };
  @include pc {
    box-shadow: 0px 2px 4px rgba($black_rgb, .06);
  };
}
// ヘッダーのユーザー情報
.Dashboard__headerUserInfo {
  @include sp {
  };
  @include pc {
  };
}
// ヘッダーのタブ
.Dashboard__headerTab {
  @include sp {
    border-top: 1px solid $gray_e4;
    margin-left: -5vw;
    margin-right: -5vw;
  };
  @include pc {
  };
}
// マイコンテンツ
.MyContent {
  @include sp {
    padding: 32px 0 64px;
  };
  @include pc {
    padding: 40px 0 80px;
  };
}
.MyContent__content {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__questionArticles {
  @include sp {
  };
  @include pc {
  };
}
// 基本情報
.MyContent__basicInformation {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__basicInformationDef {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__basicInformationDefList {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__basicInformationDefListItem {
  @include sp {
  };
  @include pc {
    display: flex;
  };
}
.MyContent__basicInformationDefListItemTitle {
  @include sp {
    background-color: $gray_fa;
    padding: 6px 12px 6px 12px;
  };
  @include pc {
    background-color: $white;
    padding: 12px 8px 12px 16px;
    width: 20%;
  };
}
.MyContent__basicInformationDefListItemTitleText {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__basicInformationDefListItemData {
  position: relative;
  @include sp {
    background-color: $white;
    padding: 8px calc(12px + 52px + 10px) 16px 12px;
  };
  @include pc {
    background-color: $white;
    padding: 12px calc(16px + 52px + 12px) 12px 8px;
    width: 80%;
  };
}
.MyContent__basicInformationDefListItemDataText {
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
  };
}
.MyContent__basicInformationDefListItemDataBtn {
  position: absolute;
  @include sp {
    right: 12px;
    top: 6px;
  };
  @include pc {
    right: 16px;
    top: 11px;
  };
}
.MyContent__basicInformationDefListItemDataBtn .btn-change {
  @include sp {
    line-height: 1;
    padding: 3px 12px 3px;
  };
  @include pc {
    line-height: 1;
    padding: 3px 12px 3px;
  };
}
.MyContent__basicInformationDefListItemDataBtn .btn-change .btn-text {
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
// 注釈
.MyContent__basicInformationDefListItemDataText + .MyContent__basicInformationDefListItemDataTextNote {
  @include sp {
    margin-top: 2px;
  };
  @include pc {
    margin-top: 2px;
  };
}
.MyContent__basicInformationDefListItemDataTextNote {
  @include sp {
  };
  @include pc {
  };
}
::v-deep .MyContent__basicInformationDefListItemDataTextNote .list.-note li {
  color: $gray_7;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
// 通知設定
.MyContent__notificationSettings {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__notificationSettingsDef {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__notificationSettingsDefList {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__notificationSettingsDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__notificationSettingsDefListItemTitle {
  @include sp {
    background-color: $gray_fa;
    padding: 6px 12px 6px 12px;
  };
  @include pc {
    background-color: $white;
    padding: 12px 16px 3px 16px;
  };
}
.MyContent__notificationSettingsDefListItemTitleText {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__notificationSettingsDefListItemData {
  @include sp {
    background-color: $white;
    padding: 8px 12px 16px 12px;
  };
  @include pc {
    background-color: $white;
    padding: 3px 16px 12px 16px;
  };
}

// RACKの退会・アカウントの削除
.MyContent__deleteAccount {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessage {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessageBtn {
  @include sp {
  };
  @include pc {
  };
}
</style>
