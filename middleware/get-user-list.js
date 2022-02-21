export default async ({ store, $axios }) => {
  // 「ユーザー」の一覧が存在しない場合
  if (!store.state.user.list.length) {
    await $axios.$get('/api/v1/users')
      .then(users => store.dispatch('getUserList', users))
  }
}
