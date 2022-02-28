<template>
  <div class="Dashboard__questions">
    <!-- ダッシュボードのヘッダー -->
    <div class="Dashboard__header">
      <div class="contentBoxM">
        <div class="Dashboard__headerContent">
          <!-- ダッシュボードのユーザー情報 -->
          <div class="Dashboard__headerUserInfo">
            <card-dashboard-user-info />
          </div>
          <!-- ダッシュボードのタブ -->
          <div class="Dashboard__headerTab">
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
      <div class="contentBoxMPc">
        <div class="MyContent__content">
          <div class="MyContent__questionArticles">
            <ul class="MyContent__questionList">
              <li
                v-for="n in 10"
                :key="n"
                class="MyContent__questionListItem"
              >
                <card-information-news />
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
  name: 'PagesDashboardInformationsNews',
  layout: 'dashboard',
  // falseを返すページのアクセスを制限する
  validate ({ route }) {
    return route.name !== 'account'
  },
  data () {
    return {
      dashboardPath: 'question-id-dashboard',
      currentTab:
        'お知らせ',
      tabs: [
        { name: '通知', slug: 'dashboard/informations/notifications' },
        { name: 'お知らせ', slug: 'dashboard/informations/news' }
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
// ダッシュボード全体
.Dashboard__questions {
  @include sp {
  };
  @include pc {
  };
}
// 「ダッシュボードのヘッダー」＋「コンテンツメニュー（タブ切り替え）」
.Dashboard__header {
  background-color: $white;
  @include sp {
    box-shadow: 0px 2px 4px rgba($black_rgb, .08);
  };
  @include pc {
    box-shadow: 0px 2px 4px rgba($black_rgb, .06);
  };
}
// ヘッダーのユーザー情報
.Dashboard__headerUserInfo {
  @include sp {
  };
  @include pc {
  };
}
// ヘッダーのタブ
.Dashboard__headerTab {
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
// 質問のヘッダー（記事数のカウント、ソート機能など）
.MyContent__questionHeader {
  @include sp {
  };
  @include pc {
  };
}
// 質問の一覧
.MyContent__questionHeader + .MyContent__questionList {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.MyContent__questionList {
  @include sp {
  };
  @include pc {
  };
}
.MyContent__questionListItem {
  @include sp {
    width: 100%;
  };
  @include pc {
    width: 100%;
  };
}
.MyContent__questionListItem + .MyContent__questionListItem {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.MyContent__questionArticles + .MyContent__questionArticlesPager {
  @include sp {
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
::v-deep .MyContent__questionArticlesPager .Pager {
  margin-top: 0;
  @include sp {
  };
  @include pc {
  };
}
</style>
