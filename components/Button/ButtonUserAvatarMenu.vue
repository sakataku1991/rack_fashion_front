<template>
  <button
    type="button"
    aria-label="メニュー"
    class="btn btn-userAvatar"
    ontouchstart=""
  >
    <img
      :src="image_src"
      alt="メニュー"
      class="btn-userAvatar-img"
      height="40"
      width="40"
    >
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonUserAvatarMenu',
  data () {
    return {
      image_src: require('@/assets/image/icon_sakataku1991.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-userAvatar {
  overflow: hidden;
  @include sp {
    border-radius: 50%;
  };
  @include pc {
    border-radius: 50%;
  };
}
.btn-userAvatar-img {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-userAvatar {
  @include sp {
    &:active {
      filter: brightness(84%);
    }
  };
  @include pc {
    &:hover {
      filter: brightness(84%);
    }
  };
}
</style>
