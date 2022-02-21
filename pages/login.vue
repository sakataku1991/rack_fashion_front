<template>
  <user-form-card>
    <template
      #user-form-card-content
    >
      <!-- Vuetifyの「ref」プロパティを追加 -->
      <v-form
        ref="form"
        v-model="isValid"
        @submit.prevent="login"
      >
        <user-form-email
          :email.sync="params.auth.email"
        />
        <user-form-password
          :password.sync="params.auth.password"
        />
        <!-- フォームの送信ボタンはコンポーネント化せず、フォームのpageファイルに持たせること！  送信ボタンは送信するページに持たせる！ -->
        <v-card-actions>
          <nuxt-link
            to="#"
            class="body-2 text-decoration-none"
          >
            パスワードを忘れた？
          </nuxt-link>
        </v-card-actions>
        <v-card-text
          class="px-0"
        >
          <v-btn
            type="submit"
            :disabled="!isValid || loading"
            :loading="loading"
            block
            color="appblue"
            class="white--text"
          >
            ログイン
          </v-btn>
        </v-card-text>
      </v-form>
    </template>
  </user-form-card>
</template>

<script>
export default {
  name: 'PagesLogin',
  layout: 'before-login',
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
      loggedInHomePath: $store.state.loggedIn.homePath
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
      this.$router.push(this.redirectPath)
    },
    // ログイン成功時の処理
    authSuccessful (response) {
      // ログイン後のレスポンス
      this.$auth.login(response)
      // 記憶したルート（redirectPath）へリダイレクトし
      this.$router.push(this.redirectPath)
      // 記憶ルートを初期値（loggedInHomePath）に戻す
      this.$store.dispatch('getRememberPath', this.loggedInHomePath)
    },
    // ログイン失敗時の処理
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
