<template>
  <v-app>
    <div id="wrapper" class="wrapper">
      <logged-in-app-bar />
      <app-toaster />
      <div class="Content">
        <div class="contentBoxMaxPc">
          <div class="pageContainer PageTop">
            <logged-in-app-menu />
            <main id="Main" class="Main">
              <div class="contentBoxSp">
                <div class="Main__content">
                  <nuxt />
                </div>
              </div>
            </main>
            <logged-in-app-sidebar />
          </div>
        </div>
      </div>
      <app-footer />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsLoggedIn',
  // ログイン前ユーザーにアクセスさせない、リダイレクト処理
  middleware: ['authentication']
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
    padding: 57px 0 0px;
  };
  @include pc {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    min-width: 880px;
    padding: calc(65px + 48px) 0 80px;
  };
}
.Menu {
  @include sp {
  };
  @include pc {
    min-width: 220px;
    width: 220px;
  };
}
.Main {
  @include sp {
  };
  @include pc {
    margin-top: calc(53px + 40px);
    width: 100%;
  };
}
.Main__content {
  @include sp {
    padding-top: 32px;
  };
  @include pc {
  };
}
.Sidebar {
  @include sp {
  };
  @include pc {
    min-width: 220px;
    width: 220px;
  };
}
</style>
