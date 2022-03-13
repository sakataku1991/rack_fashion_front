<template>
  <v-app>
    <div id="wrapper" class="wrapper">
      <before-login-app-bar />
      <app-toaster />
      <article class="Content">
        <div class="">
          <div class="pageContainer PageSingleQuestion">
            <!-- <before-login-app-menu /> -->
            <main id="Main" class="Main">
              <div class="contentBoxPc">
                <div class="Main__content">
                  <nuxt />
                </div>
              </div>
            </main>
            <!-- <before-login-app-sidebar /> -->
            <div class="Recommend">
              <!-- 同じアイテムカテゴリーの質問 -->
              <recommend-same-category-questions
                class="Recommend__section"
              />
              <!-- カテゴリーから質問を探す -->
              <recommend-all-categories
                class="Recommend__section"
              />
              <!-- 最近投稿された質問 -->
              <recommend-latest-questions
                class="Recommend__section"
              />
            </div>
          </div>
        </div>
      </article>
      <app-footer />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsQuestion',
  middleware: ['get-question-list', 'get-question-current']
}
</script>

<style lang="scss" scoped>
.Content {
  @include sp {
  };
  @include pc {
  };
}
.pageContainer {
  @include sp {
    padding: 57px 0 0px;
  };
  @include pc {
    padding: 65px 0 40px;
  };
}
.Main {
  background-color: $gray_f4;
  @include sp {
    padding: 24px 0 40px;
  };
  @include pc {
    padding: 56px 0 64px;
  };
}
.Recommend {
  @include sp {
  };
  @include pc {
  };
}
.Recommend__section {
  @include sp {
  };
  @include pc {
  };
}
.Recommend__section + .Recommend__section {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
</style>
