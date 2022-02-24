<template>
  <section class="section News">
    <div class="News__content">
      <div class="News__newsArticles">
        <ul class="News__newsList">
          <li
            v-for="n in 12"
            :key="n"
            class="News__newsListItem"
          >
            <card-news />
          </li>
        </ul>
      </div>
      <div class="News__newsArticlesPager">
        <pager />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesNews',
  layout: 'news'
}
</script>

<style lang="scss" scoped>
.News__newsArticles {
  @include sp {
  };
  @include pc {
  };
}
.News__newsList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 32px 16px;
  };
  @include pc {
    gap: 56px 32px;
  };
}
.News__newsListItem {
  @include sp {
    width: flexBox(2, 16px);
  };
  @include pc {
    flex: 1;
    min-width: 208px;
    width: 100%;
  };
}
.News__newsArticles + .News__newsArticlesPager {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-top: 48px;
  };
}
.News__newsArticlesPager {
  @include sp {
  };
  @include pc {
  };
}
</style>
