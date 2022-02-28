<template>
  <div id="Administrator" class="Administrator">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('administrator') }}</span>
          </span>
        </h1><!-- /ページタイトル -->
      </div>
    </div>
    <div class="Main__contentContainer">
      <!-- 運営者情報 -->
      <section class="section Administrator__info">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="Administrator__infoContent">
              <p class="Administrator__infoLogo">
                <app-logo
                  class="Administrator__infoLogoImg"
                />
              </p>
              <div class="Administrator__infoDef">
                <dl class="Administrator__infoDefList">
                  <div class="Administrator__infoDefListItem">
                    <dt class="Administrator__infoDefListItemTitle">
                      サイト名
                    </dt>
                    <dd class="Administrator__infoDefListItemData">
                      RACK（ラック）
                    </dd>
                  </div>
                  <div class="Administrator__infoDefListItem">
                    <dt class="Administrator__infoDefListItemTitle">
                      サービス内容
                    </dt>
                    <dd class="Administrator__infoDefListItemData">
                      ファッション情報に特化したQ＆Aサイト
                    </dd>
                  </div>
                  <div class="Administrator__infoDefListItem">
                    <dt class="Administrator__infoDefListItemTitle">
                      運営者名
                    </dt>
                    <dd class="Administrator__infoDefListItemData">
                      @sakataku1991
                    </dd>
                  </div>
                  <div class="Administrator__infoDefListItem">
                    <dt class="Administrator__infoDefListItemTitle">
                      運営開始日
                    </dt>
                    <dd class="Administrator__infoDefListItemData">
                      2022年 3月1日
                    </dd>
                  </div>
                  <div class="Administrator__infoDefListItem">
                    <dt class="Administrator__infoDefListItemTitle">
                      連絡先
                    </dt>
                    <dd class="Administrator__infoDefListItemData">
                      sakataku1991@gmail.com
                    </dd>
                  </div>
                  <div class="Administrator__infoDefListItem">
                    <dt class="Administrator__infoDefListItemTitle">
                      SNS
                    </dt>
                    <dd class="Administrator__infoDefListItemData">
                      <a href="https://twitter.com/sakataku1991" target="_blank" rel="noopener noreferrer" class="text-link" ontouchstart="">Twitter</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /運営者情報 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesAdministrator',
  layout: 'fixed-page'
}
</script>

<style lang="scss" scoped>
// 「運営者」
.Administrator {
  @include sp {
  };
  @include pc {
  };
}
// 運営者情報
.Administrator__info {
  @include sp {
  };
  @include pc {
  };
}
.Administrator__infoContent {
  @include sp {
  };
  @include pc {
  };
}
// RACKのロゴ
.Administrator__infoLogo {
  @include sp {
  };
  @include pc {
  };
}
.Administrator__infoLogoImg {
  @include sp {
    height: auto;
    margin: 0 auto !important;
    width: 56%;
  };
  @include pc {
    height: 60px;
    margin: 0 auto !important;
    width: 300px;
  };
}
// 運営者情報のリスト
.Administrator__infoLogo + .Administrator__infoDef {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 48px;
  };
}
.Administrator__infoDef {
  @include sp {
  };
  @include pc {
  };
}
.Administrator__infoDefList {
  @include sp {
    border-top: 1px solid $gray_e4;
    border-bottom: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
    border-bottom: 1px solid $gray_e4;
  };
}
.Administrator__infoDefListItem {
  @include sp {
    padding: 10px 14px 10px;
  };
  @include pc {
    padding: 12px 16px 12px;
  };
}
.Administrator__infoDefListItem + .Administrator__infoDefListItem {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.Administrator__infoDefListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.Administrator__infoDefListItemData {
  @include sp {
  };
  @include pc {
  };
}
</style>
