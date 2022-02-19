<template>
  <!-- 「app」とレイアウトファイル側の「v-main」はワンセット！ -->
  <!-- ワンセットになっていることで、固定ツールバー分のマージンが確保されるっぽい -->
  <!-- Doc: https://vuetifyjs.com/ja/api/v-app-bar/ -->
  <v-app-bar
    app
    dense
    elevation="1"
    :clipped-left="clippedLeft"
    color="white"
  >
    <slot name="navigation-toggle-button" />

    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title />

    <v-spacer />

    <logged-in-app-bar-account-menu />
  </v-app-bar>
</template>

<script>
export default {
  props: {
    clippedLeft: {
      type: Boolean,
      default: false
    }
  }
}
</script>
