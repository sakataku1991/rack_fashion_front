// このファイルにアプリ共通の値やメソッドを設定していく（Vuex）
const homePath = 'index'
const mypagePath = 'mypage'
// const dashboardPath = 'dashboard'

// 共通の変数
export const state = () => ({
  styles: {
    homeAppBarHeight: 56
  },
  // ログイン前・ログイン後両方の共通変数・パスの指定
  allTime: {
  },
  // 会員登録時の共通変数・パスの指定
  afterSigningUp: {
    mypagePath: {
      name: mypagePath
    }
  },
  // ログイン時の共通変数・パスの指定
  loggedIn: {
    homePath: {
      name: homePath
    },
    rememberPath: {
      name: mypagePath,
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
    list: [
      { id: 1, rack_id: 'rack_id1', title: 'Question01', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, rack_id: 'rack_id2', title: 'Question02', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, rack_id: 'rack_id3', title: 'Question03', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, rack_id: 'rack_id4', title: 'Question04', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, rack_id: 'rack_id5', title: 'Question05', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
  },
  user: {
    current: null,
    list: [
      { id: 1, name: 'user1', rack_id: 'rack_id1', updatedAt: '2020-04-01T12:00:00+09:00' },
      { id: 2, name: 'user2', rack_id: 'rack_id2', updatedAt: '2020-04-05T12:00:00+09:00' },
      { id: 3, name: 'user3', rack_id: 'rack_id3', updatedAt: '2020-04-03T12:00:00+09:00' },
      { id: 4, name: 'user4', rack_id: 'rack_id4', updatedAt: '2020-04-04T12:00:00+09:00' },
      { id: 5, name: 'user5', rack_id: 'rack_id5', updatedAt: '2020-04-01T12:00:00+09:00' }
    ]
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
  getQuestionList ({ commit }, questions) {
    questions = questions || []
    commit('setQuestionList', questions)
  },
  // { state, getters, commit, dispatch, rootState, rootGetters }
  // rootState => ルート(store/index.js)のstateを取得(rootState = state)
  getCurrentQuestion ({ state, commit }, params) {
    const id = Number(params.id)
    const currentQuestion =
      state.question.list.find(question => question.id === id) || null
    commit('setCurrentQuestion', currentQuestion)
  },
  // ユーザー
  getUserList ({ commit }, users) {
    users = users || []
    commit('setUserList', users)
  },
  getCurrentUser ({ state, commit }, params) {
    const id = Number(params.id)
    const currentUser =
      state.user.list.find(user => user.id === id) || null
    commit('setCurrentUser', currentUser)
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
