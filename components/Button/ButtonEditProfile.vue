<template>
  <nuxt-link
    to="/dashboard/settings/profile"
    class="btn -outlined -gray btn-editProfile"
    ontouchstart=""
  >
    <span class="btn-text">プロフィールを編集</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonEditProfile'
}
</script>

<style lang="scss" scoped>
.btn-editProfile {
  @include sp {
  };
  @include pc {
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
.btn-editProfile {
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
