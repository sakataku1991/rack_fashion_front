<template>
  <div class="form-signup-container">
    <header class="form-header">
      <h2 class="form-header-title">
        <icon-base
          class="form-header-title-icon icon icon-personAddAlt"
          height="24"
          icon-name="person-add-alt"
          width="24"
        >
          <icon-person-add-alt />
        </icon-base>
        <span class="form-header-title-text">新規会員登録</span>
      </h2>
    </header>
    <v-app>
      <v-form
        id="formSignup"
        ref="form"
        v-model="isValid"
        @submit.prevent="signup"
        class="form form-signup -authentication"
      >
        <div class="form-section -input">
          <dl class="form-list -layer1">
            <div class="form-list-item -userName -required">
              <dt class="form-list-item-title">
                <label
                  for="yourUserName"
                  class="form-list-item-title-label"
                >
                  <span class="form-list-item-title-label-text">ユーザー名</span>
                  <span class="form-list-item-title-label-text -note">（サイト上で表示される名前です）</span>
                </label>
              </dt>
              <dd class="form-list-item-data">
                <form-input-user-name
                  :name.sync="params.user.name"
                />
              </dd>
            </div>
            <div class="form-list-item -rackID -required">
              <dt class="form-list-item-title">
                <label
                  for="yourRackID"
                  class="form-list-item-title-label"
                >
                  <span class="form-list-item-title-label-text">RACK ID</span>
                  <span class="form-list-item-title-label-text -note">（あなたのURLに使われます）</span>
                </label>
              </dt>
              <dd class="form-list-item-data">
                <p class="form-list-item-data-description">
                  3〜16文字の半角英数字と_（アンダースコア）が使用できます
                </p>
                <form-input-rack-id
                  :rack-id.sync="params.user.rack_id"
                  set-validation
                />
              </dd>
            </div>
            <div class="form-list-item -gender -optional">
              <dt class="form-list-item-title">
                <label
                  for="yourGender"
                  class="form-list-item-title-label"
                >
                  <span class="form-list-item-title-label-text">性別</span>
                  <span class="form-list-item-title-label-text -note">（サイト上では表示されません）</span>
                </label>
              </dt>
              <dd class="form-list-item-data">
                <p class="form-list-item-data-description">
                  性別の情報は、あなたのタイムラインの表示に反映されます
                </p>
                <form-input-sex
                  :sex.sync="params.user.sex"
                />
              </dd>
            </div>
            <div class="form-list-item -email -required">
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
                  :email.sync="params.user.email"
                  placeholder
                />
              </dd>
            </div>
            <div class="form-list-item -password -required">
              <dt class="form-list-item-title">
                <label
                  for="yourPassword"
                  class="form-list-item-title-label"
                >
                  <span class="form-list-item-title-label-text">パスワード</span>
                </label>
              </dt>
              <dd class="form-list-item-data">
                <p class="form-list-item-data-description">
                  8〜72文字の半角英数字と記号
                </p>
                <form-input-password
                  :password.sync="params.user.password"
                  set-validation
                />
              </dd>
            </div>
            <!-- <div class="form-list-item -reCAPTCHA">
              <dt class="form-list-item-title visuallyHidden">
                <label
                  for="reCAPTCHA"
                  class="form-list-item-title-label"
                >
                  reCAPTCHA
                </label>
              </dt>
              <dd class="form-list-item-data red">
                ※ここに「reCAPTCHA」のチェックボックスが入ります
              </dd>
            </div> -->
            <div class="form-list-item -agreements">
              <dl class="form-list -layer2">
                <div class="form-list-item -teams">
                  <dt class="form-list-item-title visuallyHidden">
                    <label
                      for="ourTeams"
                      class="form-list-item-title-label"
                    >
                      <span class="form-list-item-title-label-text">利用規約</span>
                    </label>
                  </dt>
                  <dd class="form-list-item-data">
                    <form-input-teams />
                  </dd>
                </div>
                <div class="form-list-item -privacy">
                  <dt class="form-list-item-title visuallyHidden">
                    <label
                      for="ourPrivacy"
                      class="form-list-item-title-label"
                    >
                      <span class="form-list-item-title-label-text">プライバシーポリシー</span>
                    </label>
                  </dt>
                  <dd class="form-list-item-data">
                    <form-input-privacy />
                  </dd>
                </div>
              </dl>
            </div>
          </dl>
        </div>
        <div class="form-section -submit">
          <div class="form-btn -formSignup">
            <v-btn
              type="submit"
              :disabled="!isValid || loading"
              :loading="loading"
              value="登録する"
              ontouchstart=""
              class="btn -normal -blue btn-signup btn-text"
            >
              登録する
            </v-btn>
          </div>
        </div>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormSignup',
  data () {
    return {
      isValid: false,
      loading: false,
      params: {
        user: {
          name: '',
          rack_id: '',
          sex: '',
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    signup () {
      this.loading = true
      setTimeout(() => {
        this.formReset()
        this.loading = false
      }, 1500)
    },
    formReset () {
      this.$refs.form.reset()
      for (const key in this.params.user) {
        this.params.user[key] = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// フォーム全体
.form-signup-container {
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
.form-header + .form-signup {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.form-signup {
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
    margin-top: 36px;
  };
  @include pc {
    margin-top: 32px;
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
// 入力欄（「ユーザー名（サイト上で表示される名前です）」）
.form-list-item.-userName {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-userName .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「RACK ID（あなたのURLに使われます）」）
.form-list-item.-rackID {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-rackID .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「性別（サイト上では表示されません）」）
.form-list-item.-rackID + .form-list-item.-gender {
  @include sp {
    margin-top: 36px !important;
  };
  @include pc {
    margin-top: 36px !important;
  };
}
.form-list-item.-gender {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-gender .form-list-item-data-description + .form-list-item-data-content.-radio {
  @include sp {
    margin-top: 10px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.form-list-item.-gender .form-list-item-data-content.-radio {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「メールアドレス」）
.form-list-item.-gender + .form-list-item.-email {
  @include sp {
    margin-top: 30px !important;
  };
  @include pc {
    margin-top: 28px !important;
  };
}
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
// 入力欄（「reCAPTCHA」）
.form-list-item.-reCAPTCHA {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-reCAPTCHA .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 同意内容（「利用規約」＋「プライバシーポリシー」）
.form-list-item.-agreements {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list-item.-agreements .form-list.-layer2 {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list-item.-agreements .form-list.-layer2 .form-list-item {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list-item.-agreements .form-list.-layer2 .form-list-item + .form-list-item {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    margin-top: 20px;
  };
}
// 入力欄（「利用規約」）
.form-list-item.-teams {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-teams .form-list-item-data-content.-checkbox {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「プライバシーポリシー」）
.form-list-item.-privacy {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-privacy .form-list-item-data-content.-checkbox {
  @include sp {
  };
  @include pc {
  };
}
// 「投稿」ボタン
.form-section.-input + .form-section.-submit {
  @include sp {
    margin-top: 56px;
  };
  @include pc {
    margin-top: 48px;
  };
}
.form-section.-submit {
  @include sp {
  };
  @include pc {
  };
}
.btn-signup {
  @include sp {
    font-size: 1.6rem;
    padding: 11px 24px 11px;
    width: 64%;
  };
  @include pc {
    font-size: 1.8rem;
    margin-left: 0;
    padding: 12px 24px 12px;
    width: 300px;
  };
}
</style>
