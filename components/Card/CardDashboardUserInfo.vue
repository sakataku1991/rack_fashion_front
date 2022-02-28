<template>
  <div class="card-dashboardUserInfo">
    <div class="card-dashboardUserInfo-actionButtons">
      <!-- 「設定」ボタン -->
      <button-dashboard-settings
        class="card-dashboardUserInfo-actionButtons-settingsBtn"
      />
    </div>
    <div class="card-dashboardUserInfo-bio">
      <p class="card-dashboardUserInfo-bio-avatar">
        <img
          :src="image_src_avatar"
          alt="sakataku199のアイコン"
          class="card-dashboardUserInfo-bio-avatar-img"
          height="104"
          width="104"
        >
      </p>
      <div class="card-dashboardUserInfo-bio-data">
        <div class="card-dashboardUserInfo-bio-data-name">
          <h1 class="card-dashboardUserInfo-bio-data-name-userName">
            {{ $store.state.user.current.name }}
          </h1>
          <p class="card-dashboardUserInfo-bio-data-name-rackId">
            @{{ $store.state.user.current.rack_id }}
          </p>
        </div>
        <div class="card-dashboardUserInfo-profile">
          <p class="card-dashboardUserInfo-profile-text">
            {{ $store.state.user.current.profile }}
          </p>
        </div>
        <div class="card-dashboardUserInfo-bio-data-links">
          <ul class="card-dashboardUserInfo-bio-data-links-list">
            <li class="card-dashboardUserInfo-bio-data-links-list-item">
              <button-instagram
                :instagram="params.user.instagram"
                class="card-dashboardUserInfo-bio-data-links-list-item-btn"
              />
            </li>
            <li class="card-dashboardUserInfo-bio-data-links-list-item">
              <button-twitter
                :twitter="params.user.twitter"
                class="card-dashboardUserInfo-bio-data-links-list-item-btn"
              />
            </li>
            <li class="card-dashboardUserInfo-bio-data-links-list-item">
              <button-homepage
                :homepage="params.user.homepage"
                class="card-dashboardUserInfo-bio-data-links-list-item-btn"
              />
            </li>
          </ul>
        </div>
        <div class="card-dashboardUserInfo-bio-data-relationships">
          <ul class="card-dashboardUserInfo-bio-data-relationships-list">
            <li class="card-dashboardUserInfo-bio-data-relationships-list-item">
              <nuxt-link
                to="/dashboard/relationships/following"
                class="card-dashboardUserInfo-bio-data-relationships-list-item-link"
                ontouchstart=""
              >
                <span class="card-dashboardUserInfo-bio-data-relationships-list-item-link-text -number">40</span>
                <span class="card-dashboardUserInfo-bio-data-relationships-list-item-link-text -unit">フォロー</span>
              </nuxt-link>
            </li>
            <li class="card-dashboardUserInfo-bio-data-relationships-list-item">
              <nuxt-link
                to="/dashboard/relationships/followers"
                class="card-dashboardUserInfo-bio-data-relationships-list-item-link"
                ontouchstart=""
              >
                <span class="card-dashboardUserInfo-bio-data-relationships-list-item-link-text -number">60</span>
                <span class="card-dashboardUserInfo-bio-data-relationships-list-item-link-text -unit">フォロワー</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- 「閲覧チケット」の保有数バッヂ -->
        <badge-ticket
          class="card-dashboardUserInfo-bio-data-ticket"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsCardDashboardUserInfo',
  data () {
    return {
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png'),
      params: {
        user: {
          instagram: this.$store.state.user.current.instagram,
          twitter: this.$store.state.user.current.twitter,
          homepage: this.$store.state.user.current.homepage
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// ヘッダー全体
.card-dashboardUserInfo {
  position: relative;
  z-index: 0;
  @include sp {
    padding: 16px 0 20px;
  };
  @include pc {
    padding: 32px 0 13px;
  };
}
// アクションボタン
.card-dashboardUserInfo-actionButtons {
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
.card-dashboardUserInfo-actionButtons-settingsBtn {
  @include sp {
    padding: 4px 16px 4px;
  };
  @include pc {
    padding: 6px 16px 6px;
  };
}
// ユーザーのアイコンや名前など
.card-dashboardUserInfo-bio {
  position: relative;
  @include sp {
  };
  @include pc {
    display: flex;
    gap: 24px;
  };
}
.card-dashboardUserInfo-bio-avatar {
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
.card-dashboardUserInfo-bio-avatar-img {
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
.card-dashboardUserInfo-bio-avatar + .card-dashboardUserInfo-bio-data {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
  };
}
.card-dashboardUserInfo-bio-data {
  @include sp {
  };
  @include pc {
    padding-top: 8px;
    width: calc(100% - calc(104px + 24px));
  };
}
// 「名前」＋「RACK ID」
.card-dashboardUserInfo-bio-data-name {
  @include sp {
  };
  @include pc {
  };
}
// 「名前」
.card-dashboardUserInfo-bio-data-name-userName {
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
.card-dashboardUserInfo-bio-data-name-userName + .card-dashboardUserInfo-bio-data-name-rackId {
  @include sp {
    margin-top: 2px;
  };
  @include pc {
    margin-top: 2px;
  };
}
.card-dashboardUserInfo-bio-data-name-rackId {
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
.card-dashboardUserInfo-bio-data-name + .card-dashboardUserInfo-profile {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.card-dashboardUserInfo-profile {
  @include sp {
  };
  @include pc {
  };
}
.card-dashboardUserInfo-profile-text {
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
.card-dashboardUserInfo-profile + .card-dashboardUserInfo-bio-data-links {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.card-dashboardUserInfo-bio-data-links {
  @include sp {
  };
  @include pc {
  };
}
.card-dashboardUserInfo-bio-data-links-list {
  align-items: center;
  display: flex;
  @include sp {
    gap: 10px;
  };
  @include pc {
    gap: 10px;
  };
}
.card-dashboardUserInfo-bio-data-links-list-item {
  @include sp {
  };
  @include pc {
  };
}
.card-dashboardUserInfo-bio-data-links-list-item-btn {
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
.card-dashboardUserInfo-bio-data-links + .card-dashboardUserInfo-bio-data-relationships {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.card-dashboardUserInfo-bio-data-relationships {
  @include sp {
  };
  @include pc {
  };
}
.card-dashboardUserInfo-bio-data-relationships-list {
  align-items: center;
  display: flex;
  @include sp {
    gap: 16px;
  };
  @include pc {
    gap: 20px;
  };
}
.card-dashboardUserInfo-bio-data-relationships-list-item {
  @include sp {
  };
  @include pc {
  };
}
.card-dashboardUserInfo-bio-data-relationships-list-item-link {
  align-items: center;
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.card-dashboardUserInfo-bio-data-relationships-list-item-link-text {
  @include sp {
  };
  @include pc {
  };
}
// フォロー／フォロワーの「数」
.card-dashboardUserInfo-bio-data-relationships-list-item-link-text.-number {
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
.card-dashboardUserInfo-bio-data-relationships-list-item-link-text.-unit {
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
.card-dashboardUserInfo-bio-data-relationships-list-item-link {
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
.card-dashboardUserInfo-bio-data-relationships-list-item-link {
  @include sp {
    &:active .card-dashboardUserInfo-bio-data-relationships-list-item-link-text {
      color: $blue;
    }
  };
  @include pc {
    &:hover .card-dashboardUserInfo-bio-data-relationships-list-item-link-text {
      color: $blue;
    }
  };
}
// 「閲覧チケット」の保有数バッヂ
.card-dashboardUserInfo-bio-data-ticket {
  position: absolute;
  @include sp {
    bottom: 2px;
    right: 0;
  };
  @include pc {
    bottom: -1px;
    right: 0;
  };
}
</style>
