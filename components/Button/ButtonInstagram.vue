<template>
  <a
    :href="iconButton.link"
    target="_blank"
    rel="noopener noreferrer"
    class="btn -icon btn-instagram"
    ontouchstart=""
  >
    <icon-base
      height="18"
      icon-name="instagram"
      width="18"
    >
      <icon-instagram />
    </icon-base>
  </a>
</template>

<script>
export default {
  name: 'ComponentsButtonInstagram',
  props: {
    instagram: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconButton () {
      // const name = 'Instagram'
      const link = 'https://www.instagram.com/' + this.instagram + '/'
      return { link }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-instagram {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-instagram {
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
