<template>
  <div class="form-search-container">
    <form
      id="formSearch"
      action="/search"
      method="post"
      class="form form-search"
    >
      <div class="form-section -input">
        <dl class="form-list -layer1">
          <div class="form-list-item -keyword">
            <dt class="form-list-item-title visuallyHidden">
              <label
                for="yourKeyword"
                class="form-list-item-title-label"
              >
                <span class="form-list-item-title-label-text">キーワード検索</span>
              </label>
            </dt>
            <dd class="form-list-item-data">
              <input
                id="yourKeyword"
                v-focus
                type="text"
                name="yourKeyword"
                spellcheck="false"
                autocomplete="off"
                placeholder="キーワードで質問を検索"
                class="form-list-item-data-content -text"
              >
            </dd>
          </div>
        </dl>
      </div>
      <div class="form-section -submit">
        <div class="form-btn -formSearch">
          <button-search-form />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormSearch',
  // カスタムディレクティブ
  // 「キーワード検索」のinputにオートフォーカスさせる
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// フォーム全体
.form-search-container {
  @include sp {
    background-color: $gray_f8;
    margin: 0 -5vw;
    padding: 24px 5vw 4px;
  };
  @include pc {
  };
}
// フォームの内容
.form-search {
  position: relative;
  @include sp {
  };
  @include pc {
  };
}
.form-section {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list.-layer1 {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list.-layer1 .form-list-item {
  @include sp {
  };
  @include pc {
  };
}
.form-section.-input .form-list.-layer1 > .form-list-item + .form-list-item  {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title-label {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title-label-text {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title-label-text.-note {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-title + .form-list-item-data {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data-content {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data-label {
  @include sp {
  };
  @include pc {
  };
}
// 入力欄（「キーワード検索」）
.form-list-item.-keyword {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item.-keyword .form-list-item-data-content.-text {
  @include sp {
    height: 100%;
    padding: 14px calc(24px + calc(14px * 2)) 14px 14px;
    width: 100%;
  };
  @include pc {
    height: 100%;
    padding: 16px calc(24px + calc(16px * 2)) 16px 16px;
    width: 100%;
  };
}
// 「検索」ボタン
.form-section.-submit {
  position: absolute;
  @include sp {
    right: 14px;
    top: calc(50% - calc(24px / 2));
  };
  @include pc {
    right: 16px;
    top: calc(50% - calc(24px / 2));
  };
}
.btn-search {
  @include sp {
    height: 24px;
    width: 24px;
  };
  @include pc {
    height: 24px;
    width: 24px;
  };
}
</style>
