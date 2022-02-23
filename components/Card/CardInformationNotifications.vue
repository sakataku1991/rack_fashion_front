<template>
  <div class="card-information-notifications">
    <icon-base
      class="card-information-notifications-icon icon icon-heart"
      height="24"
      icon-name="heart"
      width="24"
    >
      <icon-heart />
    </icon-base>
    <div class="card-information-notifications-content">
      <button-user-avatar-link
        class="card-information-notifications-content-user-avatar"
      />
      <div class="card-information-notifications-content-user-and-date">
        <nuxt-link
          to="/mypage/items/questions"
          class="card-information-notifications-content-user-name"
          ontouchstart=""
        >
          さかたく
        </nuxt-link>
        <p class="card-information-notifications-content-user-rack-id-and-posting-time">
          <span class="card-information-notifications-content-user-rack-id">@takutaku6</span><span class="card-information-notifications-content-user-posting-time">・<time datetime="2022-01-01T12:34:56+09:00" class="card-information-notifications-content-user-posting-time-data">30分前</time></span>
        </p>
      </div>
      <p class="card-information-notifications-content-message">
        <span class="card-information-notifications-content-message-user-name">
          <nuxt-link
            to="/mypage/items/questions"
            class="card-information-notifications-content-message-user-name-link"
            ontouchstart=""
          >
            さかちゃん
          </nuxt-link>さん
        </span>があなたの質問にコメントをしました
      </p>
      <p class="card-information-notifications-content-article">
        <nuxt-link
          to="/question"
          class="card-information-notifications-content-article-link"
          ontouchstart=""
        >
          <icon-base
            class="card-information-notifications-content-article-link-icon icon icon-commentOutline"
            height="24"
            icon-name="description-outline"
            width="24"
          >
            <icon-description-outline />
          </icon-base>
          <span class="card-information-notifications-content-article-link-text">濃いめのグレーのシャツを探しています</span>
        </nuxt-link>
      </p>
    </div>
    <nuxt-link
      to="/question"
      class="card-information-notifications-link"
      tabindex="-1"
      ontouchstart=""
    />
  </div>
</template>

<script>
export default {
  name: 'ComponentsCardInformationNotifications'
}
</script>

<style lang="scss" scoped>
.card-information-notifications {
  display: flex;
  position: relative;
  z-index: 0;
  @include sp {
    gap: 10px;
    padding: 12px 5vw 12px 4vw;
    width: 100vw;
  };
  @include pc {
    gap: 10px;
    padding: 12px 16px 12px 12px;
    width: 100%;
  };
}
// ホバー時の効果
.card-information-notifications {
  transition: background-color 0.3s ease-out;
  @include sp {
    &:active {
      transition: background-color 0.1s ease-out;
    }
  };
  @include pc {
    &:hover {
      transition: background-color 0.1s ease-out;
    }
  };
}
.card-information-notifications {
  @include sp {
    &:active {
      background-color: $blue_bgLight;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_bgLight;
    }
  };
}
.card-information-notifications-link {
  position: absolute;
  z-index: 1;
  @include sp {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  };
  @include pc {
    bottom: 0;
    cursor: pointer;
    left: 0;
    right: 0;
    top: 0;
  };
}
.card-information-notifications-icon {
  pointer-events: none;
  @include sp {
    height: 32px;
    margin-top: -4px;
    width: 32px;
  };
  @include pc {
    height: 32px;
    margin-top: -4px;
    width: 32px;
  };
}
.card-information-notifications-content {
  @include sp {
    padding-top: 2px;
    width: calc(100% - calc(32px + 10px));
  };
  @include pc {
    padding-top: 2px;
    width: calc(100% - calc(32px + 10px));
  };
}
.card-information-notifications-content-user-avatar {
  z-index: 2;
  @include sp {
    padding: 0;
  };
  @include pc {
    padding: 0;
  };
}
::v-deep .card-information-notifications-content-user-avatar .btn-userAvatar-img {
  @include sp {
    height: 20px;
    margin-left: 0;
    width: 20px;
  };
  @include pc {
    height: 24px;
    margin-left: 0;
    width: 24px;
  };
}
.card-information-notifications-content-user-avatar + .card-information-notifications-content-user-and-date {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 4px;
  };
}
.card-information-notifications-content-user-and-date {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 1px 8px;
  };
  @include pc {
    gap: 1px 8px;
  };
}
.card-information-notifications-content-user-name {
  color: $black;
  font-weight: bold;
  z-index: 3;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
// ホバー時の効果
.card-information-notifications-content-user-name {
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
.card-information-notifications-content-user-rack-id-and-posting-time {
  color: $blue_noticeGrayText;
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
.card-information-notifications-content-user-rack-id {
  @include sp {
  };
  @include pc {
  };
}
.card-information-notifications-content-user-posting-time {
  @include sp {
  };
  @include pc {
  };
}
.card-information-notifications-content-user-posting-time-data {
  @include sp {
  };
  @include pc {
  };
}
.card-information-notifications-content-user-and-date + .card-information-notifications-content-message {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 4px;
  };
}
.card-information-notifications-content-message {
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
.card-information-notifications-content-message-user-name {
  @include sp {
  };
  @include pc {
  };
}
.card-information-notifications-content-message-user-name-link {
  color: $black;
  font-weight: bold;
  position: relative;
  text-decoration: underline;
  word-break: break-all;
  z-index: 2;
  @include sp {
    margin-right: 4px;
  };
  @include pc {
    margin-right: 4px;
  };
}
// ホバー時の効果
.card-information-notifications-content-message-user-name-link {
  @include sp {
    &:active {
      color: $blue;
      text-decoration: none !important;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
      text-decoration: none !important;
    }
  };
}
.card-information-notifications-content-message + .card-information-notifications-content-article {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
    margin-top: 8px;
  };
}
.card-information-notifications-content-article {
  @include sp {
  };
  @include pc {
  };
}
.card-information-notifications-content-article-link {
  color: $gray_5;
  display: inline-block;
  position: relative;
  text-decoration: underline;
  word-break: break-all;
  z-index: 2;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
.card-information-notifications-content-article-link-icon {
  vertical-align: text-bottom;
  @include sp {
    height: 16px;
    margin-right: 1px;
    width: 16px;
  };
  @include pc {
    height: 16px;
    margin-right: 1px;
    width: 16px;
  };
}
.card-information-notifications-content-article-link-text {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.card-information-notifications-content-article-link {
  @include sp {
    &:active {
      color: $blue;
      text-decoration: none !important;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
      text-decoration: none !important;
    }
  };
}
//// アイコンの色
// フォローされた｜人型アイコン｜ブルー
.is-followed .card-information-notifications-icon {
  color: $info_blue;
  @include sp {
  };
  @include pc {
  };
}
// 「いいね！」された｜ハートのアイコン｜レッド
.is-liked .card-information-notifications-icon {
  color: $info_red;
  @include sp {
  };
  @include pc {
  };
}
// コメントが寄せられた｜フキダシのアイコン｜グリーン
.is-commented .card-information-notifications-icon {
  color: $info_green;
  @include sp {
  };
  @include pc {
  };
}
// 「役に立った」された｜スターのアイコン｜イエロー
.is-useful .card-information-notifications-icon {
  color: $info_yellow;
  @include sp {
  };
  @include pc {
  };
}
</style>
