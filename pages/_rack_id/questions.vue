<template>
  <v-container>
    「pages/_rack_id」の「questions.vue」
    {{ $store.state.question.current }}
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  name: 'PagesRackidQuestionsQuestion',
  layout: 'question'
  // 「存在しない質問の個別詳細ページ」＋「questions」ページへのアクセス制限
  // validate ({ store, route }) {
  //   return !!store.state.question.current && route.name !== 'questions'
  // }
}
</script>
