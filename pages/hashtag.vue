<template>
  <section class="section Hashtag">
    <div class="Hashtag__content">
      <div class="Hashtag__hashtag">
        <h2 class="Hashtag__hashtagTitle title-2">
          人気のタグ
        </h2>
        <ul class="Hashtag__hashtagList">
          <li
            v-for="n in 12"
            :key="n"
            class="Hashtag__hashtagListItem"
          >
            <hashtag
              class="Hashtag__hashtagListItemLink"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesHashtag',
  layout: 'category-hashtag'
}
</script>

<style lang="scss" scoped>
.Hashtag {
  @include sp {
  };
  @include pc {
  };
}
.Hashtag__content {
  @include sp {
  };
  @include pc {
  };
}
// 「ハッシュタグ」
.Hashtag__hashtag {
  @include sp {
  };
  @include pc {
  };
}
// 見出し
.Hashtag__hashtagTitle {
  @include sp {
  };
  @include pc {
  };
}
// 「ハッシュタグ」の一覧
.Hashtag__hashtagTitle + .Hashtag__hashtagList {
  @include sp {
    margin-top: 24px;
  };
  @include pc {
    margin-top: 32px;
  };
}
.Hashtag__hashtagList {
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 16px 16px;
  };
  @include pc {
    gap: 32px 32px;
  };
}
.Hashtag__hashtagListItem {
  @include sp {
    width: flexBox(2, 16px);
  };
  @include pc {
    max-width: 128px;
    width: 100%;
  };
}
.Hashtag__hashtagListItemLink {
  @include sp {
  };
  @include pc {
  };
}
</style>
