<template>
  <div class="Menu__userAvatar">
    <div class="Menu__userAvatarHeader">
      <nuxt-link
        to="/dashboard/settings/profile"
        class="Menu__userAvatarHeaderLink"
        ontouchstart=""
      >
        <p class="Menu__userAvatarHeaderUserName">
          <!-- TODO 「watch」を使ってログイン前・ログイン時の表示替えをする！ -->
          <!-- {{ $store.state.user.current.name }} -->さかたく
        </p>
        <p class="Menu__userAvatarHeaderRackID">
          <!-- @{{ $store.state.user.current.rack_id }} -->@rack_id0
        </p>
      </nuxt-link>
    </div>
    <div class="Menu__userAvatarContent">
      <ul class="Menu__userAvatarContentList -layer1">
        <li class="Menu__userAvatarContentListItem -items">
          <ul class="Menu__userAvatarContentList -layer2">
            <li class="Menu__userAvatarContentListItem -questions">
              <nuxt-link
                to="/dashboard/items/questions"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="edit"
                  width="20"
                >
                  <icon-edit />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">質問の管理</span>
              </nuxt-link>
            </li>
            <li class="Menu__userAvatarContentListItem -comments">
              <nuxt-link
                to="/dashboard/items/comments"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="comment-outline"
                  width="20"
                >
                  <icon-comment-outline />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">コメントの管理</span>
              </nuxt-link>
            </li>
            <li class="Menu__userAvatarContentListItem -tickets">
              <nuxt-link
                to="/dashboard/items/tickets"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="confirmation-number"
                  width="20"
                >
                  <icon-confirmation-number />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">閲覧チケット</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li class="Menu__userAvatarContentListItem -items">
          <ul class="Menu__userAvatarContentList -layer2">
            <li class="Menu__userAvatarContentListItem -liked">
              <nuxt-link
                to="/dashboard/items/questions?type=liked"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="heart-outline"
                  width="20"
                >
                  <icon-heart-outline />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">いいね！した質問</span>
              </nuxt-link>
            </li>
            <li class="Menu__userAvatarContentListItem -commentsCanBeViewed">
              <nuxt-link
                to="/dashboard/items/questions?type=comments_can_be_viewed"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="check-circle-outline"
                  width="20"
                >
                  <icon-check-circle-outline />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">チケットを使用した質問</span>
              </nuxt-link>
            </li>
            <li class="Menu__userAvatarContentListItem -browsingHistory">
              <nuxt-link
                to="/dashboard/items/questions?type=browsing_history"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="history"
                  width="20"
                >
                  <icon-history />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">質問の閲覧履歴</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li class="Menu__userAvatarContentListItem -settings">
          <ul class="Menu__userAvatarContentList -layer2">
            <li class="Menu__userAvatarContentListItem -account">
              <nuxt-link
                to="/dashboard/settings/account"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="settings"
                  width="20"
                >
                  <icon-settings />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">アカウント設定</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li class="Menu__userAvatarContentListItem -certification">
          <ul class="Menu__userAvatarContentList -layer2">
            <li class="Menu__userAvatarContentListItem -logout">
              <nuxt-link
                to="/logout"
                class="Menu__userAvatarContentListItemLink"
                ontouchstart=""
              >
                <icon-base
                  class="Menu__userAvatarContentListItemLinkIcon"
                  height="20"
                  icon-name="logout"
                  width="20"
                >
                  <icon-logout />
                </icon-base>
                <span class="Menu__userAvatarContentListItemLinkText">ログアウト</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsMenuUserAvatar'
}
</script>

<style lang="scss" scoped>
.Menu__userAvatar {
  @include sp {
    border-bottom: 1px solid $gray_d;
  };
  @include pc {
  };
}
.Menu__userAvatarHeader {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarHeaderLink {
  display: block;
  @include sp {
    padding: 16px 5vw 16px;
  };
  @include pc {
    padding: 16px 16px 16px;
  };
}
// ホバー時の効果
.Menu__userAvatarHeaderLink {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarHeaderLink {
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
.Menu__userAvatarHeaderLink {
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
.Menu__userAvatarHeaderUserName {
  color: $black;
  font-weight: bold;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
.Menu__userAvatarHeaderRackID {
  color: $gray_7;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
.Menu__userAvatarHeader + .Menu__userAvatarContent {
  @include sp {
    border-top: 1px solid $gray_d;
  };
  @include pc {
    border-top: 1px solid $gray_d;
  };
}
.Menu__userAvatarContent {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentList {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentListItem {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentListItemLink {
  display: block;
  @include sp {
    width: 100vw;
  };
  @include pc {
    width: 100%;
  };
}
.Menu__userAvatarContentListItemLinkIcon {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentListItemLinkText {
  @include sp {
  };
  @include pc {
  };
}
// メニューのリスト（第1層）
.Menu__userAvatarContentList.-layer1 {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentList.-layer1 > .Menu__userAvatarContentListItem {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentList.-layer1 > .Menu__userAvatarContentListItem + .Menu__userAvatarContentListItem {
  @include sp {
    border-top: 1px solid $gray_d;
  };
  @include pc {
    border-top: 1px solid $gray_d;
  };
}
// メニューのリスト（第2層）
.Menu__userAvatarContentList.-layer2 {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentList.-layer2 > .Menu__userAvatarContentListItem {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentList.-layer2 > .Menu__userAvatarContentListItem > .Menu__userAvatarContentListItemLink {
  align-items: center;
  display: flex;
  @include sp {
    gap: 6px;
    padding: 16px 5vw 16px;
  };
  @include pc {
    gap: 6px;
    padding: 12px 14px 12px;
  };
}
.Menu__userAvatarContentList.-layer2 > .Menu__userAvatarContentListItem > .Menu__userAvatarContentListItemLink > .Menu__userAvatarContentListItemLinkIcon {
  color: $blue_grayIcon;
  @include sp {
  };
  @include pc {
  };
}
.Menu__userAvatarContentList.-layer2 > .Menu__userAvatarContentListItem > .Menu__userAvatarContentListItemLink > .Menu__userAvatarContentListItemLinkText {
  color: $black;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
// ホバー時の効果
.Menu__userAvatarContentList.-layer2 > .Menu__userAvatarContentListItem > .Menu__userAvatarContentListItemLink {
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
.Menu__userAvatarContentList.-layer2 > .Menu__userAvatarContentListItem > .Menu__userAvatarContentListItemLink {
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
</style>
