<template>
  <v-app>

    <!-- 「ダッシュボード」のツールバー -->
    <logged-in-app-bar
      clipped-left
    >
      <template
        #navigation-toggle-button
      >
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
        />
      </template>
    </logged-in-app-bar>

    <!-- 「ダッシュボード」のドロワーメニュー -->
    <dashboard-navigation-drawer
      :drawer.sync="drawer"
    />

    <!-- 「ダッシュボード」のコンテンツ -->
    <v-main>
      <nuxt />
    </v-main>

    <!-- フッター -->
    <app-footer />
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsDashboard',
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
