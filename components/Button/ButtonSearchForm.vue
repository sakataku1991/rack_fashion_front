<template>
  <button
    type="button"
    value="検索"
    aria-label="検索"
    class="btn -icon btn-search"
    ontouchstart=""
  >
    <icon-base
      height="24"
      icon-name="search"
      width="24"
    >
      <icon-search />
    </icon-base>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonSearchForm'
}
</script>

<style lang="scss" scoped>
.btn-search {
  color: $black;
  @include sp {
    border-radius: 50%;
    padding: 0;  // TODO 後で消す！
  };
  @include pc {
    border-radius: 50%;
    padding: 0;  // TODO 後で消す！
  };
}
.btn-search {
  @include sp {
    &:active {
      color: $blue;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
    }
  };
}
</style>
