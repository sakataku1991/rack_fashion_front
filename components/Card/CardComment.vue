<template>
  <article class="card-comment">
    <aside class="card-comment-author">
      <button-user-avatar-link
        class="card-comment-author-avatar"
      />
      <div class="card-comment-author-and-date">
        <nuxt-link
          to="/mypage/items/questions"
          class="card-comment-author-user-name"
          ontouchstart=""
        >
          さかたく
        </nuxt-link>
        <p class="card-comment-author-rack-id-and-posting-time">
          <span class="card-comment-author-rack-id">@sakataku1991</span><span class="card-comment-author-posting-time">・2時間前</span>
        </p>
      </div>
    </aside>
    <div class="card-comment-content">
      <div class="card-comment-thumbnail">
        <img
          :src="image_src"
          alt="「コメント」の添付画像"
          class="card-comment-thumbnail-img"
        >
      </div>
      <div class="card-comment-text-and-link">
        <p class="card-comment-text">
          CIOTAのストレートデニム（ミディアムブルー）はおすすめですよ〜。サイズは32以上が良いと思います。
        </p>
        <div class="card-comment-link">
          <dl class="card-comment-link-def-list">
            <div class="card-comment-link-def-list-item">
              <dt class="card-comment-link-def-list-item-title">
                参考リンク：
              </dt>
              <dd class="card-comment-link-def-list-item-data">
                <a href="https://www.diverse-web.com/products/detail221667.html" target="_blank" rel="noopener noreferrer" class="card-comment-link-def-list-item-data-link text-link" ontouchstart="">https://www.diverse-web.com/products/detail221667.html</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ComponentsCardComment',
  data () {
    return {
      image_src: require('@/assets/image/thum/thum_post-comment_dummy.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-comment {
  @include sp {
    padding: 12px 12px 22px;
  };
  @include pc {
    padding: 16px 16px 20px;
  };
}
.card-comment-author {
  align-items: center;
  display: flex;
  @include sp {
    gap: 8px;
  };
  @include pc {
    gap: 8px;
  };
}
.card-comment-author-avatar {
  @include sp {
    margin: 0;  // TODO 後で消す
    padding: 0;  // TODO 後で消す
  };
  @include pc {
    margin: 0;  // TODO 後で消す
    padding: 0;  // TODO 後で消す
  };
}
.card-comment-author-and-date {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @include sp {
    gap: 1px 8px;
    width: calc(100% - calc(32px + 8px));
  };
  @include pc {
    gap: 1px 8px;
    width: calc(100% - calc(32px + 8px));
  };
}
.card-comment-author-user-name {
  color: $black;
  font-weight: bold;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1.5;
  };
}
// ホバー時の効果
.card-comment-author-user-name {
  @include sp {
    &:active {
      color: $blue;
      text-decoration: underline !important;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
      text-decoration: underline !important;
    }
  };
}
.card-comment-author-rack-id-and-posting-time {
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
    padding-bottom: 1px;
    width: 100%;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
    padding-bottom: 1px;
    width: 100%;
  };
}
.card-comment-author-rack-id {
  @include sp {
  };
  @include pc {
  };
}
.card-comment-author-posting-time {
  @include sp {
  };
  @include pc {
  };
}
.card-comment-author + .card-comment-content {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 12px;
  };
}
.card-comment-content {
  display: flex;
  @include sp {
    gap: 12px;
  };
  @include pc {
    gap: 16px;
  };
}
.card-comment-thumbnail {
  @include sp {
  };
  @include pc {
  };
}
.card-comment-thumbnail-img {
  @include sp {
    border-radius: 6px;
    height: 48px;
    width: 48px;
  };
  @include pc {
    border-radius: 6px;
    height: 64px;
    width: 64px;
  };
}
.card-comment-text-and-link {
  @include sp {
    margin-top: -5px;
    width: calc(100% - calc(48px + 12px));
  };
  @include pc {
    margin-top: -5px;
    width: calc(100% - calc(64px + 16px));
  };
}
.card-comment-text {
  @include sp {
    font-size: 1.4rem;
    line-height: 1.8;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.6;
  };
}
.card-comment-text + .card-comment-link {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.card-comment-link {
  @include sp {
  };
  @include pc {
  };
}
.card-comment-link-def-list {
  @include sp {
  };
  @include pc {
  };
}
.card-comment-link-def-list-item {
  @include sp {
  };
  @include pc {
  };
}
.card-comment-link-def-list-item-title {
  color: $gray_7;
  font-weight: normal;
  @include sp {
    font-size: 1.0rem;
    line-height: 1;
  };
  @include pc {
    font-size: 1.2rem;
    line-height: 1;
  };
}
.card-comment-link-def-list-item-title + .card-comment-link-def-list-item-data {
  @include sp {
    margin-top: 2px;
  };
  @include pc {
    margin-top: 2px;
  };
}
.card-comment-link-def-list-item-data {
  @include sp {
    line-height: 1.2;
  };
  @include pc {
    line-height: 1.2;
  };
}
.card-comment-link-def-list-item-data-link {
  @include sp {
  };
  @include pc {
  };
}
</style>
