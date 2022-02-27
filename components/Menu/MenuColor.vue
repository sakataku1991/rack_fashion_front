<template>
  <section class="MenuItem MenuColor">
    <div class="MenuColor__color">
      <div class="hidePc">
        <dl class="MenuColor__colorDefList form-list -layer1">
          <div class="MenuColor__colorDefListItem -color form-list-item -questionColor">
            <dt class="MenuColor__colorDefListItemTitle form-list-item-title">
              <label
                for="questionColor"
                class="form-list-item-title-label"
              >
                アイテムの色
              </label>
            </dt>
            <dd class="MenuColor__colorDefListItemData form-list-item-data">
              <div class="form-list-item-data-select-wrap">
                <select
                  id="questionColor"
                  name="questionColor"
                  class="form-list-item-data-content -select"
                >
                  <option value="">
                    色を選択
                  </option>
                  <option value="ホワイト">
                    ホワイト
                  </option>
                  <option value="ブラック">
                    ブラック
                  </option>
                  <option value="グレー">
                    グレー
                  </option>
                  <option value="ブラウン">
                    ブラウン
                  </option>
                  <option value="ベージュ">
                    ベージュ
                  </option>
                  <option value="グリーン">
                    グリーン
                  </option>
                  <option value="ブルー">
                    ブルー
                  </option>
                  <option value="パープル">
                    パープル
                  </option>
                  <option value="イエロー">
                    イエロー
                  </option>
                  <option value="ピンク">
                    ピンク
                  </option>
                  <option value="レッド">
                    レッド
                  </option>
                  <option value="オレンジ">
                    オレンジ
                  </option>
                  <option value="シルバー">
                    シルバー
                  </option>
                  <option value="ゴールド">
                    ゴールド
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
        <h2 class="MenuColor__colorTitle">
          アイテムの色
        </h2>
        <ul class="MenuColor__colorList">
          <li
            v-for="(color, i) in colors"
            :key="`color-${i}`"
            class="MenuColor__colorListItem"
          >
            <nuxt-link
              :to="`/color/${color.slug}`"
              class="MenuColor__colorListItemLink"
              ontouchstart=""
            >
              <p
                class="MenuColor__colorListItemLinkText color-guide"
                :class="`color-${color.number}`"
              >
                <span class="MenuColor__colorListItemLinkTextColor color-guide-text">{{ $t(`colors.${color.name}`) }}</span>
              </p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsMenuColor',
  data () {
    return {
      colors: [
        { name: 'white', slug: 'white', number: '1' },
        { name: 'black', slug: 'black', number: '2' },
        { name: 'gray', slug: 'gray', number: '3' },
        { name: 'brown', slug: 'brown', number: '4' },
        { name: 'beige', slug: 'beige', number: '5' },
        { name: 'green', slug: 'green', number: '6' },
        { name: 'blue', slug: 'blue', number: '7' },
        { name: 'purple', slug: 'purple', number: '8' },
        { name: 'yellow', slug: 'yellow', number: '9' },
        { name: 'pink', slug: 'pink', number: '10' },
        { name: 'red', slug: 'red', number: '11' },
        { name: 'orange', slug: 'orange', number: '12' },
        { name: 'silver', slug: 'silver', number: '13' },
        { name: 'gold', slug: 'gold', number: '14' },
        { name: 'others', slug: 'others', number: '15' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.MenuColor {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__color {
  @include sp {
  };
  @include pc {
  };
}
// 【スマホ版限定】・「アイテムの色」のセレクトボックス
.MenuColor__colorDefList {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__colorDefListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__colorDefListItemTitle {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__colorDefListItemTitle + .MenuColor__colorDefListItemData {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__colorDefListItemData {
  @include sp {
  };
  @include pc {
  };
}
// 【PC版限定】・「アイテムの色」のメニュー
.MenuColor__colorTitle {
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
.MenuColor__colorTitle + .MenuColor__colorList {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.MenuColor__colorList {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__colorListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__colorListItemLink {
  display: block;
  @include sp {
  };
  @include pc {
    padding: 7px 28px 7px 22px;
  };
}
.MenuColor__colorListItemLinkText {
  @include sp {
  };
  @include pc {
  };
}
.color-guide {
  align-items: center;
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.color-guide-text {
  @include sp {
  };
  @include pc {
  };
}
.color-guide::before {
  content: "";
  display: block;
  @include sp {
    border-radius: 50%;
    height: 18px;
    width: 18px;
  };
  @include pc {
    border-radius: 50%;
    height: 18px;
    width: 18px;
  };
}
.color-guide.color-1::before {
  background: $color-1;
  @include sp {
    border: 1px solid $gray_d;
  };
  @include pc {
    border: 1px solid $gray_d;
  };
}
.color-guide.color-2::before {
  background: $color-2;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-3::before {
  background: $color-3;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-4::before {
  background: $color-4;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-5::before {
  background: $color-5;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-6::before {
  background: $color-6;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-7::before {
  background: $color-7;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-8::before {
  background: $color-8;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-9::before {
  background: $color-9;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-10::before {
  background: $color-10;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-11::before {
  background: $color-11;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-12::before {
  background: $color-12;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-13::before {
  background: $color-13;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-14::before {
  background: $color-14;
  @include sp {
  };
  @include pc {
  };
}
.color-guide.color-15::before {
  background-color: $white;
  background-image: $color-15;
  @include sp {
  };
  @include pc {
  };
}
.MenuColor__colorListItemLinkTextColor {
  color: $gray_5;
  display: block;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
    padding-left: 5px;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
    padding-left: 5px;
  };
}
// ホバー時の効果
.MenuColor__colorListItemLink {
  @include sp {
    transition: 0.3s;
    &:active {
      background-color: $blue_16pct;
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      background-color: $blue_16pct;
      transition: 0.05s;
    }
  };
}
.MenuColor__colorListItemLink {
  @include sp {
    &:active {
      .MenuColor__colorListItemLinkTextColor {
        color: $blue;
      };
    }
  };
  @include pc {
    &:hover {
      .MenuColor__colorListItemLinkTextColor {
        color: $blue;
      };
    }
  };
}
</style>
