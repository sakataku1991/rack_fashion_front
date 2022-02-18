<template>
  <!-- 「app」とレイアウトファイル側の「v-main」はワンセット！ -->
  <!-- ワンセットになっていることで、固定ツールバー分のマージンが確保されるっぽい -->
  <!-- Doc: https://vuetifyjs.com/ja/api/v-app-bar/ -->
  <v-app-bar
    app
    :height="homeAppBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <app-signup-button />
    <app-login-button />
  </v-app-bar>
</template>

<script>
export default {
  data ({ $store }) {
    return {
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  }
}
</script>
