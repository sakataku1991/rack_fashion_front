<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  name: 'PagesQuestion',
  layout: 'question',
  // アクセスしてほしくないページのアクセス制限
  validate ({ route }) {
    // 「question」ページへのアクセス制限
    return route.name !== 'question'
  }
}
</script>
