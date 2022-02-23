<template>
  <section class="MenuItem MenuCategory">
    <div class="MenuCategory__category">
      <h2 class="MenuCategory__categoryTitle">
        アイテムカテゴリー
      </h2>
      <ul class="MenuCategory__categoryList">
        <li
          v-for="(category, i) in categories"
          :key="`category-${i}`"
          class="MenuCategory__categoryListItem"
        >
          <nuxt-link
            :to="`/category/${category.slug}`"
            class="MenuCategory__categoryListItemLink"
            ontouchstart=""
          >
            {{ $t(`categories.${category.name}`) }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsMenuCategory',
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
.MenuCategory {
  @include sp {
  };
  @include pc {
  };
}
.MenuCategory__category {
  @include sp {
  };
  @include pc {
  };
}
.MenuCategory__categoryTitle {
  font-weight: bold;
  @include sp {
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0 14px;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0 16px;
  };
}
.MenuCategory__categoryTitle + .MenuCategory__categoryList {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.MenuCategory__categoryList {
  @include sp {
  };
  @include pc {
  };
}
.MenuCategory__categoryListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuCategory__categoryListItemLink {
  color: $gray_5;
  display: block;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
    padding: 6px 28px;
  };
}
// ホバー時の効果
.MenuCategory__categoryListItemLink {
  @include sp {
    transition: 0.3s;
    &:active {
      background-color: $blue_16pct;
      color: $blue;
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      background-color: $blue_16pct;
      color: $blue;
      transition: 0.05s;
    }
  };
}
</style>
