<template>
  <div id="Pager" class="Pager">
    <div class="Pager__content">
      <nuxt-link
        to="#"
        class="Pager__prevButton btn btn-pager-prev"
        ontouchstart=""
      >
        <icon-base
          class="icon icon-arrowPrev"
          height="24"
          icon-name="arrow-prev"
          width="24"
        >
          <icon-arrow-prev />
        </icon-base>
      </nuxt-link>
      <div class="Pager__pageNumber">
        <ol class="Pager__pageNumberList">
          <li class="Pager__pageNumberListItem">
            <nuxt-link
              to="#"
              class="Pager__pageNumberListItemLink"
              ontouchstart=""
            >
              1
            </nuxt-link>
          </li>
          <li class="Pager__pageNumberListItem">
            <p class="Pager__pageNumberListItemExtend">
              <icon-base
                class="icon icon-moreHoriz"
                height="20"
                icon-name="more-horiz"
                width="20"
              >
                <icon-more-horiz />
              </icon-base>
            </p>
          </li>
          <li class="Pager__pageNumberListItem">
            <nuxt-link
              to="#"
              class="Pager__pageNumberListItemLink"
              ontouchstart=""
            >
              3
            </nuxt-link>
          </li>
          <li class="Pager__pageNumberListItem">
            <nuxt-link
              to="#"
              class="Pager__pageNumberListItemLink"
              ontouchstart=""
            >
              4
            </nuxt-link>
          </li>
          <li class="Pager__pageNumberListItem">
            <p class="Pager__pageNumberListItemCurrent">
              5
            </p>
          </li>
          <li class="Pager__pageNumberListItem">
            <nuxt-link
              to="#"
              class="Pager__pageNumberListItemLink"
              ontouchstart=""
            >
              6
            </nuxt-link>
          </li>
          <li class="Pager__pageNumberListItem">
            <nuxt-link
              to="#"
              class="Pager__pageNumberListItemLink"
              ontouchstart=""
            >
              7
            </nuxt-link>
          </li>
          <li class="Pager__pageNumberListItem">
            <p class="Pager__pageNumberListItemExtend">
              <icon-base
                class="icon icon-moreHoriz"
                height="20"
                icon-name="more-horiz"
                width="20"
              >
                <icon-more-horiz />
              </icon-base>
            </p>
          </li>
          <li class="Pager__pageNumberListItem">
            <nuxt-link
              to="#"
              class="Pager__pageNumberListItemLink"
              ontouchstart=""
            >
              10
            </nuxt-link>
          </li>
        </ol>
      </div>
      <nuxt-link to="#" class="Pager__nextButton btn btn-pager-next" ontouchstart="">
        <icon-base
          class="icon icon-arrowNext"
          height="24"
          icon-name="arrow-next"
          width="24"
        >
          <icon-arrow-next />
        </icon-base>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsPager'
}
</script>

<style lang="scss" scoped>
.Pager {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 48px;
  };
}
.Pager__content {
  align-items: center;
  display: flex;
  @include sp {
    background: $white;
    border-bottom: 1px solid $blue_16pct;
    border-top: 1px solid $blue_16pct;
    height: 56px;
    justify-content: space-between;
    margin: 0 -5vw;
    padding: 0 5vw;
    width: auto;
  };
  @include pc {
    justify-content: flex-end;
  };
}
// 「<」ボタン
.Pager__prevButton {
  align-items: center;
  background-color: $blue;
  color: $white;
  display: flex;
  justify-content: center;
  margin-left: 0;  // TODO 後で消す
  margin-right: 0;  // TODO 後で消す
  @include sp {
    border-radius: 4px;
    height: 24px;
    width: 24px;
  };
  @include pc {
    border-radius: 4px;
    height: 38px;
    width: 74px;
  };
}
// ホバー時の効果
.Pager__prevButton {
  @include sp {
    &:active {
      background-color: $blue_12pct;
      color: $blue !important;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_hover;
      color: $white !important;
    }
  };
}
// 「ページ数」ボタン
.Pager__pageNumber {
  @include sp {
  };
  @include pc {
  };
}
.Pager__prevButton + .Pager__pageNumber {
  @include sp {
  };
  @include pc {
    margin-left: 24px;
  };
}
.Pager__pageNumberList {
  align-items: center;
  display: flex;
  @include sp {
    gap: 12px;
  };
  @include pc {
    gap: 4px;
  };
}
.Pager__pageNumberListItem {
  @include sp {
    font-size: 1.6rem;
  };
  @include pc {
    font-size: 1.6rem;
  };
}
// 「ページ数」リンク
.Pager__pageNumberListItemLink {
  color: $blue;
  font-weight: bold;
  @include sp {
  };
  @include pc {
    padding: 0 10px;
  };
}
// ホバー時の効果
.Pager__pageNumberListItemLink {
  @include sp {
    &:active {
      text-decoration: underline !important;
    }
  };
  @include pc {
    &:hover {
      text-decoration: underline !important;
    }
  };
}
// 「…」
.Pager__pageNumberListItemExtend {
  color: $gray_b;
  @include sp {
    display: none;
  };
  @include pc {
    align-items: center;
    display: flex;
    padding: 0 4px;
  };
}
// 「現在のページ」
.Pager__pageNumberListItemCurrent {
  color: $gray_b;
  font-weight: bold;
  @include sp {
  };
  @include pc {
    padding: 0 10px;
  };
}
// 「>」ボタン
.Pager__pageNumber + .Pager__nextButton {
  @include sp {
  };
  @include pc {
    margin-left: 24px;
  };
}
.Pager__nextButton {
  align-items: center;
  background-color: $blue;
  color: $white;
  display: flex;
  justify-content: center;
  margin-right: 0;  // TODO 後で消す
  @include sp {
    border-radius: 4px;
    height: 24px;
    margin-left: 0;  // TODO 後で消す
    width: 24px;
  };
  @include pc {
    border-radius: 4px;
    height: 38px;
    width: 74px;
  };
}
// ホバー時の効果
.Pager__nextButton {
  @include sp {
    &:active {
      background-color: $blue_12pct;
      color: $blue !important;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_hover;
      color: $white !important;
    }
  };
}
</style>
