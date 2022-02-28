<template>
  <user-form-card>
    <template
      #user-form-card-content
    >
      <v-form
        ref="form"
        v-model="isValid"
        @submit.prevent="signup"
      >
        <user-form-name
          :name.sync="params.user.name"
        />
        <user-form-rack-id
          :rack-id.sync="params.user.rack_id"
          set-validation
        />
        <user-form-email
          :email.sync="params.user.email"
          placeholder
        />
        <user-form-password
          :password.sync="params.user.password"
          set-validation
        />
        <!-- フォームの送信ボタンはコンポーネント化せず、フォームのpageファイルに持たせること！  送信ボタンは送信するページに持たせる！ -->
        <v-btn
          type="submit"
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="appblue"
          class="white--text"
        >
          登録する
        </v-btn>
      </v-form>
    </template>
  </user-form-card>
</template>

<script>
export default {
  name: 'PagesSignup',
  layout: 'before-login',
  data ({ $store }) {
    return {
      isValid: false,
      loading: false,
      params: {
        user: {
          name: 'さかたく',
          rack_id: 'sakataku1991',
          email: 'sakataku1991@gmail.com',
          password: 'password'
        }
      },
      // 会員登録後の初期表示画面
      signedUpNextPath: $store.state.signedUp.temporarySignedUpPath
    }
  },
  methods: {
    // 会員登録処理
    async signup () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
      if (this.isValid) {
        await this.$axios.$post('/api/v1/users', this.params)
          // 会員登録成功時の処理
          .then(response => this.authSuccessful(response))
          // 会員登録失敗時の処理
          .catch(error => this.authFailure(error))
      }
      this.loading = false
    },
    // 会員登録成功時の処理
    authSuccessful (response) {
      // 会員登録後のレスポンス
      // this.signup(response)
      // フォーム内容をリセット
      this.$refs.form.reset()
      for (const key in this.params.user) {
        this.params.user[key] = ''
      }
      // 仮登録完了ページ（signedUpNextPath）へリダイレクトする
      this.$router.go(this.signedUpNextPath)
    },
    // 会員登録失敗時の処理
    authFailure ({ response }) {
      // トースター出力
      if (response && response.status === 422) {
        const msg = '登録に失敗しました'
        return this.$store.dispatch('getToast', { msg })
      }
      // エラー処理
      return this.$my.apiErrorHandler(response)
    }
  }
}
</script>
