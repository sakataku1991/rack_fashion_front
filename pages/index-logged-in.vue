<template>
  <v-app>
    <v-img
      id="scroll-top"
      dark
      src="https://picsum.photos/id/20/1920/1080?blur=5"
      gradient="to top right, rgba(19,84,122,.6), rgba(128,208,199,.9)"
      :height="imgHeight"
    >
      <v-row
        align="center"
        justify="center"
        :style="{ height: `${imgHeight}px` }"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <h1
            class="display-1 mb-4"
          >
            RACKへようこそ！
          </h1>
          <h4
            class="subheading"
            :style="{ letterSpacing: '5px' }"
          >
            {{ $store.state.user.current }}
          </h4>
          <nuxt-link
            :to="currentUserRackID + '/mypage'"
            class="text-link"
            ontouchstart=""
          >
            マイページ
          </nuxt-link>
        </v-col>
      </v-row>
    </v-img>

    <v-sheet>
      <v-container
        fluid
        :style="{ maxWidth: '1280px' }"
      >
        <v-row
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
          <v-col
            :id="menu.title"
            cols="12"
          >
            <v-card
              flat
            >
              <v-card-title
                class="justify-center display-1"
              >
                {{ $t(`menus.${menu.title}`) }}
              </v-card-title>
              <v-card-text
                class="text-center"
              >
                {{ menu.subtitle }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
          >
            <!-- 「:is」はコンポーネントに置き換わる -->
            <div
              :is="`home-${menu.title}`"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
// 「:is」でコンポーネントを呼び出す場合は、以下のようにコンポーネントを「import」して「components」する必要がある
import HomeUser from '~/components/Home/HomeUser'
import HomeQuestion from '~/components/Home/HomeQuestion'

export default {
  name: 'PagesIndexLoggedIn',
  layout: 'logged-in',
  components: {
    HomeUser,
    HomeQuestion
  },
  middleware: ['get-user-list'],
  async asyncData ({ $axios }) {
    let users = []
    await $axios.$get('/api/v1/users').then(res => (users = res))
    const userKeys = Object.keys(users[0] || {})
    return { users, userKeys }
  },
  data ({ $store }) {
    return {
      imgHeight: 500,
      menus: [
        { title: 'user', subtitle: 'ユーザーの一覧' },
        { title: 'question', subtitle: '質問の一覧' }
      ],
      // マイページのリンク
      currentUserRackID: $store.state.user.current.rack_id
    }
  }
}
</script>
