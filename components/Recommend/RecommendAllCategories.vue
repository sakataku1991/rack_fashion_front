<template>
  <section class="AllCategories">
    <div class="contentBoxM">
      <div class="AllCategories__content">
        <h2 class="AllCategories__title title-section -center">
          カテゴリーから質問を探す
        </h2>
        <div class="AllCategories__article">
          <ul class="AllCategories__articleList">
            <li
              v-for="(category, i) in categories"
              :key="`category-${i}`"
              class="AllCategories__articleListItem"
            >
              <!-- TODO 子コンポーネントを活用する！ -->
              <nuxt-link
                :to="`/category/${category.slug}`"
                class="category btn -outlined -halfBlue btn-category btn-text"
                ontouchstart=""
              >
                <span class="category-text data data-category">{{ $t(`categories.${category.name}`) }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsRecommendAllCategories',
  data () {
    return {
      dashboardPath: 'question-id-dashboard',
      categories: [
        { name: 'jackets', slug: 'jackets' },
        { name: 'tops', slug: 'tops' },
        { name: 'bottoms', slug: 'bottoms' },
        { name: 'skirts', slug: 'skirts' },
        { name: 'dresses', slug: 'dresses' },
        { name: 'shoes', slug: 'shoes' },
        { name: 'bags', slug: 'bags' },
        { name: 'hats', slug: 'hats' },
        { name: 'accessories', slug: 'accessories' },
        { name: 'goods', slug: 'goods' },
        { name: 'others', slug: 'others' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.AllCategories {
  @include sp {
    padding: 32px 0 40px;
  };
  @include pc {
    padding: 32px 0 40px;
  };
}
.AllCategories__content {
  @include sp {
  };
  @include pc {
  };
}
.AllCategories__title {
  @include sp {
  };
  @include pc {
  };
}
.AllCategories__title +
.AllCategories__article {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 24px;
  };
}
.AllCategories__article {
  @include sp {
  };
  @include pc {
  };
}
.AllCategories__articleList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 20px 16px;
  };
  @include pc {
    gap: 24px 32px;
  };
}
.AllCategories__articleListItem {
  @include sp {
    width: flexBox(2, 16px);
  };
  @include pc {
    max-width: 128px;
    width: 100%;
  };
}
.btn-category {
  text-align: left;
  @include sp {
    padding: 10px 8px 10px;
  };
  @include pc {
    padding: 10px 8px 10px;
  };
}
</style>
