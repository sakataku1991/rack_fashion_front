<template>
  <section class="MenuItem MenuMyItem">
    <div class="MenuMyItem__myItem">
      <h2 class="MenuMyItem__myItemTitle">
        マイアイテム
      </h2>
      <div class="MenuMyItem__myItemContent">
        <div class="MenuMyItem__myItemInside">
          <ul class="MenuMyItem__myItemList">
            <li class="MenuMyItem__myItemListItem">
              <nuxt-link to="/dashboard/items/questions" class="MenuMyItem__myItemListItemLink" ontouchstart="">
                <icon-base
                  class="MenuMyItem__myItemListItemLinkIcon"
                  height="20"
                  icon-name="edit"
                  width="20"
                >
                  <icon-edit />
                </icon-base>
                <span class="MenuMyItem__myItemListItemLinkText">自分の質問</span>
              </nuxt-link>
            </li>
            <li class="MenuMyItem__myItemListItem">
              <nuxt-link to="/dashboard/items/comments" class="MenuMyItem__myItemListItemLink" ontouchstart="">
                <icon-base
                  class="MenuMyItem__myItemListItemLinkIcon"
                  height="20"
                  icon-name="comment-outline"
                  width="20"
                >
                  <icon-comment-outline />
                </icon-base>
                <span class="MenuMyItem__myItemListItemLinkText">コメントした記事</span>
              </nuxt-link>
            </li>
            <li class="MenuMyItem__myItemListItem">
              <nuxt-link to="/dashboard/items/tickets" class="MenuMyItem__myItemListItemLink" ontouchstart="">
                <icon-base
                  class="MenuMyItem__myItemListItemLinkIcon"
                  height="20"
                  icon-name="confirmation-number"
                  width="20"
                >
                  <icon-confirmation-number />
                </icon-base>
                <span class="MenuMyItem__myItemListItemLinkText">閲覧チケット</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="MenuMyItem__myItemOutside">
          <ul class="MenuMyItem__myItemList">
            <li class="MenuMyItem__myItemListItem">
              <nuxt-link to="/dashboard/items/questions?type=liked" class="MenuMyItem__myItemListItemLink" ontouchstart="">
                <icon-base
                  class="MenuMyItem__myItemListItemLinkIcon"
                  height="20"
                  icon-name="heart-outline"
                  width="20"
                >
                  <icon-heart-outline />
                </icon-base>
                <span class="MenuMyItem__myItemListItemLinkText">いいね！した記事</span>
              </nuxt-link>
            </li>
            <li class="MenuMyItem__myItemListItem">
              <nuxt-link to="/dashboard/items/questions?type=comments_can_be_viewed" class="MenuMyItem__myItemListItemLink" ontouchstart="">
                <icon-base
                  class="MenuMyItem__myItemListItemLinkIcon"
                  height="20"
                  icon-name="check-circle-outline"
                  width="20"
                >
                  <icon-check-circle-outline />
                </icon-base>
                <span class="MenuMyItem__myItemListItemLinkText">チケットを使用した記事</span>
              </nuxt-link>
            </li>
            <li class="MenuMyItem__myItemListItem">
              <nuxt-link to="/dashboard/items/questions?type=browsing_history" class="MenuMyItem__myItemListItemLink" ontouchstart="">
                <icon-base
                  class="MenuMyItem__myItemListItemLinkIcon"
                  height="20"
                  icon-name="history"
                  width="20"
                >
                  <icon-history />
                </icon-base>
                <span class="MenuMyItem__myItemListItemLinkText">記事の閲覧履歴</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsMenuMyItem'
}
</script>

<style lang="scss" scoped>
.MenuMyItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuMyItem__myItem {
  @include sp {
    padding: 12px 0 8px;
  };
  @include pc {
  };
}
.MenuMyItem__myItemTitle {
  font-weight: bold;
  @include sp {
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0 14px;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0 16px;
  };
}
.MenuMyItem__myItemTitle + .MenuMyItem__myItemContent {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.MenuMyItem__myItemContent {
  @include sp {
  };
  @include pc {
  };
}
.MenuMyItem__myItemInside {
  @include sp {
    padding-bottom: 8px;
  };
  @include pc {
    padding-bottom: 8px;
  };
}
.MenuMyItem__myItemInside + .MenuMyItem__myItemOutside {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.MenuMyItem__myItemOutside {
  @include sp {
    padding-top: 8px;
  };
  @include pc {
    padding-top: 8px;
  };
}
.MenuMyItem__myItemList {
  @include sp {
  };
  @include pc {
  };
}
.MenuMyItem__myItemListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuMyItem__myItemListItemLink {
  align-items: center;
  display: flex;
  @include sp {
    padding: 10px 12px;
  };
  @include pc {
    padding: 8px 16px;
  };
}
.MenuMyItem__myItemListItemLinkIcon {
  color: $blue_grayIcon;
  @include sp {
    margin-top: -1px;
  };
  @include pc {
    margin-top: -1px;
  };
}
.MenuMyItem__myItemListItemLinkIcon + .MenuMyItem__myItemListItemLinkText {
  @include sp {
    margin-left: 6px;
  };
  @include pc {
    margin-left: 6px;
  };
}
.MenuMyItem__myItemListItemLinkText {
  color: $gray_5;
  @include sp {
    font-size: 1.4rem;
    letter-spacing: $lsAV25;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    letter-spacing: $lsAV25;
    line-height: 1.5;
  };
}
// ホバー時の効果
.MenuMyItem__myItemListItemLink {
  @include sp {
    transition: 0.3s;
    &:active {
      background-color: $blue_16pct;
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      background-color: $blue_16pct;
      transition: 0.05s;
    }
  };
}
.MenuMyItem__myItemListItemLink {
  @include sp {
    &:active {
      .MenuMyItem__myItemListItemLinkIcon {
        color: $blue;
      };
      .MenuMyItem__myItemListItemLinkText {
        color: $blue;
      };
    }
  };
  @include pc {
    &:hover {
      .MenuMyItem__myItemListItemLinkIcon {
        color: $blue;
      };
      .MenuMyItem__myItemListItemLinkText {
        color: $blue;
      };
    }
  };
}
</style>
