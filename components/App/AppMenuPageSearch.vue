<template>
  <nav id="Menu" class="Menu hideSp">
    <div class="contentBoxSp">
      <div class="Menu__content">
        <div class="Menu__allQuestion">
          <menu-gender />
          <menu-category />
          <menu-color />
          <menu-sort />
        </div>
        <div class="Menu__myQuestion">
          <menu-my-item />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ComponentsAppMenuPageSearch'
}
</script>

<style lang="scss" scoped>
.Menu {
  @include sp {
  };
  @include pc {
  };
}
.Menu__content {
  @include sp {
  };
  @include pc {
  };
}
.Menu__allQuestion {
  background-color: $gray_f4;
  position: relative;
  @include sp {
    border-radius: 8px;
  };
  @include pc {
    border-radius: 10px;
    padding: 0px 0 40px;
    z-index: 0;
  };
}
::v-deep .Tab__gender {
  @include sp {
  };
  @include pc {
    display: none;
  };
}
.Menu__allQuestion + .Menu__myQuestion {
  @include sp {
  };
  @include pc {
    margin-top: 32px;
  };
}
.Menu__myQuestion {
  background-color: $gray_f4;
  @include sp {
    border-radius: 8px;
  };
  @include pc {
    border-radius: 10px;
    padding: 18px 0 18px;
  };
}
.MenuItem {
  @include sp {
    background-color: $white;
  };
  @include pc {
    // background-color: $gray_f4;
  };
}
.Menu__allQuestion .MenuItem:first-of-type {
  @include sp {
  };
  @include pc {
    padding-top: 18px;
  };
}
.Menu__allQuestion .MenuItem:not(.MenuGender, :last-of-type) {
  @include sp {
  };
  @include pc {
    padding-bottom: 24px;
  };
}
.Menu__allQuestion .MenuItem:not(.MenuGender) + .MenuItem {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
    padding-top: 24px;
  };
}
</style>
