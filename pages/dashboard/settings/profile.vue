<template>
  <div class="Dashboard__profile">
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
          <div class="MyContent__profile">
            <section class="section Form">
              <div class="Form__content">
                <div class="Form__form">
                  <v-form
                    id="formProfile"
                    ref="form"
                    @submit.prevent="profile"
                    class="form form-profile"
                  >
                    <div class="form-section -input">
                      <div class="form-section-input-image">
                        <dl class="form-list -layer1">
                          <div class="form-list-item -avatar">
                            <dt class="form-list-item-title hideAll">
                              <label
                                for="yourAvatar"
                                class="form-list-item-title-label"
                              >
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <label
                                tabindex="0"
                                class="form-list-item-data-label"
                              >
                                <p class="form-profile-avatar">
                                  <img
                                    :src="image_src_avatar"
                                    alt="ユーザーアバター"
                                    class="form-profile-avatar-img"
                                  >
                                </p>
                                <p class="form-profile-avatar-text">
                                  アイコンを変更
                                </p>
                                <input
                                  id="userAvatar"
                                  type="file"
                                  name="userAvatar"
                                  accept="image/png, image/jpeg, image/gif"
                                  autocomplete="off"
                                  tabindex="-1"
                                  class="form-list-item-data-content -file hideAll"
                                >
                              </label>
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div class="form-section-input-info">
                        <dl class="form-list -layer1">
                          <div class="form-list-item -userName">
                            <dt class="form-list-item-title">
                              <label
                                for="yourUserName"
                                class="form-list-item-title-label"
                              >
                                <span class="form-list-item-title-label-text">ユーザー名</span>
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <form-input-user-name
                                :name.sync="params.user.name"
                              />
                            </dd>
                          </div>
                          <div class="form-list-item -rackID">
                            <dt class="form-list-item-title">
                              <label
                                for="yourRackID"
                                class="form-list-item-title-label"
                              >
                                <span class="form-list-item-title-label-text">RACK ID</span>
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <p class="text">
                                @{{ $store.state.user.current.rack_id }}
                              </p>
                              <p class="form-list-item-data-description">
                                ※RACK ID（@{{ $store.state.user.current.rack_id }}）は変更できません
                              </p>
                            </dd>
                          </div>
                          <div class="form-list-item -gender">
                            <dt class="form-list-item-title">
                              <label
                                for="yourGender"
                                class="form-list-item-title-label"
                              >
                                <span class="form-list-item-title-label-text">性別</span>
                                <span class="form-list-item-title-label-text -note">※サイト上では非公開</span>
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <form-input-sex
                                :sex.sync="params.user.sex"
                              />
                              <div class="form-list-item-data-description">
                                <ul class="list -note">
                                  <li>
                                    あなたの性別の情報は、<br>・あなたがRACKにログインしているときの「質問」の一覧表示<br>・あなたが「質問」を投稿するとき（「質問」の性別情報<br>にのみ利用されます。
                                  </li>
                                  <li>
                                    他のユーザーがあなたの性別を見ることはできません。
                                  </li>
                                </ul>
                              </div>
                            </dd>
                          </div>
                          <div class="form-list-item -userProfile">
                            <dt class="form-list-item-title">
                              <label
                                for="youruserProfile"
                                class="form-list-item-title-label"
                              >
                                <span class="form-list-item-title-label-text">自己紹介</span>
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <form-input-profile
                                :profile.sync="params.user.profile"
                              />
                            </dd>
                          </div>
                          <div class="form-list-item -instagram">
                            <dt class="form-list-item-title">
                              <label
                                for="yourInstagram"
                                class="form-list-item-title-label"
                              >
                                <span class="form-list-item-title-label-text">Instagramのユーザーネーム</span>
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <form-input-instagram
                                :instagram.sync="params.user.instagram"
                              />
                            </dd>
                          </div>
                          <div class="form-list-item -twitter">
                            <dt class="form-list-item-title">
                              <label
                                for="yourTwitter"
                                class="form-list-item-title-label"
                              >
                                <span class="form-list-item-title-label-text">Twitterのユーザー名</span>
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <form-input-twitter
                                :twitter.sync="params.user.twitter"
                              />
                            </dd>
                          </div>
                          <div class="form-list-item -homepage">
                            <dt class="form-list-item-title">
                              <label
                                for="yourHomepage"
                                class="form-list-item-title-label"
                              >
                                <span class="form-list-item-title-label-text">自分のWebサイト（ホームページ）</span>
                              </label>
                            </dt>
                            <dd class="form-list-item-data">
                              <form-input-homepage
                                :homepage.sync="params.user.homepage"
                              />
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    <div class="form-section -submit">
                      <div class="form-btn -formProfile">
                        <v-btn
                          type="submit"
                          :loading="loading"
                          value="保存する"
                          ontouchstart=""
                          class="btn -normal -blue btn-profile btn-text"
                        >
                          保存する
                        </v-btn>
                      </div>
                    </div>
                  </v-form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PagesDashboardSettingsProfile',
  layout: 'dashboard',
  // falseを返すページのアクセスを制限する
  validate ({ route }) {
    return route.name !== 'account'
  },
  data () {
    return {
      dashboardPath: 'question-id-dashboard',
      currentTab:
        'プロフィール',
      tabs: [
        { name: 'プロフィール', slug: 'dashboard/settings/profile' }
      ],
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png'),
      image_src_picture: require('@/assets/image/thum/thum_form-comment_picture-placeholder.png'),
      params: {
        user: {
          name: 'さかたく',
          rack_id: 'sakataku1991',
          sex: '',
          profile: 'よろしくお願いします。',
          instagram: '',
          twitter: '',
          homepage: ''
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
// プロフィール
.MyContent__profile {
  @include sp {
  };
  @include pc {
  };
}
.Form {
  @include sp {
  };
  @include pc {
  };
}
.Form__content {
  @include sp {
  };
  @include pc {
  };
}
.Form__form {
  @include sp {
  };
  @include pc {
  };
}
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
// 「プロフィール編集」フォーム
.form-profile {
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
    display: flex;
    gap: 24px;
  };
}
// アバターの編集領域
.form-section-input-image {
  @include sp {
  };
  @include pc {
  };
}
// アバター以外の編集領域
.form-section-input-image + .form-section-input-info {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
  };
}
.form-section-input-info {
  @include sp {
  };
  @include pc {
    width: calc(100% - calc(104px + 24px));
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
// 入力欄（「アバター（サイト上で表示される名前です）」）
.form-list-item.-avatar {
  @include sp {
  };
  @include pc {
  };
}
.form-profile-avatar {
  @include sp {
  };
  @include pc {
  };
}
.form-profile-avatar-img {
  @include sp {
    border-radius: 50%;
    height: 88px;
    width: 88px;
  };
  @include pc {
    border-radius: 50%;
    height: 104px;
    width: 104px;
  };
}
.form-profile-avatar + .form-profile-avatar-text {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
    margin-top: 8px;
  };
}
.form-profile-avatar-text {
  color: $blue_hsb_s56b70;
  text-align: center;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
.form-list-item-data-content.-file {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.form-list-item.-avatar .form-list-item-data-label {
  @include sp {
    filter: brightness(60%);
    &:active {
      filter: brightness(40%);
    }
  };
  @include pc {
    cursor: pointer;
    filter: brightness(60%);
    &:hover {
      filter: brightness(40%);
    }
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
// 「保存する」ボタン
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
.btn-profile {
  @include sp {
    font-size: 1.6rem;
    height: 100% !important;
    padding: 11px 24px 11px !important;
    width: 64%;
  };
  @include pc {
    font-size: 1.8rem;
    height: 100% !important;
    margin-right: 0 !important;
    padding: 12px 24px 12px !important;
    width: 120px;
  };
}
</style>
