<template>
  <div class="NewQuestion__postBodyMainContent">
    <div class="NewQuestion__postBodyMainHeader">
      <label
        tabindex="0"
        class="NewQuestion__postBodyMainHeaderEyeCatching form-list-item-data-label"
      >
        <p class="form-question-picture">
          <img
            :src="image_src"
            alt="「質問」のアイキャッチ画像"
            class="NewQuestion__postBodyMainHeaderEyeCatchingImg form-question-picture-img"
          >
        </p>
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          autocomplete="off"
          tabindex="-1"
          class="form-list-item-data-content -file visuallyHidden"
        >
      </label>
      <div class="NewQuestion__postBodyMainHeaderCategory">
        <div class="form-list-item -questionCategory">
          <div class="form-list-item-data-select-wrap">
            <select
              id="questionCategory"
              name="questionCategory"
              class="form-list-item-data-content -select"
            >
              <option disabled value="">
                アイテムカテゴリーを選択
              </option>
              <option value="アウター">
                アウター
              </option>
              <option value="トップス">
                トップス
              </option>
              <option value="パンツ">
                パンツ
              </option>
              <option value="スカート">
                スカート
              </option>
              <option value="ワンピース">
                ワンピース
              </option>
              <option value="靴">
                靴
              </option>
              <option value="バッグ">
                バッグ
              </option>
              <option value="帽子">
                帽子
              </option>
              <option value="アクセサリー">
                アクセサリー
              </option>
              <option value="小物・雑貨">
                小物・雑貨
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
        </div>
      </div>
      <div class="NewQuestion__postBodyMainHeaderTitle">
        <dl class="form-list -layer1">
          <div class="form-list-item -questionTitle">
            <dt class="form-list-item-title visuallyHidden">
              <label
                for="questionText"
                class="form-list-item-title-label"
              >
                質問のタイトル
              </label>
            </dt>
            <dd class="form-list-item-data">
              <textarea
                id="questionTitle"
                name="questionTitle"
                cols="30"
                rows="1"
                spellcheck="false"
                autocomplete="off"
                required
                placeholder="ここに質問のタイトルを入力"
                class="NewQuestion__postBodyMainHeaderTitleText form-list-item-data-content -text"
              />
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="NewQuestion__postBodyMainHeaderDateAndLike">
      <div class="NewQuestion__postBodyMainHeaderDate">
        <p class="NewQuestion__postBodyMainHeaderDateItem -postingTime">
          <time itemprop="datePublished" datetime="2022-01-01" class="NewQuestion__postBodyMainHeaderDateItemTime">
            <icon-base
              height="16"
              icon-name="schedule"
              width="16"
            >
              <icon-schedule />
            </icon-base>
            <span class="NewQuestion__postBodyMainHeaderDateItemTimeText">2022/01/01に公開</span>
          </time>
        </p>
        <p class="NewQuestion__postBodyMainHeaderDateItem -updateTime">
          <time itemprop="dateModified" datetime="2022-01-01" class="NewQuestion__postBodyMainHeaderDateItemTime">
            <icon-base
              height="16"
              icon-name="update"
              width="16"
            >
              <icon-update />
            </icon-base>
            <span class="NewQuestion__postBodyMainHeaderDateItemTimeText">2022/01/03に更新</span>
          </time>
        </p>
      </div>
      <div class="NewQuestion__postBodyMainHeaderLike">
        <badge-like />
      </div>
    </div>
    <div class="NewQuestion__postBodyMainTextBox">
      <dl class="form-list -layer1">
        <div class="form-list-item -questionText">
          <dt class="form-list-item-title visuallyHidden">
            <label
              for="questionText"
              class="form-list-item-title-label"
            >
              質問の内容
            </label>
          </dt>
          <dd class="form-list-item-data">
            <textarea
              id="questionText"
              name="questionText"
              cols="30"
              rows="3"
              spellcheck="false"
              autocomplete="off"
              required
              placeholder="質問の内容"
              class="NewQuestion__postBodyMainText form-list-item-data-content -textarea"
            />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsCardNewQuestionMainContent',
  data () {
    return {
      image_src: require('@/assets/image/thum/thum_form-question_picture-placeholder.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.NewQuestion__postBodyMainContent {
  display: flex;
  flex-direction: column;
  @include sp {
  };
  @include pc {
  };
}
// 質問のヘッダー
.NewQuestion__postBodyMainHeader {
  text-align: center;
  @include sp {
    order: 1;
  };
  @include pc {
    order: 1;
  };
}
.NewQuestion__postBodyMainHeaderEyeCatching {
  @include sp {
  };
  @include pc {
    cursor: pointer;
  };
}
// ホバー時の効果
.NewQuestion__postBodyMainHeaderEyeCatching {
  @include sp {
    &:active {
      filter: brightness(94%);
    }
  };
  @include pc {
    cursor: pointer;
    &:hover {
      filter: brightness(94%);
    }
  };
}
.NewQuestion__postBodyMainHeaderEyeCatchingImg {
  @include sp {
    border-radius: 6px;
    height: 160px;
    width: 160px;
  };
  @include pc {
    border-radius: 6px;
    height: 160px;
    width: 160px;
  };
}
// 質問のカテゴリー
.NewQuestion__postBodyMainHeaderEyeCatching + .NewQuestion__postBodyMainHeaderCategory {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.NewQuestion__postBodyMainHeaderCategory {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.form-list-item.-questionCategory .form-list-item-data-content.-select {
  background-color: $gray_f4;
  text-align: center;
  @include sp {
    border: 1px solid $gray_f4;
    width: 100%;
  };
  @include pc {
    border: 1px solid $gray_f4;
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
// カテゴリー
.NewQuestion__postBodyMainHeaderCategory .category {
  color: $black_5;
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
.NewQuestion__postBodyMainHeaderCategory .category {
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
// 質問のタイトル
.NewQuestion__postBodyMainHeaderCategory + .NewQuestion__postBodyMainHeaderTitle {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.NewQuestion__postBodyMainHeaderTitle {
  @include sp {
  };
  @include pc {
  };
}
.NewQuestion__postBodyMainHeaderTitle .form-list-item-data {
  @include sp {
    font-size: 0;
  };
  @include pc {
    font-size: 0;
  };
}
.NewQuestion__postBodyMainHeaderTitleText {
  background-color: $white;
  font-weight: bold;
  outline: none;
  resize: none;
  @include sp {
    border: 1px solid $white;
    font-size: 2.0rem;
    height: 100%;
    line-height: 1.4;
    min-height: 1em;
    padding: 0;
    width: 100%;
  };
  @include pc {
    border: 1px solid $white;
    font-size: 2.4rem;
    height: 100%;
    line-height: 1.4;
    min-height: 1em;
    padding: 0;
    width: 100%;
  };
}
// 質問の時間といいね！
.NewQuestion__postBodyMainHeader + .NewQuestion__postBodyMainHeaderDateAndLike {
  @include sp {
    margin-top: 14px;
  };
  @include pc {
    margin-top: 40px;
  };
}
.NewQuestion__postBodyMainHeaderDateAndLike {
  display: flex;
  justify-content: space-between;
  @include sp {
    flex-wrap: wrap;
    justify-content: center;
    order: 2;
  };
  @include pc {
    align-items: center;
    order: 3;
  };
}
// 「投稿時間」＋「更新時間」
.NewQuestion__postBodyMainHeaderDate {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 24px;
  };
  @include pc {
    gap: 24px;
  };
}
.NewQuestion__postBodyMainHeaderDateItem {
  color: $gray_b;
  @include sp {
  };
  @include pc {
  };
}
// 「投稿時間」
.NewQuestion__postBodyMainHeaderDateItem.-postingTime {
  @include sp {
  };
  @include pc {
  };
}
// 「更新時間」
.NewQuestion__postBodyMainHeaderDateItem.-updateTime {
  @include sp {
  };
  @include pc {
  };
}
.NewQuestion__postBodyMainHeaderDateItemTime {
  align-items: center;
  display: flex;
  @include sp {
    gap: 3px;
  };
  @include pc {
    gap: 3px;
  };
}
.NewQuestion__postBodyMainHeaderDateItemTimeText {
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
// 「いいね！」ボタン
.NewQuestion__postBodyMainHeaderDate + .NewQuestion__postBodyMainHeaderLike {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
  };
}
.NewQuestion__postBodyMainHeaderLike {
  @include sp {
    display: flex;
    justify-content: center;
    width: 100%;
  };
  @include pc {
  };
}
::v-deep .badge-like {
  color: $gray_b;
  @include sp {
  };
  @include pc {
  };
}
::v-deep .icon-heartOutline {
  @include sp {
    height: 16px;
    width: 16px;
  };
  @include pc {
    height: 16px;
    width: 16px;
  };
}
::v-deep .badge-like-count {
  color: $gray_b;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
// 質問の本文
.NewQuestion__postBodyMainHeaderDateAndLike + .NewQuestion__postBodyMainTextBox {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.NewQuestion__postBodyMainTextBox {
  @include sp {
    order: 3;
  };
  @include pc {
    order: 2;
  };
}
.NewQuestion__postBodyMainText {
  background-color: $white;
  outline: none;
  resize: none;
  @include sp {
    border: 1px solid $white;
    font-size: 1.6rem;
    line-height: 1.8;
    padding: 0;
  };
  @include pc {
    border: 1px solid $white;
    font-size: 1.6rem;
    line-height: 1.7;
    padding: 0;
  };
}
</style>
