<template>
  <v-app>
    <div id="wrapper" class="wrapper">
      <logged-in-app-bar />
      <app-toaster />
      <div class="Content">
        <div class="">
          <div class="pageContainer PageDashboard">
            <!-- ダッシュボードのサイドメニューの呼び出しボタン -->
            <button-dashboard-menu
              v-show="isMobile"
              class="MenuBtn"
              :class="{'is-active': isActiveMenu}"
              @click.native="isActiveMenu = !isActiveMenu"
            />
            <!-- ダッシュボードのサイドメニュー -->
            <logged-in-app-dashboard-menu
              :class="{'is-active': isActiveMenu}"
            />
            <main id="Main" class="Main">
              <div class="">
                <div class="Main__content">
                  <nuxt />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <app-footer />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsDashboard',
  // middleware: ['authentication'],
  data () {
    return {
      windowWidth: 1000,
      isActiveMenu: false
    }
  },
  computed: {
    isMobile () {
      return this.windowWidth < 768
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.Content {
  @include sp {
  };
  @include pc {
  };
}
.pageContainer {
  @include sp {
  };
  @include pc {
  };
}
.PageDashboard {
  z-index: 0;
  @include sp {
    padding: 57px 0 0;
    position: relative;
  };
  @include pc {
    display: flex;
    padding: 65px 0 0;
  };
}
.MenuBtn {
  position: fixed;
  z-index: 2;
  @include sp {
    bottom: 32px;
    right: 5%;
  };
  @include pc {
    bottom: 40px;
    right: 40px;
  };
}
.MenuBtn::after {
  @include sp {
    bottom: -33px;
    right: -5.2vw;
  };
  @include pc {
  };
}
.Menu {
  z-index: 3;
  @include sp {
    left: 0;
    min-height: calc(100vh - 57px);
    position: fixed;
    top: 57px;
    width: 76%;
  };
  @include pc {
    min-width: 240px;
    width: 240px;
  };
}
// メニューのアニメーション
.Menu {
  @include sp {
    transition: all 0.3s ease 0s;
    transform: translateX(-100%);
  };
  @include pc {
  };
}
.Menu.is-active {
  @include sp {
    transform: translateX(0);
  };
  @include pc {
  };
}
// メイン
.Main {
  background-color: $gray_f4;
  z-index: 1;
  @include sp {
  };
  @include pc {
    width: 100%;
  };
}
</style>
