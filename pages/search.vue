<template>
  <section class="section Search">
    <div class="Search__content">
      <div class="Search__form">
        <!-- 検索フォーム -->
        <form-search />
      </div>
      <div class="Search__result">
        <!-- 検索結果 -->
        <result-search />
      </div>
      <!-- TODO 以下の質問一覧は後で消す！ -->
      <div class="Question__questionArticles">
        <ul class="Question__questionList">
          <li
            v-for="n in 12"
            :key="n"
            class="Question__questionListItem"
          >
            <card-question />
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
  name: 'PagesSearch',
  layout: 'search'
}
</script>

<style lang="scss" scoped>
.Search {
  @include sp {
  };
  @include pc {
  };
}
.Search__content {
  @include sp {
  };
  @include pc {
  };
}
// 検索フォーム
.Search__form {
  @include sp {
  };
  @include pc {
  };
}
// 検索結果
.Search__form + .Search__result {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.Search__result {
  @include sp {
  };
  @include pc {
  };
}
// TODO 以下の質問一覧のスタイルは後で消す！
.Search__result + .Question__questionArticles {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 48px;
  };
}
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
