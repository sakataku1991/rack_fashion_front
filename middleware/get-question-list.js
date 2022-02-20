export default async ({ store, $axios }) => {
  // 「質問」の一覧が存在しない場合
  if (!store.state.question.list.length) {
    await $axios.$get('/api/v1/questions')
      .then(questions => store.dispatch('getQuestionList', questions))
  }
}
