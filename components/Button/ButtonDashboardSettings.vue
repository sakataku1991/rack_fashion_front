<template>
  <nuxt-link
    to="/dashboard/settings/account"
    class="btn -outlined -gray btn-dashboardSettings"
    ontouchstart=""
  >
    <icon-base
      class="icon icon-settings"
      height="16"
      icon-name="settings"
      width="16"
    >
      <icon-settings />
    </icon-base>
    <span class="btn-text">設定</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonDashboardSettings'
}
</script>

<style lang="scss" scoped>
.btn-dashboardSettings {
  align-items: center;
  display: flex;
  @include sp {
    gap: 3px;
  };
  @include pc {
    gap: 3px;
  };
}
.btn-text {
  font-weight: bold;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-dashboardSettings {
  @include sp {
    &:active {
    }
  };
  @include pc {
    &:hover {
    }
  };
}
</style>
