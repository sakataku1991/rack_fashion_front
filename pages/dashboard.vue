<template>
  <v-container>
    {{ $store.state.user.current }}
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  name: 'PagesDashboard',
  layout: 'dashboard',
  // ログインしていないとアクセスできないようにする設定（authentication）
  middleware: ['authentication'],
  // アクセスしてほしくないページのアクセス制限
  validate ({ route }) {
    // 「dashboard」ページへのアクセス制限
    return route.name !== 'dashboard'
  }
}
</script>
