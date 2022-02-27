<template>
  <nav id="Menu" class="Menu">
    <div class="contentBoxSp">
      <div class="Menu__content">
        <div class="Menu__allQuestion">
          <menu-gender />
          <menu-category />
          <menu-color
            class="hideSp"
          />
          <menu-sort />
        </div>
        <div class="Menu__myQuestion hideSp">
          <menu-my-item />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ComponentsLoggedInAppMenu'
}
</script>

<style lang="scss" scoped>
.Menu {
  @include sp {
  };
  @include pc {
  };
}
.Menu__content {
  background-color: $gray_f8;
  @include sp {
    box-shadow: 0px 2px 4px rgba($black_rgb, .08);
    margin: 0 -5vw;
    padding: 24px 5vw 24px;
  };
  @include pc {
  };
}
.Menu__allQuestion {
  position: relative;
  @include sp {
  };
  @include pc {
    background-color: $gray_f4;
    border-radius: 10px;
    padding: 0px 0 40px;
    z-index: 0;
  };
}
// 「性別」
.MenuGender {
  background-color: $gray_f8 !important;
  @include sp {
  };
  @include pcContentWidth {
  };
  @include pc {
    border-radius: 10px;
    left: 0;
    min-width: calc(220px + 40px + calc(calc(148px * 3) + calc(32px * 2)));
    padding: 10px 24px 10px 260px;
    position: absolute;
    top: 0;
    width: calc(100vw - calc(calc(40px + 220px) + calc(40px + 40px))) !important;
    z-index: -1;
  };
}
// 「アイテムカテゴリー」
.MenuGender + .MenuCategory {
  @include sp {
    margin-top: 18px;
  };
  @include pc {
  };
}
.MenuGender {
  @include sp {
  };
  @include pc {
  };
}
// 「アイテムの色」
.MenuCategory + .MenuColor {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor {
  @include sp {
  };
  @include pc {
  };
}
// 「質問を並び替える」
.MenuColor + .MenuSort {
  @include sp {
    margin-top: 18px;
  };
  @include pc {
  };
}
.MenuSort {
  @include sp {
  };
  @include pc {
  };
}
.Menu__myQuestion {
  background-color: $gray_f4;
  @include sp {
    border-radius: 8px;
  };
  @include pc {
    border-radius: 10px;
    padding: 18px 0 18px;
  };
}
.MenuItem {
  @include sp {
  };
  @include pc {
    background-color: $gray_f4;
  };
}
// 「性別」メニューの被り対策用のスタイル
.MenuItem.MenuGender + .MenuItem {
  @include sp {
  };
  @include pc {
    border-radius: 10px 0 0 0;
    padding-top: 18px;
  };
}
.MenuItem:not(.MenuGender, :last-of-type) {
  @include sp {
  };
  @include pc {
    padding-bottom: 24px;
  };
}
.MenuItem:not(.MenuGender) + .MenuItem {
  @include sp {
  };
  @include pc {
    border-top: 1px solid $gray_e4;
    padding-top: 24px;
  };
}
</style>
