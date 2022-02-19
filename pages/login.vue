<template>
  <user-form-card>
    <template
      #user-form-card-content
    >
      <!-- Vuetifyの「ref」プロパティを追加 -->
      <v-form
        ref="form"
        v-model="isValid"
      >
        <user-form-email
          :email.sync="params.user.email"
        />
        <user-form-password
          :password.sync="params.user.password"
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
            :disabled="!isValid || loading"
            :loading="loading"
            block
            color="appblue"
            class="white--text"
            @click="login"
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
  data () {
    return {
      isValid: false,
      loading: false,
      params: {
        user: {
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    login () {
      this.loading = true
      setTimeout(() => (this.loading = false), 1500)
    }
  }
}
</script>
