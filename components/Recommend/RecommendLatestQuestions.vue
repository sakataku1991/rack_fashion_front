<template>
  <section class="LatestQuestions">
    <div class="contentBoxM">
      <div class="LatestQuestions__content">
        <h2 class="LatestQuestions__title title-section -center">
          最近投稿された質問
        </h2>
        <div class="LatestQuestions__article">
          <ul class="LatestQuestions__articleList">
            <li
              v-for="(question, i) in recentQuestions.slice(0, 4)"
              :key="`card-question-${i}`"
              class="LatestQuestions__articleListItem"
            >
              <card-question
                :question="question"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsRecommendLatestQuestions',
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
.LatestQuestions {
  @include sp {
    padding: 32px 0 80px;
  };
  @include pc {
    padding: 32px 0 56px;
  };
}
.LatestQuestions__content {
  @include sp {
  };
  @include pc {
  };
}
.LatestQuestions__title {
  @include sp {
  };
  @include pc {
  };
}
.LatestQuestions__title +
.LatestQuestions__article {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.LatestQuestions__article {
  @include sp {
  };
  @include pc {
  };
}
.LatestQuestions__articleList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 32px 16px;
  };
  @include pc {
    gap: 56px 32px;
  };
}
.LatestQuestions__articleListItem {
  @include sp {
    width: flexBox(2, 16px);
  };
  @include pc {
    flex: 1;
    max-width: calc(146px * 2);
    min-width: 146px;
    width: 100%;
  };
}
</style>
