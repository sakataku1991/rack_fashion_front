<template>
  <v-app-bar
    app
    dark
  >
    <app-logo />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items
      class="ml-2"
    >
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ComponentsHomeAppBar',
  // 環境変数の呼び出し
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data ({ $config: { appName } }) {
    return {
      appName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
