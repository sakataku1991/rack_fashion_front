<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  name: 'PagesRackidQuestions',
  layout: 'question'
  // 「存在しない質問の個別詳細ページ」＋「questions」ページへのアクセス制限
  // validate ({ store, route }) {
  //   return !!store.state.question.current && route.name !== 'questions'
  // }
}
</script>
