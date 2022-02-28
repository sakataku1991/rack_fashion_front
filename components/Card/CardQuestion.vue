<template>
  <article class="card-question-article">
    <nuxt-link
      to="/question"
      class="card-question-article-link"
      ontouchstart=""
    >
      <div class="card-question-badge">
        <badge-comment />
      </div>
      <div class="card-question-thumbnail">
        <img
          :src="image_src_picture"
          alt="「質問」のサムネイル画像"
          class="card-question-thumbnail-img"
        >
      </div>
      <div class="card-question-article-info">
        <h2 class="card-question-title">
          今風なサイズ感の色落ちデニムを探しています
        </h2>
        <div class="card-question-category">
          <p class="category-text">
            パンツ
          </p>
        </div>
        <div class="card-question-author-avatar-and-date">
          <p class="card-question-author-avatar">
            <img
              :src="image_src_avatar"
              alt="sakataku199のアイコン"
              class="card-question-author-avatar-img"
              height="22"
              width="22"
            >
          </p>
          <div class="card-question-date-and-like">
            <p class="card-question-date">
              <time itemprop="datePublished" datetime="2022-01-01" class="card-question-date-time">2022/01/01</time>
            </p>
            <div class="card-question-like">
              <button-like />
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'ComponentsCardQuestion',
  data () {
    return {
      image_src_avatar: require('@/assets/image/icon_sakataku1991.png'),
      image_src_picture: require('@/assets/image/thum/thum_post-question_dummy.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-question-article {
  position: relative;
  z-index: 0;
  @include sp {
  };
  @include pc {
  };
}
.card-question-article-link {
  display: block;
  z-index: 0;
  @include sp {
  };
  @include pc {
  };
}
.card-question-badge {
  position: absolute;
  width: 100%;
  z-index: 1;
  @include sp {
    left: 3px;
    top: 3px;
  };
  @include pc {
    left: 4px;
    top: 4px;
  };
}
.badge-comment-wrapper {
  @include sp {
    max-width: calc(100% - calc(3px + 3px));
  };
  @include pc {
    max-width: calc(100% - calc(4px + 4px));
  };
}
.card-question-thumbnail {
  @include sp {
  };
  @include pc {
  };
}
.card-question-thumbnail-img {
  @include sp {
    aspect-ratio: 3 / 2;
    border-radius: 6px;
    width: 100%;
  };
  @include pc {
    aspect-ratio: 16 / 9;
    border-radius: 6px;
    width: 100%;
  };
}
.card-question-thumbnail + .card-question-article-info {
  @include sp {
    margin-top: 10px;
  };
  @include pc {
    margin-top: 12px;
  };
}
.card-question-article-info {
  @include sp {
  };
  @include pc {
  };
}
.card-question-title {
  color: $black;
  font-weight: bold;
  @include sp {
    font-size: 1.3rem;
    line-height: 1.6;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
.card-question-title + .card-question-category {
  @include sp {
    margin-top: 6px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.card-question-category {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.category-text {
  color: $black;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.5;
  };
}
.card-question-category + .card-question-author-avatar-and-date {
  @include sp {
    margin-top: 6px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.card-question-author-avatar-and-date {
  align-items: center;
  display: flex;
  @include sp {
    gap: 6px;
  };
  @include pc {
    gap: 8px;
  };
}
.card-question-author-avatar {
  @include sp {
  };
  @include pc {
  };
}
.card-question-author-avatar-img {
  @include sp {
    border-radius: 50%;
  };
  @include pc {
    border-radius: 50%;
  };
}
.card-question-date-and-like {
  @include sp {
    width: calc(100% - calc(24px + 8px));
  };
  @include pc {
    width: calc(100% - calc(24px + 8px));
  };
}
.card-question-date-and-like {
  align-items: center;
  display: flex;
  justify-content: space-between;
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.card-question-date {
  @include sp {
    line-height: 1;
    margin-top: -2px;
  };
  @include pc {
    line-height: 1;
    margin-top: -2px;
  };
}
.card-question-date-time {
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
.card-question-date + .card-question-like {
  @include sp {
    margin-left: 12px;
  };
  @include pc {
    margin-left: 12px;
  };
}
.card-question-like {
  z-index: 1;
  @include sp {
  };
  @include pc {
  };
}
.btn-like-wrapper {
  @include sp {
    max-width: 52px;
  };
  @include pc {
    max-width: 52px;
  };
}
// ホバー時の効果（テキスト）
.card-question-article-link {
  .card-question-title {
    transition: 0.3s;
  }
  @include sp {
    transition: 0.3s;
    &:active {
      transition: 0.05s;
      .card-question-title {
        color: $blue;
        transition: 0.05s;
      }
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      transition: 0.05s;
      .card-question-title {
        color: $blue;
        transition: 0.05s;
      }
    }
  };
}
// ホバー時の効果（画像）
.card-question-article-link {
  .card-question-thumbnail-img {
    transition: .3s;
  }
  @include sp {
    &:active {
      .card-question-thumbnail-img {
        filter: opacity(64%);
        transition: .1s;
      }
    }
  };
  @include pc {
    &:hover {
      .card-question-thumbnail-img {
        filter: opacity(64%);
        transition: .1s;
      }
    }
  };
}
</style>
