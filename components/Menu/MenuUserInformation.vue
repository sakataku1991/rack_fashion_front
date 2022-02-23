<template>
  <div class="Menu__userInformation">
    <div class="Menu__userInformationHeader">
      <!-- 「通知」「お知らせ」のタブ -->
      <tab-user-informations />
    </div>
    <div class="Menu__userInformationContent">
      <ul class="Menu__userInformationContentList">
        <li
          v-for="n in 6"
          :key="n"
          class="Menu__userInformationContentListItem is-liked"
        >
          <card-information-notifications
            class="Menu__userInformationContentListItemCard"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsMenuUserInformation'
}
</script>

<style lang="scss" scoped>
.Menu__userInformation {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userInformationHeader {
  @include sp {
  };
  @include pc {
  };
}
// インフォメーションの内容
.Menu__userInformationContent {
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  @include sp {
    max-height: 100%;
    min-height: 136px;
  };
  @include pc {
    max-height: 360px;
    min-height: 136px;
  };
}
// インフォメーションの内容（白グラデの最下部隠し）
.Menu__userInformationContent {
  @include sp {
    padding-bottom: 48px;
  };
  @include pc {
    padding-bottom: 48px;
  };
}
.Menu__userInformationContent::after {
  content: "";
  position: absolute;
  pointer-events: none;
  @include sp {
    background: linear-gradient(rgba($white_rgb, 0) 0, rgba($white_rgb, 1) 100px);
    bottom: 0;
    height: 120px;
    left: 0;
    width: 100%;
  };
  @include pc {
    background: linear-gradient(rgba($white_rgb, 0) 0, rgba($white_rgb, 1) 64px);
    border-radius: 0 0 6px 6px;
    bottom: 0;
    height: 80px;
    left: 0;
    width: 100%;
  };
}
.Menu__userInformationContentList {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userInformationContentListItem {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userInformationContentListItem {
  @include sp {
  };
  @include pc {
  };
}
.Menu__userInformationContentListItem + .Menu__userInformationContentListItem {
  @include sp {
    border-top: 1px solid $gray_d;
  };
  @include pc {
    border-top: 1px solid $gray_d;
  };
}
.Menu__userInformationContentListItemCard {
  @include sp {
  };
  @include pc {
  };
}
</style>
