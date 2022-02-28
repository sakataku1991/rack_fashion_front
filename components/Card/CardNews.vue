<template>
  <article class="card-news-article">
    <nuxt-link
      to="/news-single"
      class="card-news-article-link"
      ontouchstart=""
    >
      <p class="card-news-date">
        <time itemprop="datePublished" datetime="2022-01-03" class="card-news-date-time">2022/01/03</time>
      </p>
      <h3 class="card-news-title">
        ユーザーへの通知機能を追加しました
      </h3>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'ComponentsCardNews'
}
</script>

<style lang="scss" scoped>
.card-news-article {
  @include sp {
  };
  @include pc {
  };
}
.card-news-article-link {
  display: block;
  @include sp {
    padding: 8px 0 12px;
  };
  @include pc {
    padding: 8px 0 12px;
  };
}
.card-news-date {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.card-news-date-time {
  color: $gray_9;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
  };
}
.card-news-date + .card-news-title {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 4px;
  };
}
.card-news-title {
  color: $black;
  font-weight: normal;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.4;
  };
}
// ホバー時の効果
.card-news-article-link {
  @include sp {
    &:active {
      .card-news-title {
        color: $blue;
        text-decoration: underline;
      }
    }
  };
  @include pc {
    &:hover {
      .card-news-title {
        color: $blue;
        text-decoration: underline;
      }
    }
  };
}
</style>
