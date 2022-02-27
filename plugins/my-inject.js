// アプリ全体で共通で使用する、オリジナルの関数や値
class MyInject {
  // Nuxtのcontextを使用するには、constructor内で初期化する
  constructor (ctx) {
    // ctx => { app }
    this.app = ctx.app
    this.error = ctx.error
  }

  // i18nページタイトル変換
  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  // 日付のフォーマット変換
  dateFormat (dateStr) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(dateStr))
  }

  // ユーザーの「マイページ」のリンク
  userMypageLinkTo (rack_id, name = 'rack_id-mypage') {
    return { name, params: { rack_id } }
  }

  // ユーザーの「ダッシュボード」のリンク
  userDashboardLinkTo (name = 'name') {
    return { name, params: { name } }
  }

  // 「質問」のリンク
  questionLinkTo (rack_id, name = 'rack_id-questions-question') {
    return { name, params: { rack_id } }
  }

  // APIのエラーハンドラー
  apiErrorHandler (response) {
    // ネットワークエラーの場合はresponseが存在しないので500を代入
    const statusCode = (response) ? response.status : 500
    const message = (response) ? response.statusText : 'Network Error'
    return this.error({ statusCode, message })
  }
}

// inject => オリジナルクラスを追加することができる
// export default (context, inject)
export default ({ app, error }, inject) => {
  // inject('呼び出し名', クラスのインスタンス(context))
  // 'my' => $my
  inject('my', new MyInject({ app, error }))
}
