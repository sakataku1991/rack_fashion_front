<template>
  <v-app>
    <div id="wrapper" class="wrapper">
      <logged-in-app-bar />
      <app-toaster />
      <div class="Content">
        <div class="">
          <div class="pageContainer PageSingleQuestion">
            <!-- <before-login-app-menu /> -->
            <main id="Main" class="Main">
              <div class="contentBoxPc">
                <div class="Main__content">
                  <nuxt />
                </div>
              </div>
            </main>
            <!-- <before-login-app-sidebar /> -->
          </div>
        </div>
      </div>
      <!-- トースト通知 -->
      <!-- TODO のちにトースト通知機能を実装！ -->
      <!-- <toast-base /> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsNew'
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: $gray_f4;
  @include sp {
  };
  @include pc {
  };
}
.Content {
  @include sp {
  };
  @include pc {
  };
}
.pageContainer {
  @include sp {
    padding: 57px 0 280px;
  };
  @include pc {
    padding: 65px 0 240px;
  };
}
.Main {
  background-color: $gray_f4;
  @include sp {
    padding: 24px 0 40px;
  };
  @include pc {
    padding: 56px 0 64px;
  };
}
</style>
