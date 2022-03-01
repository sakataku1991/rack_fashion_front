<template>
  <button
    type="button"
    aria-label="MENU"
    value="MENU"
    class="btn -normal -blue btn-drawer btn-dashboardMenu"
    ontouchstart=""
  >
    <span class="btn-text">MENU</span>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonDashboardMenu'
}
</script>

<style lang="scss" scoped>
.btn-dashboardMenu {
  @include sp {
    border-radius: 50%;
    box-shadow:
      0px 0px 8px rgb($blue_hsb_s20b48_rgb / 20%),
      0px 1px 3px 1px rgb($blue_hsb_s20b48_rgb / 25%) ;
    height: 56px;
    width: 56px;
  };
  @include pc {
    border-radius: 50%;
    box-shadow:
      0px 0px 8px rgb($blue_hsb_s20b48_rgb / 20%),
      0px 1px 3px 1px rgb($blue_hsb_s20b48_rgb / 25%) ;
    height: 56px;
    width: 56px;
  };
}
.btn-text {
  @include sp {
    font-size: 1rem;
  };
  @include pc {
    font-size: 1rem;
  };
}
// ホバー時の効果
.btn-dashboardMenu {
  @include sp {
    &:active {
    }
  };
  @include pc {
    &:hover {
    }
  };
}
// ボタン押下時のスタイル
.btn-dashboardMenu::after {
  background-color: rgba($black_rgb, 0.4);
  content: "";
  opacity: 0;
  position: absolute;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  visibility: hidden;
  @include sp {
    height: 100vh;
    width: 100vw;
  };
  @include pc {
  };
}
.btn-dashboardMenu.is-active {
  @include sp {
  };
  @include pc {
  };
}
.btn-dashboardMenu.is-active::after {
  @include sp {
    opacity: 1;
    visibility: visible;
  };
  @include pc {
  };
}
</style>
