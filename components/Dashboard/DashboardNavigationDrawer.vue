<template>
  <v-navigation-drawer
    v-model="setDrawer"
    app
    clipped
    :mobile-breakpoint="mobileBreakpoint"
  >
    <v-list>
      <!-- 「閉じる」ボタン -->
      <template
        v-if="isBreakpoint"
      >
        <v-list-item
          @click="$emit('update:drawer', false)"
        >
          <v-list-item-content
            class="text-center"
          >
            <v-list-item-action-text
              class="d-flex justify-center align-center"
            >
              <v-icon>
                mdi-chevron-double-left
              </v-icon>
              閉じる
            </v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>

      <!-- ナビゲーションメニュー -->
      <v-list-item
        v-for="(nav, i) in navMenus"
        :key="`nav-${i}`"
        :to="(nav.path)"
      >
        <v-list-item-icon>
          <v-icon
            v-text="nav.icon"
          />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ $my.pageTitle(nav.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'ComponentsDashboardNavigationDrawer',
  props: {
    drawer: {
      type: Boolean,
      default: null
    }
  },
  data () {
    return {
      mobileBreakpoint: 960,
      navMenus: [
        { name: 'dashboard-settings', path: 'settings', icon: 'mdi-account' },
        { name: 'dashboard-settings-account', path: 'settings/account' },
        { name: 'dashboard-settings-profile', path: 'settings/profile' },
        { name: 'dashboard-relationships', path: 'relationships', icon: 'mdi-emoticon' },
        { name: 'dashboard-relationships-following', path: 'relationships/following' },
        { name: 'dashboard-relationships-followers', path: 'relationships/followers' },
        { name: 'dashboard-items', path: 'items', icon: 'mdi-file-document' },
        { name: 'dashboard-items-questions', path: 'items/questions' },
        { name: 'dashboard-items-comments', path: 'items/comments' },
        { name: 'dashboard-items-tickets', path: 'items/tickets' },
        { name: 'dashboard-items-liked', path: 'items/liked' },
        { name: 'dashboard-items-comments_can_be_viewed', path: 'items/comments_can_be_viewed' },
        { name: 'dashboard-items-browsing_history', path: 'items/browsing_history' },
        { name: 'dashboard-informations', path: 'informations', icon: 'mdi-bell' },
        { name: 'dashboard-informations-notifications', path: 'informations/notifications' },
        { name: 'dashboard-informations-news', path: 'informations/news' },
        { name: 'logout', path: 'logout', icon: 'mdi-logout' }
      ]
    }
  },
  computed: {
    setDrawer: {
      get () { return this.drawer },
      set (newVal) { return this.$emit('update:drawer', newVal) }
    },
    isBreakpoint () {
      const windowWidth = this.$vuetify.breakpoint.width
      return this.mobileBreakpoint > windowWidth
    }
  }
}
</script>
