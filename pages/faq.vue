<template>
  <div id="Faq" class="Faq">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('faq') }}</span>
          </span>
        </h1><!-- /ページタイトル -->
      </div>
    </div>
    <div class="Main__contentContainer">
      <!-- 質問の一覧 -->
      <section class="section Faq__answer">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="Faq__answerContent">
              <div class="Faq__answerPublic">
                <ul class="Faq__answerPublicList">
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      RACK（ラック）は何ができるサイトですか？
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        RACKはファッション情報に特化したQ＆Aサイトです。<br>RACKの登録ユーザー同士で、ファッション関係の情報を交換したり共有することができます。詳しくは以下のページをご参照ください。
                      </p>
                      <p class="text">
                        <nuxt-link
                          to="/about"
                          class="text-link"
                          ontouchstart=""
                        >
                          はじめての方へ
                        </nuxt-link>
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      質問するにはどうすればいいですか？
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        まずはRACKへの会員登録をお願いいたします。<br>質問内容の閲覧は当サイトの会員以外の方も可能ですが、質問に付いているコメントの閲覧や、質問やコメントの投稿は、会員の方に限定の機能となっております。
                      </p>
                      <p class="text">
                        <nuxt-link
                          to="/signup"
                          class="text-link"
                          ontouchstart=""
                        >
                          会員登録
                        </nuxt-link>
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      質問にコメントするにはどうすればいいですか？
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        RACKへ会員登録後、サイトにログインをし、コメントを送りたい質問のページを開いてください。「コメントを送る」フォームが表示されますので、そちらにコメントの内容を記入して [投稿] ボタン を押すとコメントを送ることができます。
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      「閲覧チケット」とは何ですか？
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        RACKでは、他のユーザーの質問に寄せられたコメントの閲覧がチケット制となっております。１件の質問につき１枚の「閲覧チケット」を使用することで、はじめてその質問に集まったコメントを見ることができます。
                      </p>
                      <p class="text">
                        閲覧チケットの入手方法は以下の通りです。
                      </p>
                      <ul class="list -normal">
                        <li>
                          質問を投稿したとき（＋4枚）
                        </li>
                        <li>
                          コメントを投稿したとき（＋1枚）<br>※一番乗りでコメントをした場合には特別に2枚の閲覧チケットを進呈
                        </li>
                        <li>
                          自分の質問が解決し、一番参考になったコメントを選出したとき（＋4枚）
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      RACKからの通知をOFFにしたい
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        RACKからの通知をオフにしたい場合は、ユーザーの「アカウント設定」画面の「通知設定」の項目にて通知の設定を変更してください。
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      ログインできない場合はどうすればいいですか？
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        パスワードを忘れてしまった場合は、パスワードのリセットの手続きを行なってください。
                      </p>
                      <p class="text">
                        <nuxt-link
                          to="/change-password"
                          class="text-link"
                          ontouchstart=""
                        >
                          パスワードのリセット
                        </nuxt-link>
                      </p>
                      <p class="text">
                        RACK ID や登録済みのメールアドレスを忘れてしまった場合は、申し訳ございませんが既存の会員は放棄していただき、別の RACK ID とメールアドレスで新たに会員登録をし直していただければと存じます。
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      不具合を見つけた場合はどこに連絡すればいいですか？
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        以下のお問い合わせフォームより、不具合の内容についてご報告いただけますと幸いです。
                      </p>
                      <p class="text">
                        <link-text-tab
                          :linkTextTabContact="linkTextTabContact"
                        />
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      とあるユーザーをブロック（あるいはミュート）したい
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        今後のアップデートにてユーザーのミュート機能の実装を検討しております。進展がございましたらRACKの「お知らせ」などでご連絡いたします。今しばらくお待ちください。
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      荒らし的なユーザーがいて困っている
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        以下のお問い合わせフォームより、対象ユーザーの<br>①ユーザー名<br>②RACK ID<br>③具体的な荒らしの内容<br>以上の3点を必ず記載してください。
                      </p>
                      <p class="text">
                        <link-text-tab
                          :linkTextTabContact="linkTextTabContact"
                        />
                      </p>
                      <p class="text">
                        活動内容を調査したのち、個別に対処させていただきます。
                      </p>
                    </div>
                  </li>
                  <li class="Faq__answerPublicListItem">
                    <h2 class="Faq__answerPublicListItemTitle title-faq">
                      RACKを退会したい
                    </h2>
                    <div class="Faq__answerPublicListItemData">
                      <p class="text">
                        以下の「アカウントを削除」ページより退会の手続きを行なってください。
                      </p>
                      <p class="text">
                        <nuxt-link
                          to="/#"
                          class="text-link"
                          ontouchstart=""
                        >
                          アカウントを削除
                        </nuxt-link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /質問の一覧 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesFaq',
  layout: 'fixed-page',
  data () {
    return {
      linkTextTabContact: {
        href: 'https://forms.gle/w6bRTyA7XhoGzBVM8', text: 'お問い合わせフォーム'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 「よくある質問」
.Faq {
  @include sp {
  };
  @include pc {
  };
}
// 質問の一覧
.Faq__answer {
  @include sp {
  };
  @include pc {
  };
}
.Faq__answerContent {
  @include sp {
  };
  @include pc {
  };
}
.Faq__answerPublic {
  @include sp {
  };
  @include pc {
  };
}
.Faq__answerPublicList {
  @include sp {
  };
  @include pc {
  };
}
.Faq__answerPublicListItem {
  @include sp {
  };
  @include pc {
  };
}
.Faq__answerPublicListItem + .Faq__answerPublicListItem {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 56px;
  };
}
.Faq__answerPublicListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.Faq__answerPublicListItemTitle + .Faq__answerPublicListItemData {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.Faq__answerPublicListItemData {
  @include sp {
  };
  @include pc {
  };
}
</style>
