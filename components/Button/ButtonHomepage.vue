<template>
  <a
    :href="iconButton.link"
    target="_blank"
    rel="noopener noreferrer"
    class="btn -icon btn-home"
    ontouchstart=""
  >
    <icon-base
      height="18"
      icon-name="home"
      width="18"
    >
      <icon-home />
    </icon-base>
  </a>
</template>

<script>
export default {
  name: 'ComponentsButtonHomepage',
  props: {
    homepage: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconButton () {
      // const name = 'ホームページ'
      const link = this.homepage
      return { link }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-home {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-home {
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
