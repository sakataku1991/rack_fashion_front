<template>
  <img
    :src="image_src"
    alt="『RACK』のロゴ（白Ver.）"
    class="logo logo-rack -white"
    height="20"
    width="100"
  >
</template>

<script>
export default {
  name: 'ComponentsAppLogoWhite',
  data () {
    return {
      image_src: require('@/assets/image/logo/logo_rack_white.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-rack.-white {
  @include sp {
    margin: 0;
  };
  @include pc {
    margin: 0;
  };
}
</style>
