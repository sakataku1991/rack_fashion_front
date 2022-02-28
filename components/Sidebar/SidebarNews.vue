<template>
  <section class="SidebarItem SidebarNews">
    <div class="SidebarNews__news">
      <h2 class="SidebarNews__newsTitle">
        運営からのお知らせ
      </h2>
      <div class="SidebarNews__newsArticles">
        <ul class="SidebarNews__newsList">
          <li
            v-for="n in 3"
            :key="n"
            class="SidebarNews__newsListItem"
          >
            <card-news />
          </li>
        </ul>
        <p class="SidebarNews__newsMore">
          <nuxt-link to="/news" class="SidebarNews__newsMoreLink" ontouchstart="">
            お知らせの一覧はこちら >>
          </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsSidebarAboutBanner'
}
</script>

<style lang="scss" scoped>
.SidebarNews {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNews__news {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNews__newsTitle {
  font-weight: bold;
  @include sp {
    font-size: 1.6rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
  };
}
.SidebarNews__newsTitle + .SidebarNews__newsArticles {
  @include sp {
    margin-top: 10px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.SidebarNews__newsArticles {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNews__newsList {
  @include sp {
    border-bottom: 1px solid $gray_e4;
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-bottom: 1px solid $gray_e4;
    border-top: 1px solid $gray_e4;
  };
}
.SidebarNews__newsListItem {
  @include sp {
  };
  @include pc {
  };
}
.SidebarNews__newsListItem + .SidebarNews__newsListItem {
  @include sp {
    border-top: 1px solid $gray_e4;
  };
  @include pc {
    border-top: 1px solid $gray_e4;
  };
}
.SidebarNews__newsList + .SidebarNews__newsMore {
  @include sp {
    margin-top: 18px;
  };
  @include pc {
    margin-top: 14px;
  };
}
.SidebarNews__newsMore {
  text-align: right;
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.SidebarNews__newsMoreLink {
  color: $black;
  text-decoration: underline;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
</style>
