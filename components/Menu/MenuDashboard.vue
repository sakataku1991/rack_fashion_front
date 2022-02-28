<template>
  <section class="MenuItem MenuDashboard">
    <div class="MenuDashboard__content">
      <div class="MenuDashboard__menu">
        <ul class="MenuDashboard__menuList -layer1">
          <li class="MenuDashboard__menuListItem -settings -toUser">
            <h2 class="MenuDashboard__menuListItemTitle">
              <icon-base
                class="icon icon-person"
                height="24"
                icon-name="person"
                width="24"
              >
                <icon-person />
              </icon-base>
              <span class="MenuDashboard__menuListItemTitleText">アカウント設定</span>
            </h2>
            <div class="MenuDashboard__menuListItemContent">
              <ul class="MenuDashboard__menuList -layer2">
                <li class="MenuDashboard__menuListItem -account">
                  <nuxt-link
                    to="/dashboard/settings/account"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    アカウント
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -profile">
                  <nuxt-link
                    to="/dashboard/settings/profile"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    プロフィール
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="MenuDashboard__menuListItem -relationships -ofContent">
            <h2 class="MenuDashboard__menuListItemTitle">
              <icon-base
                class="icon icon-emojiEmotions"
                height="24"
                icon-name="emoji-emotions"
                width="24"
              >
                <icon-emoji-emotions />
              </icon-base>
              <span class="MenuDashboard__menuListItemTitleText">つながり</span>
            </h2>
            <div class="MenuDashboard__menuListItemContent">
              <ul class="MenuDashboard__menuList -layer2">
                <li class="MenuDashboard__menuListItem -following">
                  <nuxt-link
                    to="/dashboard/relationships/following"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    フォロー
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -followers">
                  <nuxt-link
                    to="/dashboard/relationships/followers"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    フォロワー
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="MenuDashboard__menuListItem -items -ofContent">
            <h2 class="MenuDashboard__menuListItemTitle">
              <icon-base
                class="icon icon-description"
                height="24"
                icon-name="description"
                width="24"
              >
                <icon-description />
              </icon-base>
              <span class="MenuDashboard__menuListItemTitleText">マイアイテム</span>
            </h2>
            <div class="MenuDashboard__menuListItemContent">
              <ul class="MenuDashboard__menuList -layer2">
                <li class="MenuDashboard__menuListItem -questions">
                  <nuxt-link
                    to="/dashboard/items/questions"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    自分の質問
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -comments">
                  <nuxt-link
                    to="/dashboard/items/comments"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    コメントした記事
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -tickets">
                  <nuxt-link
                    to="/dashboard/items/tickets"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    閲覧チケット
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -liked">
                  <nuxt-link
                    to="/dashboard/items/questions?type=liked"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    いいね！した記事
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -commentsCanBeViewed">
                  <nuxt-link
                    to="/dashboard/items/questions?type=comments_can_be_viewed"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    チケットを使用した記事
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -browsingHistory">
                  <nuxt-link
                    to="/dashboard/items/questions?type=browsing_history"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    記事の閲覧履歴
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="MenuDashboard__menuListItem -informations -ofContent">
            <h2 class="MenuDashboard__menuListItemTitle">
              <icon-base
                class="icon icon-notificationsNone"
                height="24"
                icon-name="notifications-none"
                width="24"
              >
                <icon-notifications-none />
              </icon-base>
              <span class="MenuDashboard__menuListItemTitleText">インフォメーション</span>
            </h2>
            <div class="MenuDashboard__menuListItemContent">
              <ul class="MenuDashboard__menuList -layer2">
                <li class="MenuDashboard__menuListItem -notifications">
                  <nuxt-link
                    to="/dashboard/informations/notifications"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    通知
                  </nuxt-link>
                </li>
                <li class="MenuDashboard__menuListItem -news">
                  <nuxt-link
                    to="/dashboard/informations/news"
                    class="MenuDashboard__menuListItemLink"
                    ontouchstart=""
                  >
                    お知らせ
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="MenuDashboard__menuListItem -certification -ofContent">
            <nuxt-link
              to="/logout"
              class="MenuDashboard__menuListItemTitle"
              ontouchstart=""
            >
              <icon-base
                class="icon icon-logout"
                height="24"
                icon-name="logout"
                width="24"
              >
                <icon-logout />
              </icon-base>
              <span class="MenuDashboard__menuListItemTitleText">ログアウト</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsMenuDashboard'
}
</script>

<style lang="scss" scoped>
// ダッシュボードのメニュー全体
.MenuDashboard {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__content {
  @include sp {
  };
  @include pc {
  };
}
// メニュー
.MenuDashboard__menu {
  @include sp {
  };
  @include pc {
  };
}
// メニューのリスト
.MenuDashboard__menuList {
  @include sp {
  };
  @include pc {
  };
}
// メニューのリストのアイテム
.MenuDashboard__menuListItem {
  @include sp {
  };
  @include pc {
  };
}
// メニューのリストのアイテムのタイトル
.MenuDashboard__menuListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__menuListItemTitleText {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__menuListItemTitle .icon {
  @include sp {
  };
  @include pc {
  };
}
// メニューのリストのアイテムのリンク
.MenuDashboard__menuListItemLink {
  @include sp {
  };
  @include pc {
  };
}
// メニューのリスト（第1層）
.MenuDashboard__menuList.-layer1 {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__menuList.-layer1 > .MenuDashboard__menuListItem {
  @include sp {
    padding-bottom: 11px;
  };
  @include pc {
  };
}
.MenuDashboard__menuList.-layer1 > .MenuDashboard__menuListItem + .MenuDashboard__menuListItem {
  @include sp {
    border-top: 1px solid $gray_e4;
    padding-top: 7px;
  };
  @include pc {
  };
}
.MenuDashboard__menuList.-layer1 > .MenuDashboard__menuListItem > .MenuDashboard__menuListItemTitle {
  align-items: center;
  display: flex;
  font-weight: bold;
  @include sp {
    color: $gray_7;
    font-size: 1.6rem;
    gap: 4px;
    line-height: 1.5;
    padding: 8px 16px 6px 16px;
  };
  @include pc {
    color: $white;
    font-size: 1.6rem;
    gap: 4px;
    line-height: 1.5;
    padding: 4px 16px 4px 16px;
  };
}
.MenuDashboard__menuList.-layer1 > .MenuDashboard__menuListItem > .MenuDashboard__menuListItemTitle .icon {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__menuList.-layer1 > .MenuDashboard__menuListItem > .MenuDashboard__menuListItemTitle > .MenuDashboard__menuListItemTitleText {
  @include sp {
  };
  @include pc {
  };
}
// 「ログアウト」
// ホバー時の効果
.MenuDashboard__menuList.-layer1 > .MenuDashboard__menuListItem.-certification.-ofContent > .MenuDashboard__menuListItemTitle {
  @include sp {
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    &:active {
      transition: background-color 0.15s ease-out, color 0.15s ease-out;
    }
  };
  @include pc {
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    &:hover {
      transition: background-color 0.15s ease-out, color 0.15s ease-out;
    }
  };
}
.MenuDashboard__menuList.-layer1 > .MenuDashboard__menuListItem.-certification.-ofContent > .MenuDashboard__menuListItemTitle {
  @include sp {
    &:active {
      background-color: $blue_16pct;
      color: $black;
    }
  };
  @include pc {
    &:hover {
      background-color: $gray_f4;
      color: $blue_hsb_b32;
    }
  };
}
// メニューのリスト（第2層）
.MenuDashboard__menuList.-layer2 {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__menuList.-layer2 > .MenuDashboard__menuListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__menuList.-layer2 > .MenuDashboard__menuListItem > .MenuDashboard__menuListItemLink {
  display: block;
  @include sp {
    color: $black;
    font-size: 1.4rem;
    line-height: 1.5;
    padding: 8px 16px 8px 44px;
  };
  @include pc {
    color: $white;
    font-size: 1.4rem;
    line-height: 1.5;
    padding: 6px 16px 6px 44px;
  };
}
// ホバー時の効果
.MenuDashboard__menuList.-layer2 > .MenuDashboard__menuListItem > .MenuDashboard__menuListItemLink {
  @include sp {
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    &:active {
      transition: background-color 0.15s ease-out, color 0.15s ease-out;
    }
  };
  @include pc {
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    &:hover {
      transition: background-color 0.15s ease-out, color 0.15s ease-out;
    }
  };
}
// 「アカウント関係」のメニューのホバー時の効果
.MenuDashboard__menuListItem.-toUser .MenuDashboard__menuList.-layer2 > .MenuDashboard__menuListItem > .MenuDashboard__menuListItemLink {
  @include sp {
    &:active {
      background-color: $blue_16pct;
      color: $black;
    }
  };
  @include pc {
    &:hover {
      background-color: $white;
      color: $blue_hsb_b32;
    }
  };
}
// 「コンテンツ関係」のメニューのホバー時の効果
.MenuDashboard__menuListItem.-ofContent .MenuDashboard__menuList.-layer2 > .MenuDashboard__menuListItem > .MenuDashboard__menuListItemLink {
  @include sp {
    &:active {
      background-color: $blue_16pct;
      color: $black;
    }
  };
  @include pc {
    &:hover {
      background-color: $gray_f4;
      color: $blue_hsb_b32;
    }
  };
}
// 「アカウント設定」
.MenuDashboard__menuListItem.-settings {
  @include sp {
  };
  @include pc {
  };
}
// 「アカウント」
.MenuDashboard__menuListItem.-account {
  @include sp {
  };
  @include pc {
  };
}
// 「プロフィール」
.MenuDashboard__menuListItem.-profile {
  @include sp {
  };
  @include pc {
  };
}
// 「つながり」
.MenuDashboard__menuListItem.-settings + .MenuDashboard__menuListItem.-relationships {
  @include sp {
  };
  @include pc {
    margin-top: 90px;
    padding-bottom: 12px;
  };
}
.MenuDashboard__menuListItem.-relationships {
  @include sp {
  };
  @include pc {
    padding-bottom: 12px;
  };
}
// 「フォロー」
.MenuDashboard__menuListItem.-following {
  @include sp {
  };
  @include pc {
  };
}
// 「フォロワー」
.MenuDashboard__menuListItem.-followers {
  @include sp {
  };
  @include pc {
  };
}
// 「マイアイテム」
.MenuDashboard__menuListItem.-relationships + .MenuDashboard__menuListItem.-items {
  @include sp {
  };
  @include pc {
    padding-bottom: 12px;
    padding-top: 12px;
  };
}
.MenuDashboard__menuListItem.-items {
  @include sp {
  };
  @include pc {
  };
}
// 「自分の質問」
.MenuDashboard__menuListItem.-questions {
  @include sp {
  };
  @include pc {
  };
}
// 「コメントした記事」
.MenuDashboard__menuListItem.-comments {
  @include sp {
  };
  @include pc {
  };
}
// 「閲覧チケット」
.MenuDashboard__menuListItem.-tickets {
  @include sp {
    padding-bottom: 10px;
  };
  @include pc {
    padding-bottom: 10px;
  };
}
// 「いいね！した記事」
.MenuDashboard__menuListItem.-tickets + .MenuDashboard__menuListItem.-liked {
  @include mark;
  @include sp {
    padding-top: 11px;
  };
  @include pc {
    padding-top: 11px;
  };
}
// 「閲覧チケット」と「いいね！した記事」間の横線
.MenuDashboard__menuListItem.-tickets + .MenuDashboard__menuListItem.-liked::before {
  @include sp {
    background-color: $gray_e4;
    height: 1px;
    left: 44px;
    top: 0;
    width: calc(100% - calc(44px + 16px));
  };
  @include pc {
    background-color: rgba($white_rgb, 0.32);
    height: 1px;
    left: 44px;
    top: 0;
    width: calc(100% - calc(44px + 16px));
  };
}
.MenuDashboard__menuListItem.-liked {
  @include sp {
  };
  @include pc {
  };
}
// 「チケットを使用した記事」
.MenuDashboard__menuListItem.-commentsCanBeViewed {
  @include sp {
  };
  @include pc {
  };
}
// 「記事の閲覧履歴」
.MenuDashboard__menuListItem.-browsingHistory {
  @include sp {
  };
  @include pc {
  };
}
// 「インフォメーション」
.MenuDashboard__menuListItem.-items + .MenuDashboard__menuListItem.-informations {
  @include sp {
  };
  @include pc {
    padding-bottom: 32px;
    padding-top: 12px;
  };
}
.MenuDashboard__menuListItem.-informations {
  @include sp {
  };
  @include pc {
  };
}
// 「通知」
.MenuDashboard__menuListItem.-notifications {
  @include sp {
  };
  @include pc {
  };
}
// 「お知らせ」
.MenuDashboard__menuListItem.-news {
  @include sp {
  };
  @include pc {
  };
}
// 「ログアウト」
.MenuDashboard__menuListItem.-items + .MenuDashboard__menuListItem.-certification {
  @include sp {
  };
  @include pc {
  };
}
.MenuDashboard__menuListItem.-certification {
  @include sp {
    border-bottom: 1px solid $gray_e4;
  };
  @include pc {
    border-bottom: 1px solid rgba($white_rgb, 0.4);
    border-top: 1px solid rgba($white_rgb, 0.4);
  };
}
.MenuDashboard__menuListItem.-certification > .MenuDashboard__menuListItemTitle {
  @include sp {
  };
  @include pc {
    padding-bottom: 16px !important;
    padding-top: 16px !important;
  };
}
</style>
