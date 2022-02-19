// このファイルにアプリ共通の値やメソッドを設定していく（Vuex）
const redirectPath = 'mypage'
const homePath = 'projects'

// 共通の変数
export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },
  // ログイン時の共通変数・パスの指定
  loggedIn: {
    redirectPath: {
      name: redirectPath
    },
    rememberPath: {
      name: homePath,
      params: {}
    },
    // ログイン後アクセス不可ルート一覧
    redirectPaths: [
      'index',
      'signup',
      'login'
    ]
  },
  question: {
    current: null,
    list: []
  },
  user: {
    current: null,
    list: []
  },
  auth: {
    token: null,
    expires: 0,
    payload: {}
  },
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
  setQuestionList (state, payload) {
    state.question.list = payload
  },
  setCurrentQuestion (state, payload) {
    state.question.current = payload
  },
  setUserList (state, payload) {
    state.user.list = payload
  },
  setCurrentUser (state, payload) {
    state.user.current = payload
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
  getQuestionList ({ commit }, projects) {
    projects = projects || []
    commit('setQuestionList', projects)
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
