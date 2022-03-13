<template>
  <section class="SidebarItem SidebarNewQuestionDetail">
    <div class="SidebarNewQuestionDetail__detail">
      <div class="SidebarNewQuestionDetail__detailInfo">
        <dl class="SidebarNewQuestionDetail__detailInfoDefList form-list -layer1">
          <div class="SidebarNewQuestionDetail__detailInfoDefListItem -gender form-list-item -questionGender">
            <dt class="SidebarNewQuestionDetail__detailInfoDefListItemTitle form-list-item-title">
              <label
                for="questionGender"
                class="form-list-item-title-label"
              >
                性別
              </label>
            </dt>
            <dd class="SidebarNewQuestionDetail__detailInfoDefListItemData form-list-item-data">
              <div class="form-list-item-data-content -radio -check">
                <ul class="form-list -layer2">
                  <li class="form-list-item">
                    <label
                      class="form-list-item-data-content-label"
                    >
                      <input
                        type="radio"
                        name="questionGender"
                        value="1"
                      >
                      <span class="form-list-item-data-content-label-text">男性</span>
                    </label>
                  </li>
                  <li class="form-list-item">
                    <label
                      class="form-list-item-data-content-label"
                    >
                      <input
                        type="radio"
                        name="questionGender"
                        value="2"
                      >
                      <span class="form-list-item-data-content-label-text">女性</span>
                    </label>
                  </li>
                  <li class="form-list-item">
                    <label
                      class="form-list-item-data-content-label"
                    >
                      <input
                        type="radio"
                        name="questionGender"
                        value="9"
                      >
                      <span class="form-list-item-data-content-label-text">その他</span>
                    </label>
                  </li>
                </ul>
              </div>
            </dd>
          </div>
          <div class="SidebarNewQuestionDetail__detailInfoDefListItem -color form-list-item -questionColor">
            <dt class="SidebarNewQuestionDetail__detailInfoDefListItemTitle form-list-item-title">
              <label
                for="questionColor"
                class="form-list-item-title-label"
              >
                カラー
              </label>
            </dt>
            <dd class="SidebarNewQuestionDetail__detailInfoDefListItemData form-list-item-data">
              <div class="form-list-item-data-select-wrap">
                <form-input-question-category
                  :color_id.sync="params.question.color_id"
                />
                <select
                  id="questionColor"
                  name="questionColor"
                  class="form-list-item-data-content -select"
                >
                  <option disabled value="">
                    色を選択
                  </option>
                  <option value="ホワイト">
                    ホワイト
                  </option>
                  <option value="ブラック">
                    ブラック
                  </option>
                  <option value="グレー">
                    グレー
                  </option>
                  <option value="ブラウン">
                    ブラウン
                  </option>
                  <option value="ベージュ">
                    ベージュ
                  </option>
                  <option value="グリーン">
                    グリーン
                  </option>
                  <option value="ブルー">
                    ブルー
                  </option>
                  <option value="パープル">
                    パープル
                  </option>
                  <option value="イエロー">
                    イエロー
                  </option>
                  <option value="ピンク">
                    ピンク
                  </option>
                  <option value="レッド">
                    レッド
                  </option>
                  <option value="オレンジ">
                    オレンジ
                  </option>
                  <option value="シルバー">
                    シルバー
                  </option>
                  <option value="ゴールド">
                    ゴールド
                  </option>
                  <option value="その他">
                    その他
                  </option>
                </select>
                <icon-base
                  class="icon icon-arrowInputSelect"
                  height="24"
                  icon-name="arrow-input-select"
                  width="24"
                >
                  <icon-arrow-input-select />
                </icon-base>
              </div>
            </dd>
          </div>
          <div class="SidebarNewQuestionDetail__detailInfoDefListItem -hashtag form-list-item -questionHashtag">
            <dt class="SidebarNewQuestionDetail__detailInfoDefListItemTitle form-list-item-title">
              <label
                for="questionHashtag"
                class="form-list-item-title-label"
              >
                ハッシュタグ
              </label>
            </dt>
            <dd class="SidebarNewQuestionDetail__detailInfoDefListItemData form-list-item-data">
              <input
                id="questionHashtag"
                name="questionHashtag"
                spellcheck="false"
                autocomplete="off"
                placeholder="タグ入力後、改行で追加"
                class="SidebarNewQuestionDetail__detailInfoDefListItemDataHashtag form-list-item-data-content -text"
              >
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsSidebarNewQuestionDetail'
}
</script>

<style lang="scss" scoped>
.SidebarNewQuestionDetail {
  background-color: $gray_fa;
  @include sp {
    border-radius: 6px;
    padding: 0px 14px 0px 14px;
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    margin-left: calc(calc(24px + 16px) * -1);
    padding: 4px 16px 8px calc(24px + 16px);
  };
}
.SidebarNewQuestionDetail__user {
  @include sp {
  };
  @include pc {
  };
}
// 質問の補足情報
.SidebarNewQuestionDetail__detailInfo {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionDetail__detailInfoDefList {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem:first-of-type {
  @include sp {
    padding: 14px 0 10px;
  };
  @include pc {
    padding: 12px 0 12px;
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem + .SidebarNewQuestionDetail__detailInfoDefListItem {
  @include sp {
    border-top: 1px solid $gray_e4;
    padding: 10px 0 16px;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
    padding: 10px 0 12px;
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem:last-of-type {
  @include sp {
    padding: 10px 0 10px;
  };
  @include pc {
    padding: 12px 0 12px;
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItemTitle {
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
.SidebarNewQuestionDetail__detailInfoDefListItemData {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
// 性別
.SidebarNewQuestionDetail__detailInfoDefListItem.-gender {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem.-gender .SidebarNewQuestionDetail__detailInfoDefListItemTitle + .SidebarNewQuestionDetail__detailInfoDefListItemData {
  @include sp {
    margin-top: 7px;
  };
  @include pc {
    margin-top: 6px;
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
.form-list-item.-questionGender .form-list.-layer2 {
  display: flex;
  @include sp {
    gap: 32px;
  };
  @include pc {
    gap: 24px;
  };
}
// カテゴリー
.SidebarNewQuestionDetail__detailInfoDefListItem.-category {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem.-category {
  .SidebarNewQuestionDetail__detailInfoDefListItemTitle + .SidebarNewQuestionDetail__detailInfoDefListItemData {
  @include sp {
      margin-top: 4px;
    };
    @include pc {
      margin-top: 4px;
    };
  }
}
.SidebarNewQuestionDetail__detailInfoDefListItemData .category {
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
.SidebarNewQuestionDetail__detailInfoDefListItemData .category {
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
.SidebarNewQuestionDetail__detailInfoDefListItem.-color {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem.-color {
  .SidebarNewQuestionDetail__detailInfoDefListItemTitle + .SidebarNewQuestionDetail__detailInfoDefListItemData {
  @include sp {
      margin-top: 6px;
    };
    @include pc {
      margin-top: 6px;
    };
  }
}
.form-list-item.-questionColor .form-list-item-data-content.-select {
  background-color: $gray_e;
  @include sp {
    border: 1px solid $gray_e;
    width: 100%;
  };
  @include pc {
    border: 1px solid $gray_e;
    width: 100%;
  };
}
.icon-arrowInputSelect {
  color: $gray_7;
  @include sp {
  };
  @include pc {
  };
}
// ハッシュタグ
.SidebarNewQuestionDetail__detailInfoDefListItem.-hashtag {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionDetail__detailInfoDefListItem.-hashtag {
  .SidebarNewQuestionDetail__detailInfoDefListItemTitle + .SidebarNewQuestionDetail__detailInfoDefListItemData {
  @include sp {
      margin-top: 6px;
    };
    @include pc {
      margin-top: 6px;
    };
  }
}
.form-list-item.-questionHashtag .form-list-item-data-content.-text {
  background-color: $gray_e;
  @include sp {
    border: 1px solid $gray_e;
    width: 100%;
  };
  @include pc {
    border: 1px solid $gray_e;
    width: 100%;
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
