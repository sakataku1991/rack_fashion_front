<template>
  <div class="card-mypageUserInfo">
    <div class="card-mypageUserInfo-actionButtons">
      <!-- 「プロフィールを編集」ボタン -->
      <button-edit-profile
        class="card-mypageUserInfo-actionButtons-settingsBtn"
      />
    </div>
    <div class="card-mypageUserInfo-bio">
      <p class="card-mypageUserInfo-bio-avatar">
        <img
          :src="image_src_avatar"
          alt="sakataku199のアイコン"
          class="card-mypageUserInfo-bio-avatar-img"
          height="104"
          width="104"
        >
      </p>
      <div class="card-mypageUserInfo-bio-data">
        <div class="card-mypageUserInfo-bio-data-name">
          <h1 class="card-mypageUserInfo-bio-data-name-userName">
            さかたく
          </h1>
          <p class="card-mypageUserInfo-bio-data-name-rackId">
            @sakataku1991
          </p>
        </div>
        <div class="card-mypageUserInfo-profile">
          <p class="card-mypageUserInfo-profile-text">
            ジーンズが好きです。90年代の古着とか探しています。
          </p>
        </div>
        <div class="card-mypageUserInfo-bio-data-links">
          <ul class="card-mypageUserInfo-bio-data-links-list">
            <li class="card-mypageUserInfo-bio-data-links-list-item">
              <button-instagram
                class="card-mypageUserInfo-bio-data-links-list-item-btn"
              />
            </li>
            <li class="card-mypageUserInfo-bio-data-links-list-item">
              <button-twitter
                class="card-mypageUserInfo-bio-data-links-list-item-btn"
              />
            </li>
            <li class="card-mypageUserInfo-bio-data-links-list-item">
              <button-homepage
                class="card-mypageUserInfo-bio-data-links-list-item-btn"
              />
            </li>
          </ul>
        </div>
        <div class="card-mypageUserInfo-bio-data-relationships">
          <ul class="card-mypageUserInfo-bio-data-relationships-list">
            <li class="card-mypageUserInfo-bio-data-relationships-list-item">
              <nuxt-link
                to="/mypage/relationships/following"
                class="card-mypageUserInfo-bio-data-relationships-list-item-link"
                ontouchstart=""
              >
                <span class="card-mypageUserInfo-bio-data-relationships-list-item-link-text -number">40</span>
                <span class="card-mypageUserInfo-bio-data-relationships-list-item-link-text -unit">フォロー</span>
              </nuxt-link>
            </li>
            <li class="card-mypageUserInfo-bio-data-relationships-list-item">
              <nuxt-link
                to="/mypage/relationships/followers"
                class="card-mypageUserInfo-bio-data-relationships-list-item-link"
                ontouchstart=""
              >
                <span class="card-mypageUserInfo-bio-data-relationships-list-item-link-text -number">60</span>
                <span class="card-mypageUserInfo-bio-data-relationships-list-item-link-text -unit">フォロワー</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsCardMypageUserInfo',
  data () {
    return {
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png')
    }
  }
}
</script>

<style lang="scss" scoped>
// ヘッダー全体
.card-mypageUserInfo {
  position: relative;
  z-index: 0;
  @include sp {
    padding: 16px 0 20px;
  };
  @include pc {
    padding: 32px 0 16px;
  };
}
// アクションボタン
.card-mypageUserInfo-actionButtons {
  position: absolute;
  z-index: 1;
  @include sp {
    right: 0;
    top: 16px;
  };
  @include pc {
    right: 0;
    top: 32px;
  };
}
// アクションボタン｜「設定」ボタン
.card-mypageUserInfo-actionButtons-settingsBtn {
  @include sp {
    padding: 4px 16px 4px;
  };
  @include pc {
    padding: 6px 16px 6px;
  };
}
// ユーザーのアイコンや名前など
.card-mypageUserInfo-bio {
  position: relative;
  @include sp {
  };
  @include pc {
    display: flex;
    gap: 24px;
  };
}
.card-mypageUserInfo-bio-avatar {
  @include sp {
    height: 64px;  // TODO 後で消す
    margin: 0;  // TODO 後で消す
    padding: 0;  // TODO 後で消す
  };
  @include pc {
    height: 104px;  // TODO 後で消す
    margin: 0;  // TODO 後で消す
    padding: 0;  // TODO 後で消す
  };
}
.card-mypageUserInfo-bio-avatar-img {
  @include sp {
    border-radius: 50%;
    height: 64px;
    margin-left: 0;
    width: 64px;
  };
  @include pc {
    border-radius: 50%;
    height: 104px;
    width: 104px;
  };
}
.card-mypageUserInfo-bio-avatar + .card-mypageUserInfo-bio-data {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
  };
}
.card-mypageUserInfo-bio-data {
  @include sp {
  };
  @include pc {
    padding-top: 8px;
    width: calc(100% - calc(104px + 24px));
  };
}
// 「名前」＋「RACK ID」
.card-mypageUserInfo-bio-data-name {
  @include sp {
  };
  @include pc {
  };
}
// 「名前」
.card-mypageUserInfo-bio-data-name-userName {
  font-weight: bold;
  @include sp {
    font-size: 1.6rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.8rem;
    line-height: 1.5;
  };
}
// 「RACK ID」
.card-mypageUserInfo-bio-data-name-userName + .card-mypageUserInfo-bio-data-name-rackId {
  @include sp {
    margin-top: 2px;
  };
  @include pc {
    margin-top: 2px;
  };
}
.card-mypageUserInfo-bio-data-name-rackId {
  color: $gray_7;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.4;
  };
}
// プロフィールの文章
.card-mypageUserInfo-bio-data-name + .card-mypageUserInfo-profile {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.card-mypageUserInfo-profile {
  @include sp {
  };
  @include pc {
  };
}
.card-mypageUserInfo-profile-text {
  @include sp {
    font-size: 1.4rem;
    line-height: 1.6;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.6;
  };
}
// 各種リンク
.card-mypageUserInfo-profile + .card-mypageUserInfo-bio-data-links {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.card-mypageUserInfo-bio-data-links {
  @include sp {
  };
  @include pc {
  };
}
.card-mypageUserInfo-bio-data-links-list {
  align-items: center;
  display: flex;
  @include sp {
    gap: 10px;
  };
  @include pc {
    gap: 10px;
  };
}
.card-mypageUserInfo-bio-data-links-list-item {
  @include sp {
  };
  @include pc {
  };
}
.card-mypageUserInfo-bio-data-links-list-item-btn {
  @include sp {
  };
  @include pc {
  };
}
// 「instagram」ボタン
// 「twitter」ボタン
// 「home」ボタン
.btn.-icon {
  color: $gray_9;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn.-icon {
  @include sp {
    &:active {
      color: $blue;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
    }
  };
}
// 「フォロー」＋「フォロワー」
.card-mypageUserInfo-bio-data-links + .card-mypageUserInfo-bio-data-relationships {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.card-mypageUserInfo-bio-data-relationships {
  @include sp {
  };
  @include pc {
  };
}
.card-mypageUserInfo-bio-data-relationships-list {
  align-items: center;
  display: flex;
  @include sp {
    gap: 16px;
  };
  @include pc {
    gap: 20px;
  };
}
.card-mypageUserInfo-bio-data-relationships-list-item {
  @include sp {
  };
  @include pc {
  };
}
.card-mypageUserInfo-bio-data-relationships-list-item-link {
  align-items: center;
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.card-mypageUserInfo-bio-data-relationships-list-item-link-text {
  @include sp {
  };
  @include pc {
  };
}
// フォロー／フォロワーの「数」
.card-mypageUserInfo-bio-data-relationships-list-item-link-text.-number {
  color: $black;
  font-weight: bold;
  @include sp {
    font-size: 1.4rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
// フォロー／フォロワーの「単位」
.card-mypageUserInfo-bio-data-relationships-list-item-link-text.-unit {
  color: $gray_7;
  @include sp {
    font-size: 1.0rem;
    padding-left: 2px;
  };
  @include pc {
    font-size: 1.0rem;
    padding-left: 2px;
  };
}
// ホバー時の効果
.card-mypageUserInfo-bio-data-relationships-list-item-link {
  @include sp {
    &:active {
      color: $blue;
      text-decoration: underline !important;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
      text-decoration: underline !important;
    }
  };
}
.card-mypageUserInfo-bio-data-relationships-list-item-link {
  @include sp {
    &:active .card-mypageUserInfo-bio-data-relationships-list-item-link-text {
      color: $blue;
    }
  };
  @include pc {
    &:hover .card-mypageUserInfo-bio-data-relationships-list-item-link-text {
      color: $blue;
    }
  };
}
</style>
