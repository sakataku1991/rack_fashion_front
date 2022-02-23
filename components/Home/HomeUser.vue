<template>
  <div
    id="user"
  >
    <!-- 「ユーザー」の一覧 -->
    <v-container>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          :sm="container.sm"
          :md="container.md"
        >
          <v-card-title>
            すべてのユーザー
          </v-card-title>

          <v-divider
            class="mb-4"
          />

          <v-data-table
            :headers="tableHeaders"
            :items="recentUsers"
            item-key="id"
            hide-default-footer
          >
            <template
              #[`item.title`]="{ item }"
            >
              <nuxt-link
                :to="$my.userMypageLinkTo(item.author_rack_id)"
                class="text-decoration-none"
              >
                {{ item.title }}
              </nuxt-link>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>

    <!-- TODO 「ページネーション」をここに追加 -->
  </div>
</template>

<script>
export default {
  name: 'ComponentsHomeUser',
  layout ({ store }) {
    return store.state.loggedIn ? 'loggedIn' : 'welcome'
  },
  data () {
    return {
      container: {
        sm: 10,
        md: 8
      },
      card: {
        sm: 6,
        md: 4,
        height: 120,
        elevation: 4
      },
      tableHeaders: [
        {
          text: 'ユーザー名',
          value: 'name'
        },
        {
          text: 'RACK ID',
          value: 'rack_id'
        },
        {
          text: 'メールアドレス',
          value: 'email'
        },
        {
          text: '認証',
          value: 'activated'
        }
      ]
    }
  },
  computed: {
    recentUsers () {
      const copyUsers = Array.from(this.$store.state.user.list)
      return copyUsers.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) { return -1 }
        if (a.updatedAt < b.updatedAt) { return 1 }
        return 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#user {
}
</style>
