<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  name: 'PagesDashboard',
  layout: 'logged-in',
  // アクセスしてほしくないページのアクセス制限
  validate ({ route }) {
    // 「dashboard」ページへのアクセス制限
    return route.name !== 'dashboard'
  }
}
</script>
