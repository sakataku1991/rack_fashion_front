<template>
  <div class="Tab__userInformations">
    <ul class="Tab__userInformationsList">
      <li class="Tab__userInformationsListItem">
        <button
          type="button"
          class="Tab__userInformationsListItemBtn btn -tab btn-tabUserInfoNotification is-active"
        >
          <span class="Tab__userInformationsListItemBtnText">通知</span>
        </button>
      </li>
      <li class="Tab__userInformationsListItem">
        <button
          type="button"
          class="Tab__userInformationsListItemBtn btn -tab btn-tabUserInfoNews"
        >
          <span class="Tab__userInformationsListItemBtnText">お知らせ</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentsTabUserInformations'
}
</script>

<style lang="scss" scoped>
.Tab__userInformations {
  @include sp {
    border-bottom: 1px solid $gray_d;
  };
  @include pc {
    border-bottom: 1px solid $gray_d;
  };
}
.Tab__userInformationsList {
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.Tab__userInformationsListItem {
  @include sp {
    width: 100%;
  };
  @include pc {
    width: 100%;
  };
}
.Tab__userInformationsListItemBtn {
  background-color: $white;
  border: none;
  display: block;
  text-align: center;
  @include sp {
    line-height: 1;
    padding: 0 6px 0;
    width: 100%;
  };
  @include pc {
    line-height: 1;
    padding: 0 6px 0;
    width: 100%;
  };
}
.Tab__userInformationsListItemBtnText {
  color: $blue_grayText;
  display: block;
  font-weight: bold;
  position: relative;
  @include sp {
    font-size: 1.4rem;
    letter-spacing: $lsAV25;
    line-height: 1.5;
    padding: 10px 0 14px;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
    padding: 8px 0 12px;
  };
}
// ホバー時の効果
.Tab__userInformationsListItemBtn {
  @include sp {
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    &:active {
      transition: background-color 0.15s ease-out, color 0.15s ease-out;
    }
  };
  @include pc {
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    &:hover {
      transition: background-color 0.15s ease-out, color 0.15s ease-out;
    }
  };
}
.Tab__userInformationsListItemBtn {
  @include sp {
    &:active {
      background-color: $blue_12pct;
      .Tab__userInformationsListItemBtnText {
        color: $blue;
      }
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_12pct;
      .Tab__userInformationsListItemBtnText {
        color: $blue;
      }
    }
  };
}
// 選択中のタブのスタイル
.Tab__userInformationsListItemBtn.is-active {
  @include sp {
  };
  @include pc {
  };
}
.Tab__userInformationsListItemBtn.is-active .Tab__userInformationsListItemBtnText {
  color: $black;
  @include sp {
  };
  @include pc {
  };
}
.Tab__userInformationsListItemBtn.is-active .Tab__userInformationsListItemBtnText::after {
  content: "";
  background-color: $blue;
  position: absolute;
  @include sp {
    bottom: 0;
    border-radius: 50px;
    height: 3px;
    left: calc(50% - calc(100% / 2));
    width: 100%;
  };
  @include pc {
    bottom: 0;
    border-radius: 50px;
    height: 4px;
    left: calc(50% - calc(100% / 2));
    width: 100%;
  };
}
</style>
