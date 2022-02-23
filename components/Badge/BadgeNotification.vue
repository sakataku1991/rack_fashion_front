<template>
  <p class="badge badge-notification">
    <span class="badge-notification-count">1</span>
  </p>
</template>

<script>
export default {
  name: 'ComponentsBadgeNotification'
}
</script>

<style lang="scss" scoped>
.badge-notification {
  align-items: center;
  background-color: $notification;
  display: flex;
  justify-content: center;
  pointer-events: none;
  @include sp {
    border: 1px solid $white;
    border-radius: 50%;
    height: 16px;
    width: 16px;
  };
  @include pc {
    border: 1px solid $white;
    border-radius: 50%;
    height: 16px;
    width: 16px;
  };
}
.badge-notification-count {
  color: $white;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include sp {
    font-size: 1.0rem;
    line-height: 1;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1;
  };
}
</style>
