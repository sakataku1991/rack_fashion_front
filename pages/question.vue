<template>
  <v-container>
    「pages」の「question.vue」
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
