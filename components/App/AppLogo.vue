<template>
  <img
    :src="image_src"
    alt="『RACK』のロゴ"
    class="logo logo-rack"
    height="20"
    width="100"
  >
</template>

<script>
export default {
  name: 'ComponentsAppLogo',
  data () {
    return {
      image_src: require('@/assets/image/logo/logo_rack.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-rack {
  @include sp {
    aspect-ratio: 5 / 1;
    margin: 0;
  };
  @include pc {
    aspect-ratio: 5 / 1;
    margin: 0;
  };
}
</style>
