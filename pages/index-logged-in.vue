<template>
  <section class="section Question">
    <div class="Question__content">
      <div class="Question__questionArticles">
        <ul class="Question__questionList">
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
  name: 'PagesIndex',
  layout: 'logged-in',
  middleware: ['authentication', 'get-user-list', 'get-question-list'],
  async asyncData ({ $axios }) {
    let users = []
    await $axios.$get('/api/v1/users').then(res => (users = res))
    const userKeys = Object.keys(users[0] || {})
    return { users, userKeys }
  },
  data () {
    return {
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png'),
      image_src_picture: require('@/assets/image/thum/thum_post-question_dummy.jpg'),
      imgHeight: 500,
      menus: [
        { title: 'user', subtitle: 'ユーザーの一覧' },
        { title: 'question', subtitle: '質問の一覧' }
      ]
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
</style>
