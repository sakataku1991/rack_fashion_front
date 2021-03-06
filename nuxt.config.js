export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RACK｜ファッション情報専門Q＆Aサイト',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no, address=no, email=no' },
      { hid: 'description', name: 'description', content: 'RACKはファッション情報に特化したQ＆Aサイトです。服の着こなしや流行りのブランドについてなど、ファッションに関して知りたいことを気軽に質問してみましょう。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'RACK' },
      { hid: 'og:title', property: 'og:title', content: 'RACK｜ファッション情報専門Q＆Aサイト' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.rack-fashion.com/' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.rack-fashion.com/logo_rack_ogp_for-sns.png' },
      { hid: 'og:description', property: 'og:description', content: 'RACKはファッション情報に特化したQ＆Aサイトです。服の着こなしや流行りのブランドについてなど、ファッションに関して知りたいことを気軽に質問してみましょう。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/auth',
    'plugins/axios',
    'plugins/my-inject',
    'plugins/nuxt-client-init'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/@nuxtjs/vuetify
    '@nuxtjs/vuetify',
    // Doc: https://typescript.nuxtjs.org/ja/
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Doc: https://www.npmjs.com/package/nuxt-i18n
    '@nuxtjs/i18n'
  ],

  // 環境変数の呼び出し（アプリ名など、アプリ全体で呼び出したい変数は「.env」ファイルに設定する）
  publicRuntimeConfig: {
    appName: process.env.APP_NAME
  },

  // すべてのページで、layoutsやpagesよりも先に読み込む
  router: {
    middleware: ['silent-refresh-token']
  },

  // Doc: https://nuxtjs.org/ja/docs/configuration-glossary/configuration-servermiddleware/
  serverMiddleware: [
    '~/server/redirect-ssl'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // 環境変数API_URLが優先される
    // baseURL: 'http://localhost:3000'
    // クロスドメインで認証情報を共有する
    // Doc: https://axios.nuxtjs.org/options/#credentials
    credentials: true
  },

  vuetify: {
    // // カスタムCSSのファイルパス
    // customVariables: ['~/assets/style/variables.scss'],
    // // カスタムCSSを有効にするフラグ
    // // Doc: https://vuetifyjs.com/en/features/sass-variables/#nuxt-install
    // treeShake: true,
    // theme: {
    //   themes: {
    //     light: {
    //       primary: '4080be',
    //       info: '4fc1e9',
    //       success: '44d69e',
    //       warning: 'feb65e',
    //       error: 'fb8678',
    //       background: 'f6f6f4',
    //       black: '222',
    //       appblue: '1c6ecd'
    //     }
    //   }
    // }
  },

  // 汎用CSSの読み込み
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/style.scss'
  ],

  // カスタムCSSの読み込み（変数・mixinのみ）
  // Doc: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      '~/assets/style/01-foundation/01-variable/_variable.scss',
      '~/assets/style/01-foundation/02-mixin/_mixin.scss',
      '~/assets/style/01-foundation/03-function/_function.scss'
    ]
  },

  // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
  i18n: {
    // 対応言語の指定
    locales: ['ja', 'en'],
    // デフォルトで使用する言語を指定
    defaultLocale: 'ja',
    // no_prefix => ルート名に__jaを追加しない
    strategy: 'no_prefix',
    // Doc: https://kazupon.github.io/vue-i18n/api/#properties
    vueI18n: {
      // 翻訳対象のキーがない場合に参照される言語
      // "login": "ログイン"(ja)
      fallbackLocale: 'ja',
      // true => i18nの警告を完全に表示しない（default: false）
      // silentTranslationWarn: true,
      // フォールバック時に警告を発生させる（default: false）
      // true => 警告を発生させない（翻訳のキーが存在しない場合のみ警告）
      silentFallbackWarn: true,
      // 翻訳データ
      messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
      }
    }
  },

  // 「ランタイムlint」の有効化（ファイル保存後にESLintを実行する）
  typescript: {
    typeCheck: {
      eslint: {
        files: './src/**/*.{ts,js,vue}'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
