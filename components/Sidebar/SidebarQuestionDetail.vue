<template>
  <section class="SidebarItem SidebarQuestionDetail">
    <div class="SidebarQuestionDetail__detail">
      <div class="SidebarQuestionDetail__detailInfo">
        <dl class="SidebarQuestionDetail__detailInfoDefList">
          <div class="SidebarQuestionDetail__detailInfoDefListItem -gender">
            <dt class="SidebarQuestionDetail__detailInfoDefListItemTitle visuallyHidden">
              性別
            </dt>
            <dd class="SidebarQuestionDetail__detailInfoDefListItemData">
              <data-gender />
            </dd>
          </div>
          <div class="SidebarQuestionDetail__detailInfoDefListItem -category">
            <dt class="SidebarQuestionDetail__detailInfoDefListItemTitle">
              カテゴリー
            </dt>
            <dd class="SidebarQuestionDetail__detailInfoDefListItemData">
              <category />
            </dd>
          </div>
          <div class="SidebarQuestionDetail__detailInfoDefListItem -color">
            <dt class="SidebarQuestionDetail__detailInfoDefListItemTitle">
              カラー
            </dt>
            <dd class="SidebarQuestionDetail__detailInfoDefListItemData">
              <link-color />
            </dd>
          </div>
          <!-- <div class="SidebarQuestionDetail__detailInfoDefListItem -hashtag">
            <dt class="SidebarQuestionDetail__detailInfoDefListItemTitle visuallyHidden">
              ハッシュタグ
            </dt>
            <dd class="SidebarQuestionDetail__detailInfoDefListItemData">
              <div class="hashtag-container">
                <ul class="hashtag-list">
                  <li
                    v-for="(hashtag, i) in hashtags"
                    :key="`hashtag-${i}`"
                    class="hashtag-list-item"
                  >
                    <hashtag />
                  </li>
                </ul>
              </div>
            </dd>
          </div> -->
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsSidebarQuestionDetail',
  data ({ $store }) {
    return {
      hashtags: $store.state.question.current.hashtags
    }
  }
}
</script>

<style lang="scss" scoped>
.SidebarQuestionDetail {
  background-color: $gray_fa;
  @include sp {
    border-radius: 6px;
    padding: 0px 14px 0px 14px;
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    margin-left: calc(calc(24px + 16px) * -1);
    padding: 6px 16px 8px calc(24px + 16px);
  };
}
.SidebarQuestionDetail__user {
  @include sp {
  };
  @include pc {
  };
}
// 質問の補足情報
.SidebarQuestionDetail__detailInfo {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionDetail__detailInfoDefList {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionDetail__detailInfoDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionDetail__detailInfoDefListItem + .SidebarQuestionDetail__detailInfoDefListItem {
  @include sp {
    border-top: 1px solid $gray_e4;
    padding: 8px 0 6px;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
    padding: 10px 0 6px;
  };
}
.SidebarQuestionDetail__detailInfoDefListItem:first-of-type,
.SidebarQuestionDetail__detailInfoDefListItem:last-of-type {
  @include sp {
    padding: 10px 0 10px;
  };
  @include pc {
    padding: 12px 0 12px;
  };
}
.SidebarQuestionDetail__detailInfoDefListItemTitle {
  font-weight: bold;
  @include sp {
    font-size: 1.2rem;
    line-height: 1;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1;
  };
}
.SidebarQuestionDetail__detailInfoDefListItemData {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
// 性別
.SidebarQuestionDetail__detailInfoDefListItem.-gender {
  @include sp {
  };
  @include pc {
  };
}
.data-gender {
  @include sp {
    font-size: 1.4rem;
    line-height: 1;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1;
  };
}
// カテゴリー
.SidebarQuestionDetail__detailInfoDefListItem.-category {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionDetail__detailInfoDefListItem.-category {
  .SidebarQuestionDetail__detailInfoDefListItemTitle + .SidebarQuestionDetail__detailInfoDefListItemData {
  @include sp {
      margin-top: 2px;
    };
    @include pc {
      margin-top: 2px;
    };
  }
}
::v-deep .SidebarQuestionDetail__detailInfoDefListItemData .category .category-text {
  color: $gray_5;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
  };
}
// ホバー時の効果
::v-deep .SidebarQuestionDetail__detailInfoDefListItemData .category .category-text {
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
// 色
.SidebarQuestionDetail__detailInfoDefListItem.-color {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionDetail__detailInfoDefListItem.-color {
  .SidebarQuestionDetail__detailInfoDefListItemTitle + .SidebarQuestionDetail__detailInfoDefListItemData {
  @include sp {
      margin-top: 4px;
    };
    @include pc {
      margin-top: 4px;
    };
  }
}
.SidebarQuestionDetail__detailInfoDefListItemData .link-color {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionDetail__detailInfoDefListItemData {
  ::v-deep .link-color .color-guide-text {
    color: $black;
    @include sp {
      font-size: 1.4rem;
      line-height: 1.5;
      padding-left: 3px;
    };
    @include pc {
      font-size: 1.4rem;
      line-height: 1.5;
      padding-left: 3px;
    };
  }
}
// ホバー時の効果
.SidebarQuestionDetail__detailInfoDefListItemData .link-color {
  @include sp {
    &:active {
      ::v-deep .color-guide::before {
        filter: brightness(110%);
      }
    }
  };
  @include pc {
    &:hover {
      ::v-deep .color-guide::before {
        filter: brightness(110%);
      }
    }
  };
}
.SidebarQuestionDetail__detailInfoDefListItemData .link-color {
  @include sp {
    &:active {
      ::v-deep .color-guide-text {
        color: $blue;
      }
    }
  };
  @include pc {
    &:hover {
      ::v-deep .color-guide-text {
        color: $blue;
      }
    }
  };
}
// ハッシュタグ
.SidebarQuestionDetail__detailInfoDefListItem.-hashtag {
  @include sp {
  };
  @include pc {
  };
}
.hashtag-container {
  @include sp {
  };
  @include pc {
  };
}
.hashtag-list {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 8px 8px;
  };
  @include pc {
    gap: 8px 8px;
  };
}
.hashtag-list-item {
  display: inline-block;
  @include sp {
  };
  @include pc {
  };
}
</style>
