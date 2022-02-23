<template>
  <div id="wrapper" class="wrapper">
    <before-login-app-bar />
    <app-toaster />
    <div class="Content">
      <div class="contentBoxXS">
        <div class="pageContainer PageLogin">
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
    padding: calc(57px + 40px) 0 80px;
  };
  @include pc {
    padding: calc(65px + 48px) 0 120px;
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
