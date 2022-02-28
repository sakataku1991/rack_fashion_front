<template>
  <section class="section Category">
    <div class="Category__content">
      <div class="Category__category">
        <h2 class="Category__categoryTitle title-2">
          アイテムカテゴリー
        </h2>
        <ul class="Category__categoryList">
          <li
            v-for="(category, i) in categories"
            :key="`category-${i}`"
            class="Category__categoryListItem"
          >
            <!-- TODO 子コンポーネントを活用する！ -->
            <nuxt-link
              :to="`/category/${category.slug}`"
              class="Category__categoryListItemLink category category-btn"
              ontouchstart=""
            >
              <span class="category-btn-text category-text data data-category">{{ $t(`categories.${category.name}`) }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesCategory',
  layout: 'category-hashtag',
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
.Category {
  @include sp {
  };
  @include pc {
  };
}
.Category__content {
  @include sp {
  };
  @include pc {
  };
}
// 「カテゴリー」
.Category__category {
  @include sp {
  };
  @include pc {
  };
}
// 見出し
.Category__categoryTitle {
  @include sp {
  };
  @include pc {
  };
}
// 「カテゴリー」の一覧
.Category__categoryTitle + .Category__categoryList {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.Category__categoryList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 20px 16px;
  };
  @include pc {
    gap: 24px 32px;
  };
}
.Category__categoryListItem {
  @include sp {
    width: flexBox(2, 16px);
  };
  @include pc {
    max-width: 128px;
    width: 100%;
  };
}
.Category__categoryListItemLink {
  @include sp {
  };
  @include pc {
  };
}

// TODO 以下のスタイルは後で全消しする！
.category-btn {
  background-color: $white;
  display: block;
  @include sp {
    border: 1px solid $blue_grayBoader;
    border-radius: 4px;
    padding: 8px 10px 8px;
  };
  @include pc {
    border: 1px solid $blue_grayBoader;
    border-radius: 4px;
    padding: 6px 8px 6px;
  };
}
.category-btn-text {
  color: $black;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.4;
  };
}
// ホバー時の効果
.category-btn {
  transition:
    background-color 0.3s ease-out,
    border 0.3s ease-out,
    color 0.3s ease-out,
    filter 0.3s ease-out;
  @include sp {
    &:active {
      transition:
        background-color 0.1s ease-out,
        border 0.1s ease-out,
        color 0.1s ease-out,
        filter 0.1s ease-out;
    }
  };
  @include pc {
    &:hover {
      transition:
        background-color 0.1s ease-out,
        border 0.1s ease-out,
        color 0.1s ease-out,
        filter 0.1s ease-out;
    }
  };
}
.category-btn {
  @include sp {
    &:active {
      background-color: $blue_12pct;
      border: 1px solid $blue;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_12pct;
      border: 1px solid $blue;
    }
  };
}
.category-btn {
  .category-btn-text {
    transition:
      color 0.3s ease-out;
  }
  @include sp {
    &:active {
      .category-btn-text {
        transition:
          color 0.1s ease-out;
      }
    }
  };
  @include pc {
    &:hover {
      .category-btn-text {
        transition:
          color 0.1s ease-out;
      }
    }
  };
}
.category-btn {
  .category-btn-text {
  }
  @include sp {
    &:active {
      .category-btn-text {
        color: $blue;
      }
    }
  };
  @include pc {
    &:hover {
      .category-btn-text {
        color: $blue;
      }
    }
  };
}
</style>
