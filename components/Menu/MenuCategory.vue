<template>
  <section class="MenuItem MenuCategory">
    <div class="MenuCategory__category">
      <div class="hidePc">
        <dl class="MenuCategory__categoryDefList form-list -layer1">
          <div class="MenuCategory__categoryDefListItem -category form-list-item -questionCategory">
            <dt class="MenuCategory__categoryDefListItemTitle form-list-item-title hideSp">
              <label
                for="questionCategory"
                class="form-list-item-title-label"
              >
                アイテムカテゴリー
              </label>
            </dt>
            <dd class="MenuCategory__categoryDefListItemData form-list-item-data">
              <div class="form-list-item-data-select-wrap">
                <select
                  id="questionCategory"
                  name="questionCategory"
                  class="form-list-item-data-content -select"
                >
                  <option value="">
                    カテゴリーを選択
                  </option>
                  <option value="アウター">
                    アウター
                  </option>
                  <option value="トップス">
                    トップス
                  </option>
                  <option value="パンツ">
                    パンツ
                  </option>
                  <option value="スカート">
                    スカート
                  </option>
                  <option value="ワンピース">
                    ワンピース
                  </option>
                  <option value="靴">
                    靴
                  </option>
                  <option value="バッグ">
                    バッグ
                  </option>
                  <option value="帽子">
                    帽子
                  </option>
                  <option value="アクセサリー">
                    アクセサリー
                  </option>
                  <option value="小物・雑貨">
                    小物・雑貨
                  </option>
                  <option value="その他">
                    その他
                  </option>
                </select>
                <icon-base
                  class="icon icon-arrowInputSelect"
                  height="24"
                  icon-name="arrow-input-select"
                  width="24"
                >
                  <icon-arrow-input-select />
                </icon-base>
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <div class="hideSp">
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
// 【スマホ版限定】・「アイテムカテゴリー」のセレクトボックス
.MenuCategory__categoryDefList {
  @include sp {
  };
  @include pc {
  };
}
.MenuCategory__categoryDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuCategory__categoryDefListItemTitle {
  @include sp {
    font-size: 1.2rem;
    line-height: 1;
  };
  @include pc {
  };
}
.MenuCategory__categoryDefListItemTitle + .MenuCategory__categoryDefListItemData {
  @include sp {
    // margin-top: 4px;
  };
  @include pc {
  };
}
.MenuCategory__categoryDefListItemData {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-questionCategory .form-list-item-data-content.-select {
  background-color: $gray_e6;
  text-align: center;
  @include sp {
    border: 1px solid $gray_e6;
    width: 100%;
  };
  @include pc {
    border: 1px solid $gray_e6;
    width: 100%;
  };
}
.icon-arrowInputSelect {
  color: $gray_7;
  @include sp {
  };
  @include pc {
  };
}
// 【PC版限定】・「アイテムカテゴリー」のメニュー
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
