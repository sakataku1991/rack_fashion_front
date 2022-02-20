<template>
  <div
    id="question"
  >
    <v-container
      fill-height
    >
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="12"
          :sm="container.sm"
          :md="container.md"
        >

          <v-divider
            dark
            class="mb-4"
          />

          <!-- 「質問」の追加 -->
          <v-row
            align="center"
          >
            <v-col
              cols="12"
              :sm="card.sm"
              :md="card.md"
            >
              <v-btn
                block
                :height="card.height"
                :elevation="card.elevation"
              >
                <div>
                  <v-icon
                    size="24"
                    color="myblue"
                    class="my-2"
                  >
                    mdi-plus
                  </v-icon>
                  <div
                    class="caption myblue--text"
                  >
                    質問を追加
                  </div>
                </div>
              </v-btn>
            </v-col>

            <!-- 最近の質問 -->
            <v-col
              v-for="(question, i) in recentQuestions.slice(0, 2)"
              :key="`card-question-${i}`"
              cols="12"
              :sm="card.sm"
              :md="card.md"
            >
              <v-card
                block
                :height="card.height"
                :elevation="card.elevation"
                :to="$my.questionLinkTo(question.author_rack_id)"
                class="v-btn text-capitalize"
              >
                <v-card-title
                  class="pb-1 d-block text-truncate"
                >
                  {{ question.title }}
                </v-card-title>
                <v-card-text
                  class="caption"
                >
                  <v-icon
                    size="14"
                  >
                    mdi-update
                  </v-icon>
                  {{ $my.dateFormat(question.updatedAt) }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- すべての「質問」 -->
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
            すべての質問
          </v-card-title>

          <v-divider
            class="mb-4"
          />

          <v-data-table
            :headers="tableHeaders"
            :items="recentQuestions"
            item-key="id"
            hide-default-footer
          >
            <template
              #[`item.title`]="{ item }"
            >
              <nuxt-link
                :to="$my.questionLinkTo(item.author_rack_id)"
                class="text-decoration-none"
              >
                {{ item.title }}
              </nuxt-link>
            </template>
            <template
              #[`item.updatedAt`]="{ item }"
            >
              {{ $my.dateFormat(item.updatedAt) }}
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
  name: 'ComponentsHomeQuestion',
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
          text: '質問のタイトル',
          value: 'title'
        },
        {
          text: '更新日',
          width: 150,
          value: 'updatedAt'
        }
      ]
    }
  },
  computed: {
    recentQuestions () {
      const copyQuestions = Array.from(this.$store.state.question.list)
      return copyQuestions.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) { return -1 }
        if (a.updatedAt < b.updatedAt) { return 1 }
        return 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#question {
}
</style>
