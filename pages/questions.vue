<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  name: 'PagesQuestions',
  layout: 'questions',
  // アクセスしてほしくないページのアクセス制限
  validate ({ route }) {
    // 「questions」ページへのアクセス制限
    return route.name !== 'questions'
  }
}
</script>
