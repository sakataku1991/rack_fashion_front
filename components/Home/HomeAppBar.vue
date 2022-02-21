<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="homeAppBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <!-- 子供コンポーネントに「@click」を追加する時は、「native」拡張子を付けること！ -->
    <app-logo
      @click.native="$vuetify.goTo('#scroll-top')"
    />
    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <v-toolbar-items
      class="ml-2 hidden-ipad-and-down"
    >
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        :class="{ 'hidden-sm-and-down': (menu.title === 'about') }"
        @click="$vuetify.goTo(`#${menu.title}`)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>

    <before-login-app-bar-signup-button />
    <before-login-app-bar-login-button />
    <before-login-app-bar-logout-button />

    <v-menu
      bottom
      nudge-left="110"
      nudge-width="100"
    >
      <template
        #activator="{ on }"
      >
        <v-app-bar-nav-icon
          class="hidden-ipad-and-up"
          v-on="on"
        />
      </template>
      <v-list
        dense
        class="hidden-ipad-and-up"
      >
        <v-list-item
          v-for="(menu, i) in menus"
          :key="`menu-list-${i}`"
          exact
          @click="$vuetify.goTo(`#${menu.title}`)"
        >
          <v-list-item-title>
            {{ $t(`menus.${menu.title}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  // 「$store」でVuex（index.js）の値を呼び出している
  data ({ $store }) {
    return {
      scrollY: 0,
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  },
  computed: {
    isScrollPoint () {
      return this.scrollY > (this.imgHeight - this.homeAppBarHeight)
    },
    toolbarStyle () {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 : 0
      return { color, elevation }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
