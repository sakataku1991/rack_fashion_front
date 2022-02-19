<template>
  <user-form-card>
    <template
      #user-form-card-content
    >
      <v-form
        v-model="isValid"
      >
        <user-form-name
          :name.sync="params.user.name"
        />
        <user-form-rack-id
          :rack_id.sync="params.user.rack_id"
        />
        <user-form-email
          :email.sync="params.user.email"
        />
        <user-form-password
          :password.sync="params.user.password"
        />
        <!-- フォームの送信ボタンはコンポーネント化せず、フォームのpageファイルに持たせること！  送信ボタンは送信するページに持たせる！ -->
        <v-btn
          :disabled="!isValid"
          block
          color="appblue"
          class="white--text"
        >
          登録する
        </v-btn>
      </v-form>
      {{ params }}
    </template>
  </user-form-card>
</template>

<script>
export default {
  name: 'PagesSignup',
  layout: 'before-login',
  data () {
    return {
      isValid: false,
      params: {
        user: {
          name: '',
          rack_id: '',
          email: '',
          password: ''
        }
      }
    }
  }
}
</script>
