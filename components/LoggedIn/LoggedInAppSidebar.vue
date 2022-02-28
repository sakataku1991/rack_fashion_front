<template>
  <aside id="Sidebar" class="Sidebar">
    <div class="contentBoxSp">
      <div class="Sidebar__content">
        <div class="Sidebar__myQuestion hidePc">
          <menu-my-item />
        </div>
        <div class="Sidebar__rackInfo">
          <sidebar-about-banner />
          <sidebar-news />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'ComponentsLoggedInAppSidebar'
}
</script>

<style lang="scss" scoped>
.Sidebar {
  @include sp {
    background-color: $gray_f4;
    padding: 64px 0 124px;
  };
  @include pc {
  };
}
.SidebarItem {
  @include sp {
  };
  @include pc {
  };
}
.Sidebar__myQuestion {
  background-color: $white;
  @include sp {
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
  };
  @include pc {
    border-radius: 10px;
  };
}
.Sidebar__myQuestion + .Sidebar__rackInfo {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    border-radius: 10px;
  };
}
.Sidebar__rackInfo {
  @include sp {
  };
  @include pc {
  };
}
.SidebarItem + .SidebarItem {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    margin-top: 40px;
  };
}
</style>
