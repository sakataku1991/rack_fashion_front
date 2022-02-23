<template>
  <div class="form-login-container">
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
    <v-app>
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
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormLogin',
  data ({ $store }) {
    return {
      isValid: false,
      loading: false,
      // TODO 削除する
      params: {
        auth: {
          email: 'user0@example.com',
          password: 'password'
        }
      },
      redirectPath: $store.state.loggedIn.rememberPath,
      loggedInHomePath: $store.state.loggedIn.homePath
    }
  },
  methods: {
    async login () {
      this.loading = true
      if (this.isValid) {
        await this.$axios.$post('/api/v1/auth_token', this.params)
          .then(response => this.authSuccessful(response))
          .catch(error => this.authFailure(error))
      }
      this.loading = false
    },
    authSuccessful (response) {
      this.$auth.login(response)
      // 記憶ルートへリダイレクト
      this.$router.push(this.redirectPath)
      // 記憶ルートを初期値に戻す
      this.$store.dispatch('getRememberPath', this.loggedInHomePath)
    },
    authFailure ({ response }) {
      // トースター出力
      if (response && response.status === 404) {
        const msg = 'ユーザーが見つかりません😥'
        return this.$store.dispatch('getToast', { msg })
      }
      // エラー処理
      return this.$my.apiErrorHandler(response)
    }
  }
}
</script>

<style lang="scss" scoped>
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
    padding: 11px 24px 11px;
    width: 100%;
  };
  @include pc {
    font-size: 1.8rem;
    padding: 12px 24px 12px;
    width: 240px;
  };
}
</style>
