<template>
  <v-app>
    <div id="wrapper" class="wrapper">
      <before-login-app-bar />
      <app-toaster />
      <div class="Content">
        <div class="">
          <div class="pageContainer PageFixedPage">
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
  name: 'LayoutsStaticPage'
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
    padding: 57px 0 80px;
  };
  @include pc {
    padding: 65px 0 120px;
  };
}
.Main {
  @include sp {
  };
  @include pc {
    width: 100%;
  };
}
.Main__content {
  @include sp {
  };
  @include pc {
  };
}
// ページタイトル部分
::v-deep .Main__title {
  @include sp {
    padding: 40px 0 32px;
  };
  @include pc {
    padding: 48px 0 40px;
  };
}
// ページ内容部分
::v-deep .Main__title + .Main__contentContainer {
  @include sp {
  };
  @include pc {
  };
}
::v-deep .Main__contentContainer {
  @include sp {
  };
  @include pc {
  };
}
</style>
