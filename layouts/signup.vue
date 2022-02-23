<template>
  <v-app>
    <div id="wrapper" class="wrapper">
      <before-login-app-bar />
      <app-toaster />
      <div class="Content">
        <div class="contentBox">
          <div class="pageContainer PageSignup">
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
  name: 'LayoutsSignup'
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
    padding: calc(57px + 40px) 0 80px;
  };
  @include pc {
    min-width: 880px;
    padding: calc(65px + 48px) 0 80px;
  };
}
.Main {
  @include sp {
  };
  @include pc {
    width: 100%;
  };
}
</style>
