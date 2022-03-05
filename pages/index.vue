<template>
  <section class="section Question">
    <div class="Question__content">
      <div class="Question__questionArticles">
        <ul class="Question__questionList test">
          <li
            v-for="(question, i) in recentQuestions.slice(0, 12)"
            :key="`card-question-${i}`"
            class="Question__questionListItem"
          >
            <card-question
              :question="question"
            />
          </li>
        </ul>
      </div>
      <div class="Question__questionArticlesPager">
        <pager />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // vueファイルに名前をつけている
  name: 'PagesIndex',
  // レイアウトファイル
  layout: 'before-login',
  // ミドルウェア。pagesやlayoutsのレンダリング前に実行されるカスタム関数。
  middleware: ['logged-in-redirect', 'get-user-list', 'get-question-list'],
  // asyncDataメソッド
  // asyncData: ページコンポーネントの初期化前に実行される関数のこと
  // $axios: HTTP通信を行なうJavaScriptライブラリ
  async asyncData ({ $axios }) {
    // 「ユーザー」のデータの配列
    let users = []
    // 「ユーザー」のデータを取得している
    // await: これを付けることで、「$axios」によるデータの取得が完了するまで次の処理を開始するのを待ってくれるようになる。付けないとデータがないまま本来データが必要な次の処理を始める→データがないから何もできない...みたいなことになる。
    await $axios.$get('/api/v1/users').then(res => (users = res))
    // keysメソッドで「ユーザー」オブジェクトのプロパティを配列化
    const userKeys = Object.keys(users[0] || {})
    // 「ユーザー」の情報と「ユーザー」プロパティのデータを返す
    return { users, userKeys }
  },
  // dataメソッド
  // ページ内で使い回す変数を宣言するところ。あらかじめ取得したデータをここで変数化し、ページ内でコードとして使えるようにする。
  data () {
    return {
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png'),
      image_src_picture: require('@/assets/image/thum/thum_post-question_dummy.jpg')
    }
  },
  // computedメソッド
  // ページ内からアクセスする関数を宣言するところ
  // methodsメソッドと違い、computedメソッドの計算結果はキャッシュされる
  computed: {
    // 最近の「質問」（日付データを表示）
    recentQuestions () {
      const copyQuestions = Array.from(this.$store.state.question.list)
      // 日付によるソート
      return copyQuestions.sort((a, b) => {
        if (a.createdAt > b.createdAt) { return -1 }
        if (a.createdAt < b.createdAt) { return 1 }
        return 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Question__questionArticles {
  @include sp {
  };
  @include pc {
  };
}
.Question__questionList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 32px 16px;
  };
  @include pc {
    gap: 56px 32px;
  };
}
.Question__questionListItem {
  @include sp {
    width: flexBox(2, 16px);
  };
  @include pc {
    flex: 1;
    min-width: 208px;
    width: 100%;
  };
}
.Question__questionArticles + .Question__questionArticlesPager {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 48px;
  };
}
.Question__questionArticlesPager {
  @include sp {
  };
  @include pc {
  };
}

// 「質問」カードのスタイル
.card-question-article {
  position: relative;
  z-index: 0;
  @include sp {
  };
  @include pc {
  };
}
.card-question-article-link {
  display: block;
  z-index: 0;
  @include sp {
  };
  @include pc {
  };
}
.card-question-badge {
  position: absolute;
  width: 100%;
  z-index: 1;
  @include sp {
    left: 3px;
    top: 3px;
  };
  @include pc {
    left: 4px;
    top: 4px;
  };
}
.badge-comment-wrapper {
  @include sp {
    max-width: calc(100% - calc(3px + 3px));
  };
  @include pc {
    max-width: calc(100% - calc(4px + 4px));
  };
}
.card-question-thumbnail {
  @include sp {
  };
  @include pc {
  };
}
.card-question-thumbnail-img {
  @include sp {
    aspect-ratio: 3 / 2;
    border-radius: 6px;
    width: 100%;
  };
  @include pc {
    aspect-ratio: 16 / 9;
    border-radius: 6px;
    width: 100%;
  };
}
.card-question-thumbnail + .card-question-article-info {
  @include sp {
    margin-top: 10px;
  };
  @include pc {
    margin-top: 12px;
  };
}
.card-question-article-info {
  @include sp {
  };
  @include pc {
  };
}
.card-question-title {
  color: $black;
  font-weight: bold;
  @include sp {
    font-size: 1.3rem;
    line-height: 1.6;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
  };
}
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
.category-text {
  color: $black;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
  };
}
.card-question-category + .card-question-author-avatar-and-date {
  @include sp {
    margin-top: 6px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.card-question-author-avatar-and-date {
  align-items: center;
  display: flex;
  @include sp {
    gap: 6px;
  };
  @include pc {
    gap: 8px;
  };
}
.card-question-author-avatar {
  @include sp {
  };
  @include pc {
  };
}
.card-question-author-avatar-img {
  @include sp {
    border-radius: 50%;
  };
  @include pc {
    border-radius: 50%;
  };
}
.card-question-date-and-like {
  @include sp {
    width: calc(100% - calc(24px + 8px));
  };
  @include pc {
    width: calc(100% - calc(24px + 8px));
  };
}
.card-question-date-and-like {
  align-items: center;
  display: flex;
  justify-content: space-between;
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.card-question-date {
  @include sp {
    line-height: 1;
    margin-top: -2px;
  };
  @include pc {
    line-height: 1;
    margin-top: -2px;
  };
}
.card-question-date-time {
  color: $gray_9;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
  };
}
.card-question-date + .card-question-like {
  @include sp {
    margin-left: 12px;
  };
  @include pc {
    margin-left: 12px;
  };
}
.card-question-like {
  z-index: 1;
  @include sp {
  };
  @include pc {
  };
}
.btn-like-wrapper {
  @include sp {
    max-width: 52px;
  };
  @include pc {
    max-width: 52px;
  };
}
// ホバー時の効果（テキスト）
.card-question-article-link {
  .card-question-title {
    transition: 0.3s;
  }
  @include sp {
    transition: 0.3s;
    &:active {
      transition: 0.05s;
      .card-question-title {
        color: $blue;
        transition: 0.05s;
      }
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      transition: 0.05s;
      .card-question-title {
        color: $blue;
        transition: 0.05s;
      }
    }
  };
}
// ホバー時の効果（画像）
.card-question-article-link {
  .card-question-thumbnail-img {
    transition: .3s;
  }
  @include sp {
    &:active {
      .card-question-thumbnail-img {
        filter: opacity(64%);
        transition: .1s;
      }
    }
  };
  @include pc {
    &:hover {
      .card-question-thumbnail-img {
        filter: opacity(64%);
        transition: .1s;
      }
    }
  };
}
</style>
