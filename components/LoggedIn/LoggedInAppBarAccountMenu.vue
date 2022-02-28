<template>
  <v-menu
    app
    offset-x
    offset-y
    max-width="200"
  >
    <template
      #activator="{ on }"
    >
      <v-btn
        icon
        v-on="on"
      >
        <v-icon>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </template>
    <v-list
      dense
    >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>
            {{ $auth.user.name }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <template
        v-for="(menu, i) in menus"
      >
        <v-divider
          v-if="menu.divider"
          :key="`menu-divider-${i}`"
        />

        <v-list-item
          :key="`menu-list-${i}`"
          :to="{ name: menu.name }"
        >
          <v-list-item-icon
            class="mr-2"
          >
            <v-icon
              size="22"
              v-text="menu.icon"
            />
          </v-list-item-icon>
          <v-list-item-title>
            {{ $my.pageTitle(menu.name) }}
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LoggedInAppBarAccountMenu',
  data () {
    return {
      menus: [
        { name: 'account-questions', icon: 'mdi-edit' },
        { name: 'account-answers', icon: 'mdi-account-cog' },
        { name: 'account-tickets', icon: 'mdi-account-cog' },
        { name: 'account-liked', icon: 'mdi-account-cog', divider: true },
        { name: 'account-answers-can-be-viewed', icon: 'mdi-account-cog' },
        { name: 'account-browsing-history', icon: 'mdi-account-cog' },
        { name: 'account-settings', icon: 'mdi-account-cog', divider: true },
        // { name: 'account-password', icon: 'mdi-lock-outline' },
        { name: 'logout', icon: 'mdi-logout-variant', divider: true }
      ]
    }
  }
}
</script>
