<template>
  <div class="sticky-user-actions-for-question">
    <div class="sticky-btn-like-container">
      <button-like-circle />
    </div>
    <div class="sticky-btn-share-container">
      <ul class="sticky-btn-share-list">
        <li class="sticky-btn-share-list-item">
          <button-twitter-circle />
        </li>
        <li class="sticky-btn-share-list-item">
          <button-facebook-circle />
        </li>
        <li class="sticky-btn-share-list-item">
          <button-more-horiz-circle />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsStickyUserActionsForQuestion'
}
</script>

<style lang="scss" scoped>
.sticky-user-actions-for-question {
  align-items: center;
  display: flex;
  @include sp {
    align-items: center;
    justify-content: space-between;
  };
  @include pc {
    flex-direction: column;
    gap: 20px;
    position: sticky;
    top: 120px;
  };
}
// 「いいね！」ボタン
.sticky-btn-like-container {
  @include sp {
  };
  @include pc {
  };
}
// 「Twitter」ボタン
// 「Facebook」ボタン
// 「…」ボタン
.sticky-btn-share-container {
  @include sp {
  };
  @include pc {
  };
}
.sticky-btn-share-list {
  display: flex;
  @include sp {
    align-items: center;
    gap: 12px;
  };
  @include pc {
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  };
}
.sticky-btn-share-list-item {
  @include sp {
  };
  @include pc {
  };
}
// 「Twitter」ボタン
.btn-sns.-twitterCircle {
  color: $twitter;
  font-size: 0;
  @include sp {
  };
  @include pc {
  };
}
::v-deep .btn-sns .icon-twitterCircle {
  @include sp {
    height: 28px;
    width: 28px;
  };
  @include pc {
    height: 28px;
    width: 28px;
  };
}
// ホバー時の効果
.btn-sns.-twitterCircle {
  @include sp {
    &:active {
      color: $twitter_hover;
    }
  };
  @include pc {
    &:hover {
      color: $twitter_hover;
    }
  };
}
// 「Facebook」ボタン
.btn-sns.-facebookCircle {
  color: $facebook;
  font-size: 0;
  @include sp {
  };
  @include pc {
  };
}
::v-deep .btn-sns .icon-facebookCircle {
  @include sp {
    height: 28px;
    width: 28px;
  };
  @include pc {
    height: 28px;
    width: 28px;
  };
}
// ホバー時の効果
.btn-sns.-facebookCircle {
  @include sp {
    &:active {
      color: $facebook_hover;
    }
  };
  @include pc {
    &:hover {
      color: $facebook_hover;
    }
  };
}
// 「…」ボタン
.btn-moreHorizCircle {
  color: $gray_5;
  font-size: 0;
  padding: 0 !important;  // TODO 後で「!important」消す
  @include sp {
  };
  @include pc {
  };
}
::v-deep .btn-moreHorizCircle .icon-moreHorizCircle {
  @include sp {
    height: 28px;
    width: 28px;
  };
  @include pc {
    height: 28px;
    width: 28px;
  };
}
// ホバー時の効果
.btn-moreHorizCircle {
  @include sp {
    &:active {
      background-color: $gray_e4;
    }
  };
  @include pc {
    &:hover {
      background-color: $gray_e4;
    }
  };
}
</style>
