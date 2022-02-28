<template>
  <form
    id="formQuestion"
    action="/new"
    method="post"
    class="NewQuestion__post form form-question"
  >
    <div class="NewQuestion__postContent">
      <div class="NewQuestion__postBodyAndSidebar">
        <section class="NewQuestion__postBody">
          <div class="NewQuestion__postBodyMain">
            <div class="contentBoxSp">
              <!-- 質問の本文 -->
              <card-new-question-main-content />
              <!-- TODO ※実際は条件分岐で出し分けること！ -->
              <div class="NewQuestion__postBodyMainQuestionInfo hidePc">
                <!-- 質問のメタ情報 -->
                <sidebar-new-question-detail />
                <!-- 質問の保存・公開 -->
                <sidebar-new-question-save />
              </div>
            </div>
          </div>
        </section>
        <!-- TODO ※実際は条件分岐で出し分けること！ -->
        <aside id="Sidebar" class="Sidebar NewQuestion__postSidebar hideSp">
          <div class="Sidebar__content">
            <div class="Sidebar__questionInfo">
              <!-- 質問のメタ情報 -->
              <sidebar-new-question-detail />
              <!-- 質問の保存・公開 -->
              <sidebar-new-question-save />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PagesNew',
  layout: 'new',
  data () {
    return {
      image_src: require('@/assets/image/thum/thum_post-question_dummy.jpg')
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
</style>
