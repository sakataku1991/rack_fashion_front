<template>
  <nuxt-link
    to="/mypage/items/questions"
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
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonUserAvatarLink',
  data () {
    return {
      image_src: require('@/assets/image/icon_sakataku1991.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-userAvatar {
  @include sp {
  };
  @include pc {
  };
}
.btn-userAvatar-img {
  @include sp {
    border-radius: 50%;
  };
  @include pc {
    border-radius: 50%;
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
