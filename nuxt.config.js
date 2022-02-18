export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Doc: https://www.npmjs.com/package/@nuxtjs/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // 環境変数API_URLが優先される
    // baseURL: 'http://localhost:3000'
    // クロスドメインで認証情報を共有する
    // Doc: https://axios.nuxtjs.org/options/#credentials
  },

  vuetify: {
    // カスタムCSSのファイルパス
    customVariables: ['~/assets/style/variables.scss'],
    // カスタムCSSを有効にするフラグ
    // Doc: https://vuetifyjs.com/en/features/sass-variables/#nuxt-install
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '4080be',
          info: '4fc1e9',
          success: '44d69e',
          warning: 'feb65e',
          error: 'fb8678',
          background: 'f6f6f4',
          black: '222',
          appblue: '1c6ecd'
        }
      }
    }
  },

  // 汎用CSSの読み込み
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/style/style.scss'
  ],

  // カスタムCSSの読み込み（変数・mixinのみ）
  // Doc: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      // '~/assets/style/01-foundation/01-variable/_variable.scss',
      // '~/assets/style/01-foundation/02-mixin/_mixin.scss',
      // '~/assets/style/01-foundation/03-function/_function.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
