<template>
  <button
    type="button"
    aria-label="オプションメニュー"
    class="btn -icon btn-moreHorizCircle"
    ontouchstart=""
  >
    <icon-base
      class="icon-moreHorizCircle"
      height="24"
      icon-name="more-horiz"
      width="24"
    >
      <icon-more-horiz />
    </icon-base>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonMoreHorizCircle'
}
</script>

<style lang="scss" scoped>
.btn-moreHorizCircle {
  @include sp {
    border-radius: 50%;
  };
  @include pc {
    border-radius: 50%;
  };
}
.btn-buttonMoreHoriz {
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
