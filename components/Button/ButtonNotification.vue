<template>
  <button
    type="button"
    aria-label="通知"
    class="btn -icon btn-notification"
    ontouchstart=""
  >
    <icon-base
      height="24"
      icon-name="notification"
      width="24"
    >
      <icon-notification />
    </icon-base>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonNotification'
}
</script>

<style lang="scss" scoped>
.btn-notification {
  color: $black;
  @include sp {
    border-radius: 50%;
    padding: 4px;
  };
  @include pc {
    border-radius: 50%;
    padding: 6px;
  };
}
.btn-notification {
  @include sp {
    &:active {
      color: $blue;
      background-color: $gray_ea;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
      background-color: $gray_ea;
    }
  };
}
</style>
