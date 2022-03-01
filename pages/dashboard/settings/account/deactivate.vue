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
          <!-- RACKの退会とアカウントの削除に関する注意事項 -->
          <div class="MyContent__deleteAccountPrecautions dashboard-section">
            <h2 class="title-dashboard-content">
              RACKの退会とアカウントの削除に関する注意事項
            </h2>
            <div class="MyContent__deleteAccountMessage">
              <p class="MyContent__deleteAccountMessageText text">
                一度アカウントを削除すると、以下のものが削除され、復元することはできません。
              </p>
              <div class="MyContent__deleteAccountMessageLostContent">
                <ul class="MyContent__deleteAccountMessageLostContentList list -normal">
                  <li class="MyContent__deleteAccountMessageLostContentListItem">
                    ユーザーの情報
                  </li>
                  <li class="MyContent__deleteAccountMessageLostContentListItem">
                    投稿した質問、もしくは、下書き状態の質問
                  </li>
                  <li class="MyContent__deleteAccountMessageLostContentListItem">
                    保有している閲覧チケット、および、閲覧チケットを使用した質問についているコメントを見る権利
                  </li>
                  <li class="MyContent__deleteAccountMessageLostContentListItem">
                    誰かの質問に対してあなたがつけた「いいね！」
                  </li>
                </ul>
                <div class="MyContent__deleteAccountMessageLostContentNote">
                  <ul class="list -note">
                    <li>
                      誰かの質問に対するあなたのコメントは、退会済みユーザーのコメントとしてサイト上に保持されます。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- アカウントを削除する -->
          <div class="MyContent__deleteAccount dashboard-section">
            <h2 class="title-dashboard-content">
              アカウントを削除する
            </h2>
            <div class="MyContent__deleteAccountRequest">
              <p class="MyContent__deleteAccountRequestText text">
                下記の項目をよくご確認のうえ、すべてにチェックを入れアカウントの削除申請を行なってください。
              </p>
              <div class="MyContent__deleteAccountRequestForm">
                <v-form
                  id="formDeleteAccount"
                  ref="form"
                  v-model="isValid"
                  class="form form-deleteAccount"
                  @submit.prevent="deleteAccount"
                >
                  <div class="MyContent__deleteAccountRequestDef form-section -input">
                    <dl class="MyContent__deleteAccountRequestDefList form-list -layer1">
                      <div class="MyContent__deleteAccountRequestDefListItem form-list-item -agreement">
                        <dt class="MyContent__deleteAccountRequestDefListItemTitle form-list-item-title visuallyHidden">
                          <p class="MyContent__deleteAccountRequestDefListItemTitleText title-dashboard-content-child form-list-item-title-text">
                            同意事項
                          </p>
                        </dt>
                        <dd class="MyContent__deleteAccountRequestDefListItemData form-list-item-data">
                          <div class="form-list-item-data-content -checkbox -check">
                            <ul class="form-list -layer2">
                              <li class="form-list-item">
                                <label
                                  class="form-list-item-data-content-label"
                                >
                                  <input
                                    type="checkbox"
                                    name="user"
                                    value="1"
                                  >
                                  <span class="form-list-item-data-content-label-text">登録済みの「ユーザー情報」をすべて削除します</span>
                                </label>
                              </li>
                              <li class="form-list-item">
                                <label
                                  class="form-list-item-data-content-label"
                                >
                                  <input
                                    type="checkbox"
                                    name="question"
                                    value="1"
                                  >
                                  <span class="form-list-item-data-content-label-text">すべての「質問」を削除します</span>
                                </label>
                              </li>
                              <li class="form-list-item">
                                <label
                                  class="form-list-item-data-content-label"
                                >
                                  <input
                                    type="checkbox"
                                    name="comment"
                                    value="1"
                                  >
                                  <span class="form-list-item-data-content-label-text">すべての「コメント」を削除します</span>
                                </label>
                              </li>
                              <li class="form-list-item">
                                <label
                                  class="form-list-item-data-content-label"
                                >
                                  <input
                                    type="checkbox"
                                    name="ticket"
                                    value="1"
                                  >
                                  <span class="form-list-item-data-content-label-text">保有している「閲覧チケット」を破棄し、コメントを見る権利も放棄します</span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div class="form-section -submit">
                    <div class="form-btn -formDeleteAccount">
                      <a
                        href="/dashboard/settings/account"
                        class="btn -outlined -delete btn-cancel"
                        ontouchstart=""
                      >
                        <span class="btn-text">キャンセル</span>
                      </a>
                      <v-btn
                        type="submit"
                        :disabled="!isValid || loading"
                        :loading="loading"
                        value="アカウントを削除"
                        ontouchstart=""
                        class="btn -normal -delete btn-deleteAccount btn-text"
                      >
                        <span class="btn-text">アカウントを削除</span>
                      </v-btn>
                    </div>
                  </div>
                </v-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PagesDashboardSettingsAccountDeactivate',
  layout: 'dashboard',
  // falseを返すページのアクセスを制限する
  validate ({ route }) {
    return route.name !== 'account'
  },
  data ({ $store }) {
    return {
      isValid: false,
      loading: false,
      params: {
        user: {
          id: this.$store.state.user.current.id
        }
      },
      dashboardPath: 'question-id-dashboard',
      currentTab:
        'tab-0',
      tabs: [
        { name: 'アカウント', slug: 'dashboard/settings/account' }
      ],
      // 「退会完了」ページのリンク
      deleteAccountNextPath: $store.state.deleteAccount.afterDeleteAccountPath
    }
  },
  methods: {
    // 退会処理
    async deleteAccount () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
      if (this.isValid) {
        await this.$axios.$delete(`/api/v1/users/${this.params.user.id}`, this.params)
          // 退会成功時の処理
          .then(response => this.deleteAccountSuccessful(response))
          // 退会失敗時の処理
          .catch(error => this.deleteAccountFailure(error))
      }
      this.loading = false
    },
    // 退会成功時の処理
    deleteAccountSuccessful (response) {
      // 退会後のレスポンス
      this.deleteAccount(response)
      // フォーム内容をリセット
      this.$refs.form.reset()
      // マイページ（deleteAccountNextPath）へリダイレクトする
      // this.$router.go(this.deleteAccountNextPath)
      // this.$router.go({ path: this.$router.currentRoute.path, force: true })
      this.$router.replace(this.deleteAccountNextPath)
    },
    // 退会失敗時の処理
    deleteAccountFailure ({ response }) {
      // トースター出力
      if (response && response.status === 422) {
        const msg = '退会に失敗しました'
        return this.$store.dispatch('getToast', { msg })
      }
      // エラー処理
      return this.$my.apiErrorHandler(response)
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
// RACKの退会とアカウントの削除に関する注意事項
.MyContent__deleteAccountPrecautions {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessage {
  @include sp {
    padding: 16px 12px 12px 12px;
  };
  @include pc {
    padding: 8px 16px 16px 16px;
  };
}
.MyContent__deleteAccountMessageText {
  @include sp {
    line-height: 1.6;
  };
  @include pc {
    line-height: 1.6;
  };
}
.MyContent__deleteAccountMessageText + .MyContent__deleteAccountMessageLostContent {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 12px;
  };
}
.MyContent__deleteAccountMessageLostContent {
  background-color: $gray_f8;
  @include sp {
    border-radius: 6px;
    padding: 10px 10px 10px 10px;
  };
  @include pc {
    border-radius: 8px;
    padding: 24px 24px 24px 24px;
  };
}
.MyContent__deleteAccountMessageLostContentList {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessageLostContentListItem {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessageLostContentListItem::before {
  background-color: $gray_7 !important;
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessageLostContentList + .MyContent__deleteAccountMessageLostContentNote {
  @include sp {
    margin-top: 10px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.MyContent__deleteAccountMessageLostContentNote {
  color: $gray_5;
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessageLostContentNote .list {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountMessageLostContentNote .list li {
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
.MyContent__deleteAccountMessageLostContentNote .list li + li {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
    margin-top: 10px;
  };
}
// アカウントを削除する
.MyContent__deleteAccount {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequest {
  @include sp {
    padding: 16px 12px 32px 12px;
  };
  @include pc {
    padding: 8px 16px 24px 16px;
  };
}
.MyContent__deleteAccountRequestText {
  @include sp {
    line-height: 1.6;
  };
  @include pc {
    line-height: 1.6;
  };
}
.MyContent__deleteAccountRequestText + .MyContent__deleteAccountRequestForm {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.MyContent__deleteAccountRequestForm {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestDef {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestDefList {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestDefListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestDefListItemTitleText {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestDefListItemData {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestDefListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestForm .form-list.-layer2 li + li {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.MyContent__deleteAccountRequestForm .form-section.-input {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestForm .form-section.-input + .form-section.-submit {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.MyContent__deleteAccountRequestForm .form-section.-submit {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__deleteAccountRequestForm .form-btn.-formDeleteAccount {
  display: flex;
  @include sp {
    gap: 16px;
    justify-content: center;
  };
  @include pc {
    gap: 12px;
  };
}
.btn-cancel,
.btn-deleteAccount {
  @include sp {
    height: auto !important;
    margin: 0;
    padding: 5px 8px 5px !important;
  };
  @include pc {
    height: auto !important;
    margin: 0;
    padding: 4px 8px 4px !important;
  };
}
.btn-cancel .btn-text,
.btn-deleteAccount .btn-text {
  @include sp {
    font-size: 1.4rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
.btn-cancel {
  @include sp {
    width: 96px;
  };
  @include pc {
    width: 120px;
  };
}
.btn-deleteAccount {
  @include sp {
    width: 160px;
  };
  @include pc {
    width: 160px;
  };
}
</style>
