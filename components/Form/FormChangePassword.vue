<template>
  <div class="form-change-password-container">
    <header class="form-header">
      <h2 class="form-header-title">
        <icon-base
          class="form-header-title-icon icon icon-password"
          height="24"
          icon-name="password"
          width="24"
        >
          <icon-password />
        </icon-base>
        <span class="form-header-title-text">パスワードの再設定</span>
      </h2>
    </header>
    <form
      id="formChangePassword"
      action="/login"
      method="post"
      class="form form-changePassword -authentication"
    >
      <div class="form-section -input">
        <dl class="form-list -layer1">
          <div class="form-list-item -currentPassword">
            <dt class="form-list-item-title">
              <label
                for="yourCurrentPassword"
                class="form-list-item-title-label"
              >
                <span class="form-list-item-title-label-text">現在のパスワード</span>
              </label>
            </dt>
            <dd class="form-list-item-data">
              <input
                id="yourCurrentPassword"
                type="password"
                name="yourCurrentPassword"
                spellcheck="false"
                autocomplete="current-password"
                placeholder=""
                class="form-list-item-data-content -text"
              >
            </dd>
          </div>
          <div class="form-list-item -newPassword">
            <dt class="form-list-item-title">
              <label
                for="yourNewPassword"
                class="form-list-item-title-label"
              >
                <span class="form-list-item-title-label-text">新しいパスワード</span>
              </label>
            </dt>
            <dd class="form-list-item-data">
              <input
                id="yourNewPassword"
                type="password"
                name="yourNewPassword"
                spellcheck="false"
                autocomplete="new-password"
                placeholder=""
                class="form-list-item-data-content -text"
              >
            </dd>
          </div>
          <div class="form-list-item -confirmNewPassword">
            <dt class="form-list-item-title">
              <label
                for="confirmNewPassword"
                class="form-list-item-title-label"
              >
                <span class="form-list-item-title-label-text">新しいパスワード</span>
                <span class="form-list-item-title-label-text -note">（再入力してください）</span>
              </label>
            </dt>
            <dd class="form-list-item-data">
              <input
                id="confirmNewPassword"
                type="password"
                name="confirmNewPassword"
                spellcheck="false"
                autocomplete="off"
                placeholder=""
                class="form-list-item-data-content -text"
              >
            </dd>
          </div>
        </dl>
      </div>
      <div class="form-section -submit">
        <div class="form-btn -formChangePassword">
          <button
            type="submit"
            value="更新する"
            ontouchstart=""
            class="btn -normal -blue btn-changePassword btn-text"
          >
            更新する
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormChangePassword'
}
</script>

<style lang="scss" scoped>
// フォーム全体
.form-change-password-container {
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
.form-header + .form-changePassword {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.form-changePassword {
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
// 入力欄（「現在のパスワード」）
.form-list-item.-currentPassword {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-currentPassword .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「新しいパスワード」）
.form-list-item.-newPassword {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-newPassword .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「新しいパスワード（再入力してください）」）
.form-list-item.-confirmNewPassword {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-confirmNewPassword .form-list-item-data-content.-text {
  @include sp {
  };
  @include pc {
  };
}
// 「更新する」ボタン
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
.btn-changePassword {
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
