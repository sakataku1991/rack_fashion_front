<template>
  <div class="Question__postBodyMainContent">
    <header class="Question__postBodyMainHeader">
      <figure class="Question__postBodyMainHeaderEyeCatching">
        <img
          :src="image_src"
          alt="「質問」のアイキャッチ画像"
          class="Question__postBodyMainHeaderEyeCatchingImg"
        >
      </figure>
      <p class="Question__postBodyMainHeaderCategory">
        <category />
      </p>
      <h1 class="Question__postBodyMainHeaderTitle">
        <span class="Question__postBodyMainHeaderTitleText">{{ $store.state.question.current.title }}</span>
      </h1>
    </header>
    <div class="Question__postBodyMainHeaderDateAndLike">
      <div class="Question__postBodyMainHeaderDate">
        <p class="Question__postBodyMainHeaderDateItem -postingTime">
          <time itemprop="datePublished" datetime="2022-01-01" class="Question__postBodyMainHeaderDateItemTime">
            <icon-base
              height="16"
              icon-name="schedule"
              width="16"
            >
              <icon-schedule />
            </icon-base>
            <span class="Question__postBodyMainHeaderDateItemTimeText">{{ $my.dateFormat($store.state.question.current.created_at) }}に公開</span>
          </time>
        </p>
        <p class="Question__postBodyMainHeaderDateItem -updateTime">
          <time itemprop="dateModified" datetime="2022-01-01" class="Question__postBodyMainHeaderDateItemTime">
            <icon-base
              height="16"
              icon-name="update"
              width="16"
            >
              <icon-update />
            </icon-base>
            <span class="Question__postBodyMainHeaderDateItemTimeText">{{ $my.dateFormat($store.state.question.current.updated_at) }}に更新</span>
          </time>
        </p>
      </div>
      <div class="Question__postBodyMainHeaderLike">
        <button-like />
      </div>
    </div>
    <div class="Question__postBodyMainTextBox">
      <p class="Question__postBodyMainText">
        {{ $store.state.question.current.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsCardQuestionMainContent',
  data () {
    return {
      image_src: require('@/assets/image/thum/thum_post-question_dummy.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.Question__postBodyMainContent {
  display: flex;
  flex-direction: column;
  @include sp {
  };
  @include pc {
  };
}
// 質問のヘッダー
.Question__postBodyMainHeader {
  text-align: center;
  @include sp {
    order: 1;
  };
  @include pc {
    order: 1;
  };
}
.Question__postBodyMainHeaderEyeCatching {
  @include sp {
  };
  @include pc {
  };
}
.Question__postBodyMainHeaderEyeCatchingImg {
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
.Question__postBodyMainHeaderEyeCatching + .Question__postBodyMainHeaderCategory {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.Question__postBodyMainHeaderCategory {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
// カテゴリー
.Question__postBodyMainHeaderCategory .category {
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
.Question__postBodyMainHeaderCategory .category {
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
// 質問のタイトル
.Question__postBodyMainHeaderCategory + .Question__postBodyMainHeaderTitle {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 4px;
  };
}
.Question__postBodyMainHeaderTitle {
  display: inline-block;
  text-align: left;
  @include sp {
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
  };
  @include pc {
    line-height: 1.4;
    margin-left: auto;
    margin-right: auto;
  };
}
.Question__postBodyMainHeaderTitleText {
  font-weight: bold;
  @include sp {
    font-size: 2.0rem;
  };
  @include pc {
    font-size: 2.4rem;
  };
}
// 質問の時間といいね！
.Question__postBodyMainHeader + .Question__postBodyMainHeaderDateAndLike {
  @include sp {
    margin-top: 14px;
  };
  @include pc {
    margin-top: 40px;
  };
}
.Question__postBodyMainHeaderDateAndLike {
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
.Question__postBodyMainHeaderDate {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 24px;
  };
  @include pc {
    gap: 24px;
  };
}
.Question__postBodyMainHeaderDateItem {
  color: $blue_grayText;
  @include sp {
  };
  @include pc {
  };
}
// 「投稿時間」
.Question__postBodyMainHeaderDateItem.-postingTime {
  @include sp {
  };
  @include pc {
  };
}
// 「更新時間」
.Question__postBodyMainHeaderDateItem.-updateTime {
  @include sp {
  };
  @include pc {
  };
}
.Question__postBodyMainHeaderDateItemTime {
  align-items: center;
  display: flex;
  @include sp {
    gap: 3px;
  };
  @include pc {
    gap: 3px;
  };
}
.Question__postBodyMainHeaderDateItemTimeText {
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
.Question__postBodyMainHeaderDate + .Question__postBodyMainHeaderLike {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
  };
}
.Question__postBodyMainHeaderLike {
  @include sp {
    display: flex;
    justify-content: center;
    width: 100%;
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
::v-deep .btn-like-count {
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
// 質問の本文
.Question__postBodyMainHeaderDateAndLike + .Question__postBodyMainTextBox {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.Question__postBodyMainTextBox {
  @include sp {
    order: 3;
  };
  @include pc {
    order: 2;
  };
}
.Question__postBodyMainText {
  @include sp {
    font-size: 1.6rem;
    line-height: 1.8;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.7;
  };
}
</style>
