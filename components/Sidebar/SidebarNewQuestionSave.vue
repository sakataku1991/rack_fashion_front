<template>
  <section class="SidebarItem SidebarNewQuestionSave">
    <div class="SidebarNewQuestionSave__save">
      <div class="SidebarNewQuestionSave__saveStatus">
        <p class="SidebarNewQuestionSave__saveStatusPreview">
          <nuxt-link
            to="#"
            target="_blank"
            class="SidebarNewQuestionSave__saveStatusPreviewLink text-link"
            ontouchstart=""
          >
            プレビュー
          </nuxt-link>
        </p>
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
              <select
                id="questionStatus"
                name="questionStatus"
                class="form-list-item-data-content -select"
              >
                <option value="">
                  保存方法を選択
                </option>
                <option value="公開">
                  公開
                </option>
                <option value="下書き保存">
                  下書き保存
                </option>
                <option value="更新する">
                  更新する
                </option>
                <option value="この質問を削除">
                  この質問を削除
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
        <div class="SidebarNewQuestionSave__saveActionBtn">
          <button-form-question-publish />
        </div>
      </div>
    </div>
    <!-- 「公開した質問を見る」ボタン -->
    <button-view-publiced-question
      class="SidebarNewQuestionSave__publicLinkBtn"
    />
  </section>
</template>

<script>
export default {
  name: 'ComponentsSidebarNewQuestionSave'
}
</script>

<style lang="scss" scoped>
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
    top: 8px;
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
</style>
