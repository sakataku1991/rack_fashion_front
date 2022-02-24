<template>
  <section class="section Form">
    <div class="Form__content">
      <div class="Form__form">
        <header class="form-header">
          <h2 class="form-header-title">
            <icon-base
              class="form-header-title-icon icon icon-login"
              height="24"
              icon-name="login"
              width="24"
            >
              <icon-login />
            </icon-base>
            <span class="form-header-title-text">RACKにログイン</span>
          </h2>
        </header>
        <v-form
          id="formLogin"
          ref="form"
          v-model="isValid"
          class="form form-login -authentication"
          @submit.prevent="login"
        >
          <div class="form-section -input">
            <dl class="form-list -layer1">
              <!-- 入力欄「メールアドレス」 -->
              <div class="form-list-item -email">
                <dt class="form-list-item-title">
                  <label
                    for="yourEmail"
                    class="form-list-item-title-label"
                  >
                    <span class="form-list-item-title-label-text">メールアドレス</span>
                  </label>
                </dt>
                <dd class="form-list-item-data">
                  <form-input-email
                    :email.sync="params.auth.email"
                  />
                </dd>
              </div>
              <!-- 入力欄「パスワード」 -->
              <div class="form-list-item -password">
                <dt class="form-list-item-title">
                  <label
                    for="yourPassword"
                    class="form-list-item-title-label"
                  >
                    <span class="form-list-item-title-label-text">パスワード</span>
                  </label>
                </dt>
                <dd class="form-list-item-data">
                  <form-input-password
                    :password.sync="params.auth.password"
                  />
                </dd>
              </div>
            </dl>
          </div>
          <div class="form-section -submit">
            <div class="form-btn -formLogin">
              <v-btn
                type="submit"
                :disabled="!isValid || loading"
                :loading="loading"
                value="ログイン"
                ontouchstart=""
                @click="login"
                class="btn -normal -blue btn-login btn-text"
              >
                ログイン
              </v-btn>
            </div>
          </div>
        </v-form>
      </div>
      <div class="Form__help">
        <p class="Form__helpResetPassword text">
          <nuxt-link
            to="/reset_password"
            class="Form__helpResetPasswordLink text-link"
            ontouchstart=""
          >
            パスワードをお忘れの方はこちら
          </nuxt-link>
        </p>
        <p class="Form__helpSignup text">
          ※アカウントをお持ちでない方は
          <br class="hidePc">
          <nuxt-link
            to="/signup"
            class="Form__helpSignupLink text-link"
            ontouchstart=""
          >
            こちらから新規会員登録
          </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesLogin',
  layout: 'login',
  data ({ $store }) {
    return {
      isValid: false,
      loading: false,
      params: {
        auth: {
          // TODO 本番環境反映前には以下の値を削除する！
          email: 'user0@example.com',
          password: 'password'
        }
      },
      // 記憶したルート
      redirectPath: $store.state.loggedIn.rememberPath,
      // ログイン後の初期表示画面
      loggedInNextPath: $store.state.loggedIn.homePath
    }
  },
  methods: {
    // ログイン処理
    async login () {
      this.loading = true
      if (this.isValid) {
        await this.$axios.$post('/api/v1/auth_token', this.params)
          // ログイン成功時の処理
          .then(response => this.authSuccessful(response))
          // ログイン失敗時の処理
          .catch(error => this.authFailure(error))
      }
      this.loading = false
    },
    // ログイン成功時の処理
    authSuccessful (response) {
      // ログイン後のレスポンス
      this.$auth.login(response)
      // 記憶したルート（redirectPath）へリダイレクトし
      this.$router.push(this.redirectPath)
      // 記憶ルートを初期値（loggedInNextPath）に戻す
      this.$store.dispatch('getRememberPath', this.loggedInNextPath)
    },
    // ログイン失敗時の処理
    authFailure ({ response }) {
      // トースター出力
      if (response && response.status === 404) {
        const msg = 'ユーザーが見つかりません'
        return this.$store.dispatch('getToast', { msg })
      }
      // エラー処理
      return this.$my.apiErrorHandler(response)
    }
  }
}
</script>

<style lang="scss" scoped>
// 「RACKにログイン」
.Form {
  @include sp {
  };
  @include pc {
    padding: 0 0 16px 32px;
  };
}
.Form__content {
  @include sp {
  };
  @include pc {
  };
}
// ログインフォーム
.Form__form {
  @include sp {
  };
  @include pc {
  };
}
// ヘルプ
.Form__form + .Form__help {
  @include sp {
    margin-top: 48px;
  };
  @include pc {
    margin-top: 40px;
  };
}
.Form__help {
  @include sp {
  };
  @include pc {
  };
}
.Form__helpResetPassword {
  @include sp {
  };
  @include pc {
  };
}
.Form__helpResetPasswordLink {
  @include sp {
    margin: 0;
  };
  @include pc {
    margin: 0;
  };
}
.Form__helpResetPassword + .Form__helpSignup {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 20px;
  };
}
.Form__helpSignup {
  @include sp {
  };
  @include pc {
  };
}
.Form__helpSignupLink {
  @include sp {
    margin: 0;
  };
  @include pc {
    margin: 0;
  };
}
// フォーム全体
.form-login-container {
  @include sp {
  };
  @include pc {
  };
}
// フォームのヘッダー
.form-header {
  @include sp {
  };
  @include pc {
  };
}
// フォームのタイトル
.form-header-title {
  align-items: center;
  display: flex;
  font-weight: bold;
  @include sp {
    font-size: 1.8rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.8rem;
    line-height: 1.5;
  };
}
.form-header-title-icon {
  color: $blue;
  @include sp {
    margin-top: -0.5px;
  };
  @include pc {
    margin-top: -0.5px;
  };
}
.form-header-title-icon + .form-header-title-text {
  @include sp {
    margin-left: 6px;
  };
  @include pc {
    margin-left: 6px;
  };
}
.form-header-title-text {
  @include sp {
  };
  @include pc {
  };
}
// フォームの内容
.form-header + .form-login {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.form-login {
  @include sp {
  };
  @include pc {
  };
}
.form-section {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list.-layer1 {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list.-layer1 .form-list-item {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list.-layer1 > .form-list-item + .form-list-item  {
  @include sp {
    margin-top: 28px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.form-list-item-title {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title-label {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title-label-text {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title-label-text.-note {
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
.form-list-item-title + .form-list-item-data {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 4px;
  };
}
.form-list-item-data {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data-description {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data-description + .form-list-item-data-content {
  @include sp {
    margin-top: 6px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.form-list-item-data-content {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data-label {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「メールアドレス」）
.form-list-item.-email {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-email .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「パスワード」）
.form-list-item.-password {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-password .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 「ログイン」ボタン
.form-section.-input + .form-section.-submit {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 40px;
  };
}
.form-section.-submit {
  @include sp {
  };
  @include pc {
  };
}
.btn-login {
  @include sp {
    font-size: 1.6rem;
    height: 100% !important;
    padding: 11px 24px 11px !important;
    width: 64% !important;
  };
  @include pc {
    font-size: 1.8rem;
    height: 100% !important;
    padding: 12px 24px 12px !important;
    width: 240px !important;
  };
}
</style>
