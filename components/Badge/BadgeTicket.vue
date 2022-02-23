<template>
  <p class="badge badge-ticket">
    <span aria-label="閲覧チケット" class="badge-name">
      <icon-base
        class="badge-name-icon"
        height="18"
        icon-name="confirmation-number"
        width="18"
      >
        <icon-confirmation-number />
      </icon-base>
      <span class="badge-name-text">閲覧チケット</span>
    </span>
    <span class="badge-ticket-count">05</span>
  </p>
</template>

<script>
export default {
  name: 'ComponentsBadgeTicket'
}
</script>

<style lang="scss" scoped>
.badge-ticket {
  align-items: center;
  background-color: $blue_bgLight;
  display: flex;
  width: fit-content;
  @include sp {
    border-radius: 4px;
    gap: 2px;
    padding: 2px 4px;
  };
  @include pc {
    border-radius: 4px;
    gap: 2px;
    padding: 4px 6px;
  };
}
.badge-name {
  align-items: center;
  color: $blue_hsb_b32;
  display: flex;
  @include sp {
    gap: 3px;
  };
  @include pc {
    gap: 3px;
  };
}
.badge-name-icon {
  @include sp {
  };
  @include pc {
  };
}
.badge-name-text {
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
  };
}
.badge-ticket-count {
  color: $blue_hsb_b32;
  display: block;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
</style>
