<template>
  <button
    type="button"
    aria-label="Follow"
    class="btn btn-follow"
    ontouchstart=""
  >
    <span class="btn-text">フォロー</span>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonFollow'
}
</script>

<style lang="scss" scoped>
// 共通のスタイル
.btn-follow {
  @include sp {
    border-radius: 30px !important;  // TODO 後で「!important」消す
    padding: 1px 8px 1px;
  };
  @include pc {
    border-radius: 30px !important;  // TODO 後で「!important」消す
    padding: 4px 12px 4px;
  };
}
.btn-follow .btn-text {
  font-weight: bold;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.4rem;
  };
}
// 「フォロー」ボタンのスタイル
.btn-follow {
  background-color: $blue;
  @include sp {
    border: 1px solid $blue;
  };
  @include pc {
    border: 1px solid $blue;
  };
}
.btn-follow .btn-text {
  color: $white;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-follow {
  @include sp {
    &:active {
      background-color: $blue_hover;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_hover;
    }
  };
}
// 「フォロー中」ボタンのスタイル
.btn-follow.-following {
  background-color: $white;
  @include sp {
    border: 1px solid $blue_grayBoader;
  };
  @include pc {
    border: 1px solid $blue_grayBoader;
  };
}
.btn-follow.-following .btn-text {
  color: $black;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-follow.-following {
  @include sp {
    &:active {
      background-color: $delete_bg;
      border: 1px solid $delete_border;
    }
  };
  @include pc {
    &:hover {
      background-color: $delete_bg;
      border: 1px solid $delete_border;
    }
  };
}
.btn-follow.-following {
  @include sp {
    &:active {
      .btn-text {
        color: $error;
      }
    }
  };
  @include pc {
    &:hover {
      .btn-text {
        color: $error;
      }
    }
  };
}
// 「フォロー解除」ボタンのスタイル
.btn-follow.-following.-unfollow {
  background-color: $delete_bg;
  @include sp {
    border: 1px solid $delete_border;
  };
  @include pc {
    border: 1px solid $delete_border;
  };
}
.btn-follow.-following.-unfollow .btn-text {
  color: $error;
  @include sp {
  };
  @include pc {
  };
}
</style>
