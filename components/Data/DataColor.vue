<template>
  <p class="data data-color color-guide" :class="`color-${$store.state.question.current.color.code}`">
    <span class="color-guide-text">{{ $t(`${$store.state.question.current.color.name}`) }}</span>
  </p>
</template>

<script>
export default {
  name: 'ComponentsDataColor'
}
</script>

<style lang="scss" scoped>
.data {
  @include sp {
  };
  @include pc {
  };
}
.data-color {
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
  display: block;
  @include sp {
    padding-left: 5px;
  };
  @include pc {
    padding-left: 5px;
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
// ホワイト
.color-guide.color-1::before {
  background: $color-1;
  @include sp {
    border: 1px solid $gray_d;
  };
  @include pc {
    border: 1px solid $gray_d;
  };
}
// ブラック
.color-guide.color-2::before {
  background: $color-2;
  @include sp {
  };
  @include pc {
  };
}
// グレー
.color-guide.color-3::before {
  background: $color-3;
  @include sp {
  };
  @include pc {
  };
}
// ブラウン
.color-guide.color-4::before {
  background: $color-4;
  @include sp {
  };
  @include pc {
  };
}
// ベージュ
.color-guide.color-5::before {
  background: $color-5;
  @include sp {
  };
  @include pc {
  };
}
// グリーン
.color-guide.color-6::before {
  background: $color-6;
  @include sp {
  };
  @include pc {
  };
}
// ブルー
.color-guide.color-7::before {
  background: $color-7;
  @include sp {
  };
  @include pc {
  };
}
// パープル
.color-guide.color-8::before {
  background: $color-8;
  @include sp {
  };
  @include pc {
  };
}
// イエロー
.color-guide.color-9::before {
  background: $color-9;
  @include sp {
  };
  @include pc {
  };
}
// ピンク
.color-guide.color-10::before {
  background: $color-10;
  @include sp {
  };
  @include pc {
  };
}
// レッド
.color-guide.color-11::before {
  background: $color-11;
  @include sp {
  };
  @include pc {
  };
}
// オレンジ
.color-guide.color-12::before {
  background: $color-12;
  @include sp {
  };
  @include pc {
  };
}
// シルバー
.color-guide.color-13::before {
  background: $color-13;
  @include sp {
  };
  @include pc {
  };
}
// ゴールド
.color-guide.color-14::before {
  background: $color-14;
  @include sp {
  };
  @include pc {
  };
}
// その他
.color-guide.color-15::before {
  background-color: $white;
  background-image: $color-15;
  @include sp {
  };
  @include pc {
  };
}
</style>
