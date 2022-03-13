// このファイルにアプリ共通の値やメソッドを設定していく（Vuex）

// 会員登録後のリダイレクト先
// const temporarySignedUpPath = 'temporary-signed-up'
const temporarySignedUpPath = 'index-logged-in'
// ログイン後のリダイレクト先
// const beforeLoginHomePath = 'index'
const loggedInHomePath = 'index-logged-in'
// const dashboardPath = 'dashboard'
// アカウント削除（退会）後のリダイレクト先
const afterDeleteAccountPath = 'bye-bye'

// 共通の変数
export const state = () => ({
  // ヘッダー
  styles: {
    homeAppBarHeight: 56
  },
  // ログイン前・ログイン後両方の共通変数・パスの指定
  allTime: {
  },
  // 会員登録時の共通変数・パスの指定
  signedUp: {
    temporarySignedUpPath: {
      name: temporarySignedUpPath
    }
  },
  // ログイン時の共通変数・パスの指定
  loggedIn: {
    // ログイン後の初期表示画面
    homePath: {
      name: loggedInHomePath
    },
    // 記憶したルート
    rememberPath: {
      name: loggedInHomePath,
      params: {}
    },
    // ログイン後アクセス不可ルート一覧
    // （「middleware」の「logged-in-redirect.js」）
    redirectPaths: [
      'index',
      'signup',
      'login'
    ]
  },
  // 退会後の共通変数・パスの指定
  deleteAccount: {
    afterDeleteAccountPath: {
      name: afterDeleteAccountPath
    }
  },
  // 「ユーザー」のデータ
  user: {
    current: null,
    list: []
  },
  // 「性別」のデータ
  sex: {
    current: null,
    list: []
  },
  // 「質問」のデータ
  question: {
    current: null,
    list: []
  },
  // 「カテゴリー」のデータ
  category: {
    current: null,
    list: []
  },
  // 「色」のデータ
  color: {
    current: null,
    list: []
  },
  // 「ハッシュタグ」のデータ
  hashtag: {
    current: null,
    list: []
  },
  // AuthToken
  auth: {
    token: null,
    expires: 0,
    payload: {}
  },
  // トースト通知
  toast: {
    msg: null,
    color: 'error',
    timeout: 4000
  }
})

// アプリ全体の算出プロパティ
export const getters = {
}

// stateで用意した変数の値を変更する場所
export const mutations = {
  // 「質問」
  setQuestionList (state, payload) {
    state.question.list = payload
  },
  setCurrentQuestion (state, payload) {
    state.question.current = payload
  },
  // 「ユーザー」
  setUserList (state, payload) {
    state.user.list = payload
  },
  setCurrentUser (state, payload) {
    state.user.current = payload
  },
  // 「性別」
  setSexList (state, payload) {
    state.sex.list = payload
  },
  setAuthToken (state, payload) {
    state.auth.token = payload
  },
  setAuthExpires (state, payload) {
    state.auth.expires = payload
  },
  setAuthPayload (state, payload) {
    state.auth.payload = payload
  },
  setToast (state, payload) {
    state.toast = payload
  },
  setRememberPath (state, payload) {
    state.loggedIn.rememberPath = payload
  }
}

// アプリ全体のメソッド
export const actions = {
  getQuestionList ({ commit }, questions) {
    questions = questions || []
    commit('setQuestionList', questions)
  },
  // { state, getters, commit, dispatch, rootState, rootGetters }
  // rootState => ルート(store/index.js)のstateを取得(rootState = state)
  getCurrentQuestion ({ state, commit }, params) {
    let currentQuestion = null
    if (params && params.id) {
      const id = Number(params.id)
      currentQuestion =
        state.question.list.find(question => question.id === id) || null
    }
    commit('setCurrentQuestion', currentQuestion)
  },
  // ユーザー
  getUserList ({ commit }, users) {
    users = users || []
    commit('setUserList', users)
  },
  getCurrentUser ({ commit }, user) {
    commit('setCurrentUser', user)
  },
  // getCurrentUser ({ state, commit }, params) {
  //   let currentUser = null
  //   if (params && params.id) {
  //     const id = Number(params.id)
  //     currentUser =
  //       state.user.list.find(user => user.id === id) || null
  //   }
  //   commit('setCurrentUser', currentUser)
  // },
  // 性別
  getSexList ({ commit }, sexes) {
    sexes = sexes || []
    commit('setSexList', sexes)
  },
  // AuthToken
  getAuthToken ({ commit }, token) {
    commit('setAuthToken', token)
  },
  getAuthExpires ({ commit }, expires) {
    expires = expires || 0
    commit('setAuthExpires', expires)
  },
  getAuthPayload ({ commit }, jwtPayload) {
    jwtPayload = jwtPayload || {}
    commit('setAuthPayload', jwtPayload)
  },
  getToast ({ commit }, { msg, color, timeout }) {
    color = color || 'error'
    timeout = timeout || 4000
    commit('setToast', { msg, color, timeout })
  },
  // ログイン前ユーザーがアクセスしたルートを記憶する
  getRememberPath ({ state, commit }, { name, params }) {
    // ログイン前パスが渡された場合は、loggedIn.homePathに書き換える
    if (state.loggedIn.redirectPaths.includes(name)) {
      name = state.loggedIn.homePath.name
    }
    params = params || {}
    commit('setRememberPath', { name, params })
  }
}
