<template>
  <v-app>
    <logged-in-app-bar />
    <v-main>
      <app-toaster />
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsLoggedIn',
  // ログイン前ユーザーにアクセスさせない、リダイレクト処理
  middleware: ['authentication']
}
</script>
