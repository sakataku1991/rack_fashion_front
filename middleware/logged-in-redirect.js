export default ({ $auth, store, route, redirect }) => {
  // ログイン済ユーザーをリダイレクトさせる
  const redirectPaths = store.state.loggedIn.redirectPaths
  // ログイン済みユーザーが「redirectPaths」に登録したページへアクセスしようとした場合に
  if ($auth.loggedIn() && redirectPaths.includes(route.name)) {
    // RACKの「homePath（トップページ）」へとリダイレクトする
    return redirect(store.state.loggedIn.homePath)
  }
}
