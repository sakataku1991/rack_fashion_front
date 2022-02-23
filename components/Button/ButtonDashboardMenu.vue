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
    height: 48px;
    width: 48px;
  };
  @include pc {
    border-radius: 50%;
    height: 48px;
    width: 48px;
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
