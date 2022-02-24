<template>
  <nav id="Result" class="Result">
    <div class="Result__content">
      <div class="Result__search">
        <div class="Result__searchInfo">
          <dl class="Result__searchInfoDefList">
            <div class="Result__searchInfoDefListItem">
              <dt class="Result__searchInfoDefListItemTitle">
                検索ワード：
              </dt>
              <dd class="Result__searchInfoDefListItemData">
                <p class="Result__searchInfoDefListItemDataName">
                  シャツ
                </p>
                <p class="Result__searchInfoDefListItemDataCount">
                  <span class="Result__searchInfoDefListItemDataCountNumber">12</span>
                  <span class="Result__searchInfoDefListItemDataCountUnit">件</span>
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <div class="Result__tabFilter">
          <tab-gender />
        </div>
        <div class="Result__tabSort">
          <tab-sort />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ComponentsResultSearch'
}
</script>

<style lang="scss" scoped>
// 結果画面全体
.Result {
  @include sp {
  };
  @include pc {
  };
}
.Result__content {
  background-color: $gray_f8;
  @include sp {
    box-shadow: 0px 2px 4px rgba($black_rgb, .08);
    margin: 0 -5vw;
    padding: 0 5vw;
  };
  @include pc {
    border-radius: 10px;
  };
}
// 検索結果
.Result__search {
  @include sp {
  };
  @include pc {
  };
}
// 検索条件＆表示件数
.Result__searchInfo {
  @include sp {
    padding: 16px 0 12px;
  };
  @include pc {
    padding: 14px 12px 8px;
  };
}
.Result__searchInfoDefList {
  @include sp {
  };
  @include pc {
  };
}
.Result__searchInfoDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.Result__searchInfoDefListItemTitle {
  color: $gray_5;
  font-weight: normal;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
  };
}
.Result__searchInfoDefListItemTitle + .Result__searchInfoDefListItemData {
  @include sp {
    margin-top: 2px;
  };
  @include pc {
    margin-top: 2px;
  };
}
.Result__searchInfoDefListItemData {
  align-items: center;
  display: flex;
  justify-content: space-between;
  @include sp {
  };
  @include pc {
  };
}
.Result__searchInfoDefListItemDataName {
  font-weight: bold;
  @include sp {
    font-size: 1.8rem;
    line-height: 1.4;
    width: calc(100% - calc(64px + 8px));
  };
  @include pc {
    font-size: 1.8rem;
    line-height: 1.4;
    width: calc(100% - calc(64px + 12px));
  };
}
.Result__searchInfoDefListItemDataName + .Result__searchInfoDefListItemDataCount {
  @include sp {
    margin-left: 8px;
  };
  @include pc {
    margin-left: 12px;
  };
}
.Result__searchInfoDefListItemDataCount {
  text-align: right;
  @include sp {
    font-size: 0;
    width: 64px;
  };
  @include pc {
    font-size: 0;
    width: 64px;
  };
}
.Result__searchInfoDefListItemDataCountNumber {
  font-weight: bold;
  @include sp {
    font-size: 1.8rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.8rem;
    line-height: 1.4;
  };
}
.Result__searchInfoDefListItemDataCountNumber + .Result__searchInfoDefListItemDataCountUnit {
  @include sp {
    margin-left: 2px;
  };
  @include pc {
    margin-left: 2px;
  };
}
.Result__searchInfoDefListItemDataCountUnit {
  @include sp {
    font-size: 1.0rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.4;
  };
}
// 検索結果の絞り込み（タブ）
.Result__searchInfo + .Result__tabFilter {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.Result__tabFilter {
  @include sp {
    padding: 6px 0 6px;
  };
  @include pc {
    padding: 6px 12px 6px;
  };
}
::v-deep .Tab__genderList {
  @include sp {
  };
  @include pc {
    margin-left: auto;
  };
}
// 検索結果の並び替え（ソート）
.Result__tabFilter + .Result__tabSort {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.Result__tabSort {
  @include sp {
    padding: 6px 0 6px;
  };
  @include pc {
    padding: 6px 12px 6px;
  };
}
::v-deep .Tab__sortList {
  @include sp {
  };
  @include pc {
    margin-left: auto;
  };
}
</style>
