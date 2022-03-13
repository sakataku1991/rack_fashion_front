<template>
  <v-app>
    <div id="wrapper" class="wrapper">
      <logged-in-app-bar />
      <app-toaster />
      <div class="Content">
        <div class="">
          <div class="pageContainer PageMypage">
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
  name: 'LayoutsMypage'
  // middleware: ['authentication'],
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
.PageMypage {
  @include sp {
    padding: 57px 0 0;
    position: relative;
  };
  @include pc {
    display: flex;
    padding: 65px 0 0;
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
