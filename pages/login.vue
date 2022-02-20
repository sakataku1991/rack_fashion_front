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
      redirectPath: $store.state.loggedIn.homePath
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
      this.$router.push(this.redirectPath)
    },
    authSuccessful (response) {
      console.log('authSuccessful', response)
      this.$auth.login(response)
      console.log('token', this.$auth.token)
      console.log('expires', this.$auth.expires)
      console.log('payload', this.$auth.payload)
      console.log('user', this.$auth.user)
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
