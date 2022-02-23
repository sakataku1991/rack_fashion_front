<template>
  <div class="form-comment-container">
    <header class="form-header">
      <p class="form-comment-author-avatar">
        <img
          :src="image_src_avatar"
          alt="sakataku199のアイコン"
          class="form-comment-author-avatar-img"
          height="32"
          width="32"
        >
      </p>
      <div class="form-comment-author">
        <p class="form-comment-author-user-name">
          さかたく
        </p>
        <p class="form-comment-author-rack-id">
          @sakataku199
        </p>
      </div>
    </header>
    <form
      id="formComment"
      action="/question"
      method="post"
      class="form form-comment"
    >
      <div class="form-section -input">
        <dl class="form-list -layer1">
          <div class="form-list-item -picture">
            <dt class="form-list-item-title hideAll">
              <label
                for="yourPicture"
                class="form-list-item-title-label"
              />
            </dt>
            <dd class="form-list-item-data">
              <label
                tabindex="0"
                class="form-list-item-data-label"
              >
                <p class="form-comment-picture">
                  <img
                    :src="image_src_picture"
                    alt="「コメント」の添付画像"
                    class="form-comment-picture-img"
                  >
                </p>
                <input
                  id="yourPicture"
                  type="file"
                  name="yourPicture"
                  accept="image/png, image/jpeg, image/gif"
                  autocomplete="off"
                  tabindex="-1"
                  class="form-list-item-data-content -file hideAll"
                >
              </label>
            </dd>
          </div>
          <div class="form-list-item -commentAndLink">
            <div class="form-list -layer2">
              <div class="form-list-item -yourComment">
                <dt class="form-list-item-title hideAll">
                  <label
                    for="yourComment"
                    class="form-list-item-title-label"
                  />
                </dt>
                <dd class="form-list-item-data">
                  <textarea
                    id="yourComment"
                    name="yourComment"
                    cols="30"
                    rows="3"
                    spellcheck="false"
                    autocomplete="off"
                    required
                    placeholder="この質問にコメントする"
                    class="form-list-item-data-content -textarea"
                  />
                </dd>
              </div>
              <div class="form-list-item -referenceLink">
                <dt class="form-list-item-title">
                  <label
                    for="referenceLink"
                    class="form-list-item-title-label"
                  >
                    参考リンク：
                  </label>
                </dt>
                <dd class="form-list-item-data">
                  <input
                    id="referenceLink"
                    type="url"
                    name="referenceLink"
                    spellcheck="false"
                    autocomplete="off"
                    placeholder="参考サイトのURLを入力"
                    class="form-list-item-data-content -text"
                  >
                  <div class="form-list-item-data-note">
                    <ul class="list -note">
                      <li>画像の引用元や、参考になるサイトのリンク（URL）を入力してください</li>
                    </ul>
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </dl>
      </div>
      <div class="form-section -submit">
        <div class="form-btn -formComment">
          <button-comment />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormComment',
  data () {
    return {
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png'),
      image_src_picture: require('@/assets/image/thum/thum_form-comment_picture-placeholder.png')
    }
  }
}
</script>

<style lang="scss" scoped>
// フォーム全体
.form-comment-container {
  @include sp {
  };
  @include pc {
  };
}
// フォームのヘッダー
.form-header {
  align-items: center;
  display: flex;
  @include sp {
    gap: 8px;
    padding: 12px 12px 12px;
  };
  @include pc {
    gap: 8px;
    padding: 12px 16px 12px;
  };
}
// フォームのユーザー情報部分
.form-comment-author-avatar {
  @include sp {
  };
  @include pc {
  };
}
.form-comment-author-avatar-img {
  @include sp {
    border-radius: 50%;
  };
  @include pc {
    border-radius: 50%;
  };
}
.form-comment-author {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 1px 8px;
    width: calc(100% - calc(32px + 8px));
  };
  @include pc {
    gap: 1px 8px;
    width: calc(100% - calc(32px + 8px));
  };
}
.form-comment-author-user-name {
  color: $black;
  font-weight: bold;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
.form-comment-author-rack-id {
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
    padding-bottom: 1px;
    width: 100%;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
    padding-bottom: 1px;
    width: 100%;
  };
}
.form-header + .form-comment {
  @include sp {
  };
  @include pc {
  };
}
.form-comment {
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
    padding: 0px 12px 22px;
  };
  @include pc {
    padding: 0px 16px 20px;
  };
}
.form-section.-input .form-list {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list.-layer1 {
  display: flex;
  @include sp {
    gap: 12px;
  };
  @include pc {
    gap: 16px;
  };
}
.form-section.-input .form-list {
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
.form-list-item-title + .form-list-item-data {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data {
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
// 入力欄（「画像を添付」）
.form-list-item.-picture {
  @include sp {
  };
  @include pc {
  };
}
.form-comment-picture {
  @include sp {
  };
  @include pc {
  };
}
.form-comment-picture-img {
  @include sp {
    border-radius: 6px;
    height: 48px;
    width: 48px;
  };
  @include pc {
    border-radius: 6px;
    height: 64px;
    width: 64px;
  };
}
.form-list-item-data-content.-file {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.form-list-item.-picture .form-list-item-data-label {
  @include sp {
    &:active {
      filter: brightness(90%);
    }
  };
  @include pc {
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  };
}
.form-list-item.-commentAndLink {
  @include sp {
    width: calc(100% - calc(48px + 12px));
  };
  @include pc {
    width: calc(100% - calc(64px + 16px));
  };
}
// 入力欄（「この質問にコメントする」）
.form-list-item.-yourComment {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-yourComment .form-list-item-data-content.-textarea {
  @include sp {
    font-size: 1.6rem;
    line-height: 1.8;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.6;
  };
}
// 入力欄（「参考サイトのURLを入力」）
.form-list-item.-yourComment + .form-list-item.-referenceLink {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.form-list-item.-referenceLink {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-referenceLink .form-list-item-title {
  color: $gray_7;
  font-weight: normal;
  @include sp {
    font-size: 1.2rem;
    line-height: 1;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1;
  };
}
.form-list-item.-referenceLink .form-list-item-title + .form-list-item-data {
  @include sp {
    margin-top: 6px;
  };
  @include pc {
    margin-top: 4px;
  };
}
.form-list-item.-referenceLink .form-list-item-data-content.-text {
  @include sp {
    font-size: 1.6rem;
    line-height: 1.8;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.6;
  };
}
.form-list-item.-referenceLink .form-list-item-data-content.-text + .form-list-item-data-note {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 4px;
  };
}
.form-list-item.-referenceLink .form-list-item-data-note {
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
// 「投稿」ボタン
.form-section.-input + .form-section.-submit {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.form-section.-submit {
  @include sp {
    padding: 16px 12px 16px;
  };
  @include pc {
    padding: 16px 16px 16px;
  };
}
.btn-formComment {
  @include sp {
    padding: 4px 0;
    width: 32%;
  };
  @include pc {
    margin-right: 0;
    padding: 6px 0;
    width: 80px;
  };
}
</style>
