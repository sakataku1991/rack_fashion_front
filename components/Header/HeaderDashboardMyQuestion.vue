<template>
  <header class="HeaderMyContent">
    <!-- 投稿数のカウント -->
    <div class="HeaderMyContent__count">
      <p class="HeaderMyContent__countPosts">
        {{ number_of_posts }}コの質問
      </p>
    </div>
    <!-- 質問のフィルター -->
    <div class="HeaderMyContent__filter">
      <ul class="HeaderMyContent__filterList">
        <li
          v-for="(filter_type, i) in filter_types"
          :key="`filter_type-${i}`"
          class="HeaderMyContent__filterListItem"
        >
          <button
            type="button"
            :aria-label="filter_type"
            class="btn btn-filterMyContent HeaderMyContent__filterListItemBtn"
            ontouchstart=""
          >
            <span class="btn-text">{{ filter_type }}</span>
            <icon-base
              class="icon icon-lower-triangle"
              height="16"
              icon-name="lower-triangle"
              width="16"
            >
              <icon-lower-triangle />
            </icon-base>
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ComponentsHeaderDashboardMyQuestion',
  data () {
    return {
      number_of_posts: 10,
      filter_types: [
        '公開ステータス',
        '性別',
        'アイテムカテゴリー',
        '色'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// ヘッダー全体
.HeaderMyContent {
  align-items: center;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  @include sp {
    height: 48px;
    padding: 12px 5vw 10px;
  };
  @include pc {
    padding: 14px 16px 12px;
  };
}
// 質問数のカウント
.HeaderMyContent__count {
  white-space: nowrap;
  @include sp {
  };
  @include pc {
  };
}
.HeaderMyContent__countPosts {
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
// 質問のフィルター
.HeaderMyContent__count + .HeaderMyContent__filter {
  @include sp {
    margin-left: 24px;
  };
  @include pc {
  };
}
.HeaderMyContent__filter {
  @include sp {
  };
  @include pc {
  };
}
.HeaderMyContent__filterList {
  display: flex;
  @include sp {
    gap: 18px;
  };
  @include pc {
    gap: 20px;
  };
}
.HeaderMyContent__filterListItem {
  @include sp {
  };
  @include pc {
  };
}
// 「質問のフィルター」ボタン
.btn-filterMyContent {
  align-items: center;
  display: flex;
  @include sp {
    gap: 2px;
  };
  @include pc {
    gap: 2px;
  };
}
.btn-filterMyContent .btn-text {
  white-space: nowrap;
  @include sp {
  };
  @include pc {
  };
}
.btn-filterMyContent .icon-lower-triangle {
  @include sp {
    margin-top: -4px;
  };
  @include pc {
    margin-top: -4px;
  };
}
// ホバー時の効果
.btn-filterMyContent {
  @include sp {
    &:active {
      color: $blue;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
    }
  };
}
// 「質問のフィルター」ボタン（このコンポーネント専用）
.HeaderMyContent__filterListItemBtn {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.HeaderMyContent__filterListItemBtn .btn-text {
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
</style>
