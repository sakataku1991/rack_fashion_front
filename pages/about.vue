<template>
  <div id="About" class="About">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('about') }}</span>
          </span>
        </h1><!-- /ページタイトル -->
      </div>
    </div>
    <div class="Main__contentContainer">
      <!-- このサイトについて -->
      <section class="section About__thisSite">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="About__thisSiteContent">
              <div class="About__thisSiteDescription">
                <h2 class="About__thisSiteDescriptionTitle title-2">
                  Think about FASHION together.
                </h2>
                <div class="About__thisSiteDescriptionText text-box">
                  <p class="text">
                    RACKはファッション情報に特化したQ＆Aサイトです。<br>服の着こなしや流行りのブランドについてなど、ファッションに関して知りたいことを気軽に質問してみましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /このサイトについて -->
      <!-- コンセプト -->
      <section class="section About__concept">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="About__conceptContent">
              <div class="About__conceptDescription">
                <h2 class="About__conceptDescriptionTitle title-2">
                  Concept
                </h2>
                <div class="About__conceptDescriptionText text-box">
                  <p class="text">
                    これまで、ファッションについての情報は一方的に発信されるばかりでした。
                  </p>
                  <p class="text">
                    服を買うだけであれば様々な通販サイトがあります。<br class="hideSp">SNSでは多くの人々が自分のコーディネート写真を投稿しています。
                  </p>
                  <p class="text">
                    しかし、その大量の情報の中から、私たちはどのように自分に必要な情報を選び取り、ファッションに関する知識を身に付けていけばいいのでしょうか。
                  </p>
                  <p class="text">
                    現在のファッションシーンには洋服について学ぶことのできる場が不足しています。RACKはそういった状況を変えるべく、誰もが自由にファッションの情報を交換し合える場所の創造を目指します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /コンセプト -->
      <!-- RACKの使い方 -->
      <section class="section About__questions">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="About__questionsContent">
              <div class="About__questionsDescription">
                <h2 class="About__questionsDescriptionTitle title-2">
                  Ask these questions
                </h2>
                <ul class="About__questionsDescriptionList">
                  <li class="About__questionsDescriptionListItem">
                    <h3 class="About__questionsDescriptionListItemTitle title-3">
                      おすすめの服を教えてほしい
                    </h3>
                    <p class="About__questionsDescriptionListItemText text">
                      たとえば「濃い色で太めのジーンズを買いたい」など、今あなたが欲しいアイテムのイメージを伝えることで、そのイメージにぴったりな商品をみんなからオススメしてもらいましょう。
                    </p>
                  </li>
                  <li class="About__questionsDescriptionListItem">
                    <h3 class="About__questionsDescriptionListItemTitle title-3">
                      ◯◯◯というブランドについて知りたい
                    </h3>
                    <p class="About__questionsDescriptionListItemText text">
                      気になるブランドがあるけれど、どういったブランドなのか、何が定番品なのかよくわからない...。RACKで質問をすれば、そのブランドについて詳しい人がお得な情報を色々と教えてくれるかも？
                    </p>
                  </li>
                  <li class="About__questionsDescriptionListItem">
                    <h3 class="About__questionsDescriptionListItemTitle title-3">
                      このアイテムの着こなしを一緒に考えてほしい
                    </h3>
                    <p class="About__questionsDescriptionListItemText text">
                      友達と遊ぶときやデートの時など、手持ちの服でどういったコーディネートを組めばいいのか悩むことはありませんか？  大丈夫。RACKのメンバーのみんなが知恵を貸してくれます。
                    </p>
                  </li>
                </ul>
                <p class="About__questionsDescriptionEtc text">
                  etc...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /RACKの使い方 -->
      <!-- 会員登録 -->
      <section class="section About__signup">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="About__signupContent">
              <div class="About__signupDescription">
                <h2 class="About__signupDescriptionTitle title-2">
                  Let's join us!
                </h2>
                <div class="About__signupDescriptionText text-box">
                  <p class="text">
                    RACKに会員登録して質問を投稿してみよう。
                  </p>
                </div>
                <!-- TODO この「会員登録はこちら」ボタンは、ログイン前／ログイン中で表示を条件分岐する！ -->
                <p class="About__signupMoreLinkBtnContainer">
                  <nuxt-link
                    to="/signup"
                    class="About__signupMoreLinkBtn btn -normal -blue btn-more"
                    ontouchstart=""
                  >
                    <span class="btn-text -white">会員登録はこちら</span>
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /会員登録 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesAbout',
  layout: 'fixed-page'
}
</script>

<style lang="scss" scoped>
// 「はじめての方へ」
.About {
  @include sp {
  };
  @include pc {
  };
}
// このサイトについて
.About__thisSite {
  @include sp {
  };
  @include pc {
  };
}
.About__thisSiteContent {
  @include sp {
  };
  @include pc {
  };
}
.About__thisSiteDescription {
  @include sp {
  };
  @include pc {
  };
}
.About__thisSiteDescriptionTitle {
  @include sp {
  };
  @include pc {
  };
}
.About__thisSiteDescriptionText {
  @include sp {
  };
  @include pc {
  };
}
// コンセプト
.About__concept {
  @include sp {
  };
  @include pc {
  };
}
.About__conceptContent {
  @include sp {
  };
  @include pc {
  };
}
.About__conceptDescription {
  @include sp {
  };
  @include pc {
  };
}
.About__conceptDescriptionTitle {
  @include sp {
  };
  @include pc {
  };
}
.About__conceptDescriptionText {
  @include sp {
  };
  @include pc {
  };
}
// RACKの使い方
.About__questions {
  @include sp {
  };
  @include pc {
  };
}
.About__questionsContent {
  @include sp {
  };
  @include pc {
  };
}
.About__questionsDescription {
  @include sp {
  };
  @include pc {
  };
}
.About__questionsDescriptionTitle {
  @include sp {
  };
  @include pc {
  };
}
.About__questionsDescriptionTitle + .About__questionsDescriptionList {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.About__questionsDescriptionList {
  @include sp {
  };
  @include pc {
  };
}
.About__questionsDescriptionListItem {
  @include sp {
  };
  @include pc {
  };
}
.About__questionsDescriptionListItem + .About__questionsDescriptionListItem {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.About__questionsDescriptionListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.About__questionsDescriptionListItemTitle + .About__questionsDescriptionListItemText {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.About__questionsDescriptionListItemText {
  @include sp {
  };
  @include pc {
  };
}
// 「etc...」
.About__questionsDescription + .About__questionsDescriptionEtc {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.About__questionsDescriptionEtc {
  color: $gray_7;
  text-align: right;
  @include sp {
  };
  @include pc {
  };
}
// 会員登録
.About__signup {
  @include sp {
  };
  @include pc {
  };
}
.About__signupContent {
  @include sp {
  };
  @include pc {
  };
}
.About__signupDescription {
  @include sp {
  };
  @include pc {
  };
}
.About__signupDescriptionTitle {
  @include sp {
  };
  @include pc {
  };
}
.About__signupDescriptionText {
  @include sp {
  };
  @include pc {
  };
}
// 「会員登録はこちら」ボタン
.About__signupDescriptionText + .About__signupMoreLinkBtnContainer {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.About__signupMoreLinkBtnContainer {
  @include sp {
  };
  @include pc {
  };
}
.About__signupMoreLinkBtn {
  @include sp {
    padding: 10px 12px;
    width: 64%;
  };
  @include pc {
    margin-left: 0;
    padding: 12px 16px;
    width: 160px;
  };
}
</style>
