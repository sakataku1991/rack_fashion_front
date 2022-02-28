<template>
  <nav id="Menu" class="Menu">
    <div class="">
      <div class="Menu__content">
        <div class="Menu__dashboard">
          <menu-dashboard />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ComponentsLoggedInAppDashboardMenu'
}
</script>

<style lang="scss" scoped>
.Menu {
  @include sp {
    background-color: $white;
    padding: 16px 0 120px;
  };
  @include pc {
    background-color: $blue_hsb_b32;
    padding: 60px 0 120px;
  };
}
.Menu__content {
  @include sp {
  };
  @include pc {
  };
}
.Menu__dashboard {
  @include sp {
  };
  @include pc {
  };
}
.MenuItem {
  @include sp {
  };
  @include pc {
  };
}
</style>
