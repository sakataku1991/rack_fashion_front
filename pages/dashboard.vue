<template>
  <div id="Dashboard" class="Dashboard">
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'PagesDashboard',
  layout: 'dashboard',
  // ログインしていないとアクセスできないようにする設定
  middleware: ['authentication'],
  // アクセスしてほしくないページ（ディレクトリ）のアクセス制限
  validate ({ route }) {
    // 「dashboard」ページへのアクセス制限
    return route.name !== 'dashboard'
  }
}
</script>

<style lang="scss" scoped>
// ダッシュボード全体
.Dashboard {
  @include sp {
  };
  @include pc {
  };
}
</style>
