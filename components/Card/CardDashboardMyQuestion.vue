<template>
  <article class="card-question-article">
    <!-- 一括編集用のチェックボックス -->
    <div class="card-question-select">
      <div class="form-list-item-data-content -checkbox -check">
        <ul class="form-list -layer1">
          <li class="form-list-item">
            <label
              class="form-list-item-data-content-label"
            >
              <input
                type="checkbox"
                name="editThis"
                value="1"
              >
              <span class="form-list-item-data-content-label-text"><span class="visuallyHidden">この質問を編集する</span></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <!-- 質問そのものの内容 -->
    <div class="card-question-article-content">
      <div class="card-question-thumbnail">
        <img
          :src="image_src_picture"
          alt="「質問」のサムネイル画像"
          class="card-question-thumbnail-img"
        >
      </div>
      <div class="card-question-info">
        <div class="card-question-title-and-category">
          <h2 class="card-question-title">
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </h2>
          <div class="card-question-category">
            <p class="category-text">
              アイテムカテゴリー
            </p>
          </div>
        </div>
        <div class="card-question-details">
          <div class="card-question-date-and-status">
            <p class="card-question-date">
              <time itemprop="datePublished" datetime="2022-01-01" class="card-question-date-time">2022/01/01・12:34</time>
            </p>
            <div class="card-question-status">
              <data-post-status />
            </div>
          </div>
          <div class="card-question-like">
            <button-like />
          </div>
        </div>
      </div>
    </div>
    <!-- 各種アクションボタン -->
    <div class="card-question-actionButtons">
      <!-- 「質問の操作」ボタン（スマホ版限定） -->
      <button-dashboard-my-question-actions
        class="card-question-actionButtonsActionsBtn hidePc"
      />
      <div class="card-question-actionButtons-edit-and-view">
        <!-- 「編集」ボタン（PC版限定） -->
        <button-dashboard-my-question-edit
          class="card-question-actionButtonsEditBtn hideSp"
        />
        <!-- 「見る」ボタン（PC版限定） -->
        <button-dashboard-my-question-view-publiced-question
          class="card-question-actionButtonsViewPublicedQuestionBtn hideSp"
        />
      </div>
      <!-- 「削除」ボタン（PC版限定） -->
      <button-dashboard-my-question-delete
        class="card-question-actionButtonsDeleteBtn hideSp"
      />
    </div>
    <nuxt-link
      to="/edit"
      class="card-question-link"
      tabindex="-1"
      ontouchstart=""
    />
  </article>
</template>

<script>
export default {
  name: 'ComponentsCardDashboardMyQuestion',
  data () {
    return {
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png'),
      image_src_picture: require('@/assets/image/thum/thum_post-question_dummy.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-question-article {
  background-color: $white;
  display: flex;
  position: relative;
  z-index: 0;
  @include sp {
    padding: 10px 5vw 10px;
  };
  @include pc {
    padding: 12px 16px 12px;
  };
}
// ホバー時の効果
.card-question-article {
  transition:
    background-color 0.3s ease-out;
  @include sp {
    &:active {
      transition:
        background-color 0.1s ease-out;
    }
  };
  @include pc {
    &:hover {
      transition:
        background-color 0.1s ease-out;
    }
  };
}
.card-question-article {
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
.card-question-link {
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
// 一括編集用のチェックボックス
.card-question-select {
  z-index: 2;
  @include sp {
    align-items: center;
    display: flex;
  };
  @include pc {
  };
}
// 質問そのものの内容
.card-question-article-content {
  display: flex;
  @include sp {
    align-items: center;
    margin-left: 12px;
    width:
      calc(
        100% - calc(
          calc(20px + 24px) + calc(12px + 16px)
        )
      );
  };
  @include pc {
    margin-left: 14px;
    width:
      calc(
        100% - calc(
          calc(20px + 60px) + calc(14px + 16px)
        )
      );
  };
}
// サムネイル画像
.card-question-thumbnail {
  @include sp {
  };
  @include pc {
  };
}
.card-question-thumbnail-img {
  @include sp {
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    height: 48px;
    width: 48px;
  };
  @include pc {
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    height: 48px;
    width: 48px;
  };
}
// 「タイトル」＋「カテゴリー」＋「公開日時」＋「公開状況」＋「いいね！」
.card-question-info {
  @include sp {
    margin-left: 10px;
    width:
      calc(
        100% - calc(48px + 10px)
      );
  };
  @include pc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 12px;
    width:
      calc(
        100% - calc(48px + 12px)
      );
  };
}
// 「タイトル」＋「カテゴリー」
.card-question-title-and-category {
  @include sp {
  };
  @include pc {
  };
}
// 「タイトル」
.card-question-title {
  color: $black;
  font-weight: bold;
  @include sp {
    font-size: 1.3rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
  };
}
// 「カテゴリー」
.card-question-title + .card-question-category {
  @include sp {
    margin-top: 6px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.card-question-category {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.card-question-category .category-text {
  color: $black;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
// 「公開日時」＋「公開状況」＋「いいね！」
.card-question-title-and-category + .card-question-details {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 8px;
  };
}
.card-question-details {
  align-items: center;
  display: flex;
  justify-content: space-between;
  @include sp {
  };
  @include pc {
  };
}
// 「公開日時」＋「公開状況」
.card-question-date-and-status {
  align-items: center;
  display: flex;
  @include sp {
    gap: 14px;
  };
  @include pc {
    gap: 16px;
  };
}
// 「公開日時」
.card-question-date {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.card-question-date-time {
  color: $blue_grayText;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
// 「公開状況」
.card-question-status {
  @include sp {
  };
  @include pc {
  };
}
::v-deep .card-question-status .status-type-text {
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
// 「いいね！」
.card-question-info {
  @include sp {
  };
  @include pc {
  };
}
// 各種アクションボタン
.card-question-actionButtons {
  display: flex;
  position: relative;
  z-index: 2;
  @include sp {
    align-items: center;
    margin-left: 16px;
    width: 24px;
  };
  @include pc {
    flex-direction: column;
    justify-content: space-between;
    margin-left: 16px;
    width: 60px;
  };
}
// 「質問の操作」ボタン（スマホ版限定）
.card-question-actionButtonsActionsBtn {
  @include sp {
  };
  @include pc {
  };
}
// 「編集」ボタン＋「見る」ボタン
.card-question-actionButtons-edit-and-view {
  @include sp {
  };
  @include pc {
    display: flex;
    flex-direction: column;
    gap: 8px;
  };
}
// 「編集」ボタン（PC版限定）
.card-question-actionButtonsEditBtn {
  @include sp {
  };
  @include pc {
  };
}
// 「見る」ボタン（PC版限定）
.card-question-actionButtonsViewPublicedQuestionBtn {
  @include sp {
  };
  @include pc {
  };
}
// 「削除」ボタン（PC版限定）
.card-question-actionButtons-edit-and-view + .card-question-actionButtonsDeleteBtn {
  @include sp {
  };
  @include pc {
    margin-bottom: -3px;
    margin-top: 10px;
  };
}
.card-question-actionButtonsDeleteBtn {
  @include sp {
  };
  @include pc {
  };
}
</style>
