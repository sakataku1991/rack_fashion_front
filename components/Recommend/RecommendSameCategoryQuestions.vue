<template>
  <section class="SameCategoryQuestions">
    <div class="contentBoxM">
      <div class="SameCategoryQuestions__content">
        <h2 class="SameCategoryQuestions__title title-section -center">
          同じアイテムカテゴリーの質問
        </h2>
        <div class="SameCategoryQuestions__article">
          <ul class="SameCategoryQuestions__articleList">
            <li
              v-for="n in 4"
              :key="n"
              class="SameCategoryQuestions__articleListItem"
            >
              <card-question />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsRecommendSameCategoryQuestions'
}
</script>

<style lang="scss" scoped>
.SameCategoryQuestions {
  @include sp {
    padding: 32px 0 40px;
  };
  @include pc {
    padding: 32px 0 40px;
  };
}
.SameCategoryQuestions__content {
  @include sp {
  };
  @include pc {
  };
}
.SameCategoryQuestions__title {
  @include sp {
  };
  @include pc {
  };
}
.SameCategoryQuestions__title +
.SameCategoryQuestions__article {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.SameCategoryQuestions__article {
  @include sp {
  };
  @include pc {
  };
}
.SameCategoryQuestions__articleList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 32px 16px;
  };
  @include pc {
    gap: 56px 32px;
  };
}
.SameCategoryQuestions__articleListItem {
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
