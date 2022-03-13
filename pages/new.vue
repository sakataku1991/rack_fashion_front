<template>
  <v-form
    id="formQuestion"
    ref="form"
    v-model="isValid"
    class="NewQuestion__post form form-question"
    @submit.prevent="question"
  >
    <div class="NewQuestion__postContent">
      <div class="NewQuestion__postBodyAndSidebar">
        <section class="NewQuestion__postBody">
          <div class="NewQuestion__postBodyMain">
            <div class="contentBoxSp">
              <!-- 質問の本文 -->
              <div class="NewQuestion__postBodyMainContent">
                <div class="NewQuestion__postBodyMainHeader">
                  <label
                    tabindex="0"
                    class="NewQuestion__postBodyMainHeaderEyeCatching form-list-item-data-label"
                  >
                    <v-file-input
                      id="questionImage"
                      type="file"
                      accept="image/jpg, image/jpeg, image/gif, image/png"
                      autocomplete="off"
                      tabindex="-1"
                      name="questionImage"
                      placeholder="画像を投稿"
                      class="form-list-item-data-content -file"
                      v-model="params.question.image"
                    />
                    <!-- <form-input-question-image
                      :image.sync="params.question.image"
                    /> -->
                  </label>
                  <div class="NewQuestion__postBodyMainHeaderCategory">
                    <div class="form-list-item -questionCategory">
                      <div class="form-list-item-data-select-wrap">
                        <form-input-question-category
                          :category_id.sync="params.question.category_id"
                        />
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
                            for="questionBody"
                            class="form-list-item-title-label"
                          >
                            質問のタイトル
                          </label>
                        </dt>
                        <dd class="form-list-item-data">
                          <form-input-question-title
                            :title.sync="params.question.title"
                            class="NewQuestion__postBodyMainHeaderTitleText"
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
                    <div class="form-list-item -questionBody">
                      <dt class="form-list-item-title visuallyHidden">
                        <label
                          for="questionBody"
                          class="form-list-item-title-label"
                        >
                          質問の内容
                        </label>
                      </dt>
                      <dd class="form-list-item-data">
                        <form-input-question-body
                          :body.sync="params.question.body"
                          class="NewQuestion__postBodyMainText"
                        />
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- TODO ※実際は条件分岐で出し分けること！ -->
        <aside id="Sidebar" class="Sidebar NewQuestion__postSidebar hideSp">
          <div class="Sidebar__content">
            <div class="Sidebar__questionInfo">
              <!-- 質問のメタ情報 -->
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
                          <form-input-question-sex
                            :sex_id.sync="params.question.sex_id"
                          />
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
                            <form-input-question-color
                              :color_id.sync="params.question.color_id"
                            />
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
                      <!-- TODO のちにハッシュタグ機能を実装！ -->
                      <!-- <div class="SidebarNewQuestionDetail__detailInfoDefListItem -hashtag form-list-item -questionHashtag">
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
                      </div> -->
                    </dl>
                  </div>
                </div>
              </section>
              <!-- 質問の保存・公開 -->
              <section class="SidebarItem SidebarNewQuestionSave">
                <div class="SidebarNewQuestionSave__save">
                  <div class="SidebarNewQuestionSave__saveStatus">
                    <!-- TODO のちにプレビュー機能を実装！ -->
                    <!-- <p class="SidebarNewQuestionSave__saveStatusPreview">
                      <nuxt-link
                        to="#"
                        target="_blank"
                        class="SidebarNewQuestionSave__saveStatusPreviewLink text-link"
                        ontouchstart=""
                      >
                        プレビュー
                      </nuxt-link>
                    </p> -->
                    <div class="SidebarNewQuestionSave__saveStatusDefListItem -status form-list-item -questionStatus">
                      <dt class="SidebarNewQuestionSave__saveStatusDefListItemTitle form-list-item-title">
                        <label
                          for="questionStatus"
                          class="form-list-item-title-label"
                        >
                          質問の公開・保存
                        </label>
                      </dt>
                      <dd class="SidebarNewQuestionSave__saveStatusDefListItemData form-list-item-data">
                        <div class="form-list-item-data-select-wrap">
                          <form-input-question-post-status
                            :post_status_id.sync="params.question.post_status_id"
                          />
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
                  </div>
                  <div class="SidebarNewQuestionSave__saveAction">
                    <div class="SidebarNewQuestionSave__saveActionCurrentStatus">
                      <dl class="SidebarNewQuestionSave__saveActionCurrentStatusList">
                        <div class="SidebarNewQuestionSave__saveActionCurrentStatusListItem">
                          <dt class="SidebarNewQuestionSave__saveActionCurrentStatusListItemTitle">
                            質問の公開状況：
                          </dt>
                          <dd class="SidebarNewQuestionSave__saveActionCurrentStatusListItemData">
                            <data-post-status />
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div class="SidebarNewQuestionSave__saveActionBtn form-btn -formQuestion">
                      <v-btn
                        type="submit"
                        :disabled="!isValid || loading"
                        :loading="loading"
                        value="公開する"
                        ontouchstart=""
                        class="btn -normal -blue btn-formQuestionPublish btn-text"
                      >
                        公開する
                      </v-btn>
                    </div>
                  </div>
                </div>
                <!-- TODO のちに「公開した質問を見る」ボタン機能を実装！ -->
                <!-- 「公開した質問を見る」ボタン -->
                <!-- <button-view-publiced-question
                  class="SidebarNewQuestionSave__publicLinkBtn"
                /> -->
              </section>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'PagesNew',
  layout: 'new',
  // ログインしていないとアクセスできないようにする設定
  middleware: ['authentication'],
  data ({ $store }) {
    return {
      isValid: false,
      loading: false,
      image_src: require('@/assets/image/thum/thum_form-question_picture-placeholder.png'),
      params: {
        question: {
          user_id: this.$store.state.user.current.id,
          image: null,
          category_id: 0,
          title: '質問の投稿テスト',
          body: 'テストですよ〜質問の投稿の！',
          sex_id: 0,
          color_id: 0,
          // hashtag: [],
          post_status_id: 0
        }
      },
      // マイページのリンク
      signedUpNextPath: $store.state.signedUp.temporarySignedUpPath
    }
  },
  methods: {
    // 質問投稿処理
    async question () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
      const formData = new FormData()
      formData.append('question[user_id]', this.$store.state.user.current.id)
      formData.append('question[image]', this.params.question.image)
      formData.append('question[category_id]', this.params.question.category_id)
      formData.append('question[title]', this.params.question.title)
      formData.append('question[body]', this.params.question.body)
      formData.append('question[sex_id]', this.params.question.sex_id)
      formData.append('question[color_id]', this.params.question.color_id)
      formData.append('question[post_status_id]', this.params.question.post_status_id)
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      if (this.isValid) {
        await this.$axios.$post('/api/v1/questions', formData, config)
          // 質問投稿成功時の処理
          .then(response => this.postSuccessful(response))
          // 質問投稿失敗時の処理
          .catch(error => this.postFailure(error))
      }
      this.loading = false
    },
    // 質問投稿成功時の処理
    postSuccessful (response) {
      // 質問投稿後のレスポンス
      this.question(response)
      // フォーム内容をリセット
      this.$refs.form.reset()
      for (const key in this.params.question) {
        this.params.question[key] = ''
      }
      // マイページ（signedUpNextPath）へリダイレクトする
      this.$router.go(this.signedUpNextPath)
      this.$router.go({ path: this.$router.currentRoute.path, force: true })
      this.$router.push(this.signedUpNextPath)
    },
    // 質問投稿失敗時の処理
    postFailure ({ response }) {
      // トースター出力
      if (response && response.status === 422) {
        const msg = '投稿に失敗しました'
        return this.$store.dispatch('getToast', { msg })
      }
      // エラー処理
      return this.$my.apiErrorHandler(response)
    }
  }
}
</script>

<style lang="scss" scoped>
.NewQuestion__post {
  @include sp {
  };
  @include pc {
  };
}
.NewQuestion__postContent {
  position: relative;
  @include sp {
  };
  @include pc {
  };
}
// 「質問の本文」と「質問のサイドバー」
.NewQuestion__postBodyAndSidebar {
  @include sp {
  };
  @include pc {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    z-index: 0;
  };
}
.NewQuestion__postBody {
  @include sp {
  };
  @include pc {
    width: calc(100% - calc(264px + 24px));
    z-index: 1;
  };
}
.NewQuestion__postBodyMain {
  background-color: $white;
  @include sp {
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    padding: 24px 0px 24px;
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    padding: 40px 24px 16px;
  };
}
// 質問の本文
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
// アイキャッチ画像
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
  @include sp {
  };
  @include pc {
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
// 質問の補足情報（スマホ版限定）
.NewQuestion__postBodyMainContent + .NewQuestion__postBodyMainQuestionInfo {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
  };
}
.NewQuestion__postBodyMainQuestionInfo {
  @include sp {
  };
  @include pc {
  };
}
// 質問のサイドバー
.NewQuestion__postSidebar {
  @include sp {
  };
  @include pc {
    width: 264px;
  };
}
.Sidebar__content {
  @include sp {
  };
  @include pc {
    height: 100%;
  };
}
.Sidebar__questionInfo {
  display: flex;
  @include sp {
  };
  @include pc {
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  };
}
// 質問のメタ情報
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
// 質問したユーザー
.SidebarNewQuestionDetail + .SidebarNewQuestionSave {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
  };
}
.SidebarQuestionUser {
  @include sp {
    background-color: $gray_fa;
    box-shadow: none;
  };
  @include pc {
  };
}
// サイドバー「保存」
.SidebarNewQuestionSave {
  background-color: $gray_fa;
  position: relative;
  z-index: 0;
  @include sp {
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
  };
}
.SidebarNewQuestionSave__save {
  @include sp {
  };
  @include pc {
  };
}
// 「質問の公開・保存」＋「プレビュー」
.SidebarNewQuestionSave__saveStatus {
  @include sp {
    padding: 14px 14px 14px 14px;
  };
  @include pc {
    padding: 12px 16px 16px 16px;
  };
}
// 「プレビュー」
.SidebarNewQuestionSave__saveStatusPreview {
  position: absolute;
  z-index: 1;
  @include sp {
    right: 14px;
    top: 10px;
  };
  @include pc {
    right: 16px;
    top: 9px;
  };
}
.SidebarNewQuestionSave__saveStatusPreviewLink {
  font-weight: normal;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
// 「質問の公開・保存」
.SidebarNewQuestionSave__saveStatusDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionSave__saveStatusDefListItem.-status {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionSave__saveStatusDefListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionSave__saveStatusDefListItem.-status .form-list-item-title-label {
  font-weight: bold;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
.SidebarNewQuestionSave__saveStatusDefListItemTitle + .SidebarNewQuestionSave__saveStatusDefListItemData {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.SidebarNewQuestionSave__saveStatusDefListItemData {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionSave__saveStatusDefListItem.-status .form-list-item-data-select-wrap {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionSave__saveStatusDefListItem.-status .form-list-item-data-content.-select {
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
// 「質問の公開状況」＋「公開する」ボタン
.SidebarNewQuestionSave__saveAction {
  background-color: $white;
  z-index: 2;
  @include sp {
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    padding: 14px 14px 14px 14px;
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    padding: 16px 16px 16px 16px;
  };
}
// 「質問の公開状況」
.SidebarNewQuestionSave__saveActionCurrentStatus {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionSave__saveActionCurrentStatusList {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNewQuestionSave__saveActionCurrentStatusListItem {
  align-items: center;
  display: flex;
  @include sp {
    gap: 10px;
  };
  @include pc {
    gap: 10px;
  };
}
.SidebarNewQuestionSave__saveActionCurrentStatusListItemTitle {
  font-weight: normal;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
.SidebarNewQuestionSave__saveActionCurrentStatusListItemData {
  @include sp {
  };
  @include pc {
  };
}
::v-deep .SidebarNewQuestionSave__saveActionCurrentStatusListItemData .status-type-text {
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
// 「公開する」ボタン
.SidebarNewQuestionSave__saveActionCurrentStatus + .SidebarNewQuestionSave__saveActionBtn {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.SidebarNewQuestionSave__saveActionBtn {
  @include sp {
  };
  @include pc {
  };
}
::v-deep .btn-formQuestionPublish {
  @include sp {
    padding: 12px 14px;
    width: 100%;
  };
  @include pc {
    padding: 8px 24px;
    width: 100%;
  };
}
// 「公開した質問を見る」ボタン
.SidebarNewQuestionSave__publicLinkBtn {
  position: absolute;
  @include sp {
    bottom: calc(calc(31px + 24px + 24px) * -1);
    box-shadow: 0px 2px 6px rgba($black_rgb, .08);
    left: 0;
    right: 0;
    padding: 5px 16px 5px;
    width: 64%;
  };
  @include pc {
    bottom: calc(calc(31px + 18px) * -1);
    box-shadow: 0px 2px 6px rgba($black_rgb, .08);
    left: 0;
    right: 0;
    padding: 4px 16px 4px;
    width: 232px;
  };
}
// 「公開する」ボタン
.btn-formQuestionPublish {
  font-weight: bold;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-formQuestionPublish {
  @include sp {
    &:active {
    }
  };
  @include pc {
    &:hover {
    }
  };
}
</style>
