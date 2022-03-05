<template>
  <div class="Mypage__questions">
    <!-- マイページのヘッダー -->
    <div class="Mypage__header">
      <div class="contentBoxM">
        <div class="Mypage__headerContent">
          <!-- ヘッダーのユーザー情報 -->
          <div class="Mypage__headerUserInfo">
            <card-mypage-user-info />
          </div>
          <!-- ヘッダーのタブ -->
          <div class="Mypage__headerTab">
            <tab-user-content
              :current-tab="currentTab"
              :tabs="tabs"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- ユーザーのコンテンツ -->
    <section class="section MyContent">
      <div class="contentBoxM">
        <div class="MyContent__content">
          <div class="MyContent__questionArticles">
            <ul class="MyContent__questionList">
              <li
                v-for="n in 12"
                :key="n"
                class="MyContent__questionListItem"
              >
                <card-question />
              </li>
            </ul>
          </div>
          <div class="MyContent__questionArticlesPager">
            <pager />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'PagesRackidItemsQuestions',
  scrollToTop: true,
  // falseを返すページのアクセスを制限する
  validate ({ route }) {
    return route.name !== 'account'
  },
  data () {
    return {
      dashboardPath: 'question-id-dashboard',
      currentTab:
        'tab-0',
      tabs: [
        { name: '投稿した質問', slug: '/questions' },
        { name: 'コメントした質問', slug: '/comments' },
        { name: 'いいね！した質問', slug: '/questions?type=liked' }
      ]
    }
  },
  computed: {
    currentQuestion () {
      return this.$store.state.question.current
    }
  }
}
</script>

<style lang="scss" scoped>
// マイページ全体
.Mypage__questions {
  @include sp {
  };
  @include pc {
  };
}
// マイページのヘッダー
.Mypage__header {
  background-color: $white;
  @include sp {
    box-shadow: 0px 2px 4px rgba($black_rgb, .08);
  };
  @include pc {
    box-shadow: 0px 2px 4px rgba($black_rgb, .06);
  };
}
// ヘッダーのユーザー情報
.Mypage__headerUserInfo {
  @include sp {
  };
  @include pc {
  };
}
// ヘッダーのタブ
.Mypage__headerTab {
  @include sp {
    border-top: 1px solid $gray_e4;
    margin-left: -5vw;
    margin-right: -5vw;
  };
  @include pc {
  };
}
// マイコンテンツ
.MyContent {
  @include sp {
    padding: 32px 0 64px;
  };
  @include pc {
    padding: 40px 0 80px;
  };
}
.MyContent__content {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__questionArticles {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__questionList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 32px 16px;
  };
  @include pc {
    gap: 56px 32px;
  };
}
.MyContent__questionListItem {
  @include sp {
    width: flexBox(2, 16px);
  };
  @include pc {
    flex: 1;
    min-width: 208px;
    width: 100%;
  };
}
.MyContent__questionArticles + .MyContent__questionArticlesPager {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 48px;
  };
}
.MyContent__questionArticlesPager {
  @include sp {
  };
  @include pc {
  };
}
</style>
