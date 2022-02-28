<template>
  <div class="Question__post">
    <div class="Question__postContent">
      <div class="Question__postShare -sticky">
        <sticky-user-actions-for-question />
      </div>
      <div class="Question__postBodyAndSidebar">
        <section class="Question__postBody">
          <div class="Question__postBodyMain">
            <div class="contentBoxSp">
              <!-- 質問の本文 -->
              <card-question-main-content />
              <!-- TODO ※実際はhideしてしまっているやつを条件分岐でスマホ・PCの出し分けをすること！ -->
              <div class="Question__postBodyMainQuestionInfo hidePc">
                <!-- 質問の補足情報 -->
                <sidebar-question-detail />
                <!-- 質問したユーザー -->
                <sidebar-question-user />
              </div>
            </div>
          </div>
          <div class="Question__postBodyComment">
            <div class="contentBoxSp">
              <div class="Question__postBodyCommentBrowse">
                <p class="Question__postBodyCommentBrowseResult">
                  <icon-base
                    class="icon icon-commentOutline"
                    height="20"
                    icon-name="comment-outline"
                    width="20"
                  >
                    <icon-comment-outline />
                  </icon-base>
                  <span class="Question__postBodyCommentBrowseResultText -count">
                    <span class="Question__postBodyCommentBrowseResultText -countNumber">3</span>
                    <span class="Question__postBodyCommentBrowseResultText -countUnit">件</span>
                  </span>
                  <span class="Question__postBodyCommentBrowseResultText -message">のコメントがあります</span>
                </p>
                <div class="Question__postBodyCommentBrowseMore">
                  <button-browse-comments />
                </div>
              </div>
              <div class="Question__postBodyCommentContent">
                <div class="Question__postBodyPostedComments">
                  <h2 class="Question__postBodyPostedCommentsTitle title-section -center">
                    コメント
                  </h2>
                  <div class="Question__postBodyPostedCommentsContent">
                    <ul class="Question__postBodyPostedCommentsList">
                      <li class="Question__postBodyPostedCommentsListItem">
                        <card-comment />
                      </li>
                      <li class="Question__postBodyPostedCommentsListItem">
                        <card-comment />
                      </li>
                      <li class="Question__postBodyPostedCommentsListItem">
                        <card-comment />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="Question__postBodySendComment">
                  <h2 class="Question__postBodySendCommentTitle title-section -center">
                    コメントを送る
                  </h2>
                  <div class="Question__postBodySendCommentContent">
                    <form-comment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- TODO ※実際は条件分岐で出し分けること！ -->
        <aside id="Sidebar" class="Sidebar Question__postSidebar hideSp">
          <div class="Sidebar__content">
            <div class="Sidebar__questionInfo">
              <!-- 質問の補足情報 -->
              <sidebar-question-detail />
              <!-- 質問したユーザー -->
              <sidebar-question-user />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesQuestion',
  layout: 'question',
  data () {
    return {
      image_src: require('@/assets/image/thum/thum_post-question_dummy.jpg')
    }
  }
  // // アクセスしてほしくないページのアクセス制限
  // validate ({ route }) {
  //   // 「question」ページへのアクセス制限
  //   return route.name !== 'question'
  // }
}
</script>

<style lang="scss" scoped>
.Question__post {
  @include sp {
  };
  @include pc {
  };
}
.Question__postContent {
  position: relative;
  @include sp {
  };
  @include pc {
  };
}
.Question__postShare {
  @include sp {
  };
  @include pc {
  };
}
// SNSシェアボタン（左側の固定表示）
.Question__postShare.-sticky {
  @include sp {
    display: none;
  };
  @include pc {
    height: 100%;
    left: -72px;
    position: absolute;
    top: 0;
  };
}
// 「質問の本文」と「質問のサイドバー」
.Question__postBodyAndSidebar {
  @include sp {
  };
  @include pc {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    z-index: 0;
  };
}
.Question__postBody {
  @include sp {
  };
  @include pc {
    width: calc(100% - calc(264px + 24px));
    z-index: 1;
  };
}
.Question__postBodyMain {
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
.Question__postBodyMainContent {
  @include sp {
  };
  @include pc {
  };
}
// 質問の補足情報（スマホ版限定）
.Question__postBodyMainContent + .Question__postBodyMainQuestionInfo {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
  };
}
.Question__postBodyMainQuestionInfo {
  @include sp {
  };
  @include pc {
  };
}
// コメント
// 「◯件のコメントがあります」＋コメント閲覧ボタン
// 「コメント」（コメントの一覧表示）
// 「コメントを送る」（コメント送信フォーム）
.Question__postBodyMain + .Question__postBodyComment {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    margin-top: 40px;
  };
}
.Question__postBodyComment {
  @include sp {
  };
  @include pc {
  };
}
// 「◯件のコメントがあります」＋コメント閲覧ボタン
.Question__postBodyCommentBrowse {
  @include sp {
  };
  @include pc {
  };
}
// 「◯件のコメントがあります」
.Question__postBodyCommentBrowseResult {
  align-items: center;
  display: flex;
  justify-content: center;
  @include sp {
    font-size: 0;
  };
  @include pc {
    font-size: 0;
  };
}
.Question__postBodyCommentBrowseResultText {
  @include sp {
  };
  @include pc {
  };
}
.icon-commentOutline + .Question__postBodyCommentBrowseResultText.-count {
  @include sp {
    margin-left: 3px;
  };
  @include pc {
    margin-left: 3px;
  };
}
.Question__postBodyCommentBrowseResultText.-count {
  @include sp {
  };
  @include pc {
  };
}
.Question__postBodyCommentBrowseResultText.-countNumber {
  @include sp {
    font-size: 1.8rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.8rem;
    line-height: 1.5;
  };
}
.Question__postBodyCommentBrowseResultText.-countUnit {
  @include sp {
    font-size: 1.8rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.8rem;
    line-height: 1.5;
  };
}
.Question__postBodyCommentBrowseResultText.-message {
  @include sp {
    font-size: 1.8rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.8rem;
    line-height: 1.5;
  };
}
// コメント閲覧ボタン
.Question__postBodyCommentBrowseResult + .Question__postBodyCommentBrowseMore {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.Question__postBodyCommentBrowseMore {
  @include sp {
  };
  @include pc {
  };
}
.btn-browseComments {
  @include sp {
    line-height: 1.5;
    padding: 12px 16px;
    width: 60%;
  };
  @include pc {
    line-height: 1.5;
    max-width: 400px;
    padding: 12px 16px;
    width: 100%;
  };
}
::v-deep .btn-browseComments .btn-text {
  @include sp {
    font-size: 1.4rem;
    letter-spacing: $lsAV75;
  };
  @include pc {
    font-size: 1.6rem;
    letter-spacing: $lsAV75;
  };
}
// 「コメント」（コメントの一覧表示）
// 「コメントを送る」（コメント送信フォーム）
.Question__postBodyCommentBrowse + .Question__postBodyCommentContent {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 40px;
  };
}
.Question__postBodyCommentContent {
  @include sp {
  };
  @include pc {
  };
}
// 「コメント」（コメントの一覧表示）
.Question__postBodyPostedComments {
  background-color: $white;
  @include sp {
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
  };
}
.Question__postBodyPostedCommentsTitle {
  @include sp {
    padding: 12px 12px 12px;
  };
  @include pc {
    padding: 16px 16px 16px;
  };
}
.Question__postBodyPostedCommentsTitle + .Question__postBodyPostedCommentsContent {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.Question__postBodyPostedCommentsContent {
  @include sp {
  };
  @include pc {
  };
}
.Question__postBodyPostedCommentsList {
  @include sp {
  };
  @include pc {
  };
}
.Question__postBodyPostedCommentsListItem {
  @include sp {
  };
  @include pc {
  };
}
.Question__postBodyPostedCommentsListItem + .Question__postBodyPostedCommentsListItem {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
// 「コメントを送る」（コメント送信フォーム）
.Question__postBodyPostedComments + .Question__postBodySendComment {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.Question__postBodySendComment {
  background-color: $white;
  @include sp {
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
  };
}
.Question__postBodySendCommentTitle {
  @include sp {
    padding: 12px 12px 12px;
  };
  @include pc {
    padding: 16px 16px 16px;
  };
}
.Question__postBodySendCommentTitle + .Question__postBodySendCommentContent {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.Question__postBodySendCommentContent {
  @include sp {
  };
  @include pc {
  };
}
// 質問のサイドバー
.Question__postSidebar {
  @include sp {
  };
  @include pc {
    width: 264px;
  };
}
// 質問したユーザー
.SidebarQuestionDetail + .SidebarQuestionUser {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.SidebarQuestionUser {
  @include sp {
    background-color: $gray_fa !important;
    box-shadow: none !important;
  };
  @include pc {
  };
}
</style>
