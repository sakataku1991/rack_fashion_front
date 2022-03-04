<template>
  <div class="card-userFollow">
    <div class="card-userFollow-userAvatar">
      <button-user-avatar-link
        class="card-userFollow-userAvatar-btn"
      />
    </div>
    <div class="card-userFollow-userNameActionButton-and-profile">
      <div class="card-userFollow-userName-and-actionButton">
        <div class="card-userFollow-userName">
          <nuxt-link
            to="/rack_id0/items/questions"
            class="card-userFollow-userName-userName"
            ontouchstart=""
          >
            さかたく
          </nuxt-link>
          <div class="card-userFollow-userName-rackID">
            <p class="card-userFollow-userName-rackID-text">
              @sakataku199
            </p>
            <badge-follow class="card-userFollow-userName-rackID-text-badge" />
          </div>
        </div>
        <div class="card-userFollow-actionButton">
          <!-- 「フォロー／フォロー中」ボタン -->
          <button-follow
            class="card-userFollow-actionButton-followBtn"
          />
        </div>
      </div>
      <div class="card-userFollow-userBio-profile">
        <p class="card-userFollow-userBio-profile-text">
          ジーンズが好きです。90年代の古着とか探しています。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsCardUserFollow',
  data () {
    return {
      image_src: require('@/assets/image/thum/thum_post-comment_dummy.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-userFollow {
  background-color: $white;
  display: flex;
  @include sp {
    gap: 10px;
    padding: 12px 5vw 14px;
  };
  @include pc {
    gap: 12px;
    padding: 12px 16px 12px;
  };
}
// ユーザーアイコン
.card-userFollow-userAvatar {
  @include sp {
  };
  @include pc {
  };
}
.card-userFollow-userAvatar-btn {
  @include sp {
  };
  @include pc {
  };
}
::v-deep .card-userFollow-userAvatar-btn .btn-userAvatar-img {
  @include sp {
    height: 48px;
    width: 48px;
  };
  @include pc {
    height: 48px;
    width: 48px;
  };
}
// 「名前」＋「RACK ID」＋「フォロー」ボタン
.card-userFollow-userNameActionButton-and-profile {
  @include sp {
    margin-top: -4px;
    width: calc(100% - calc(48px + 10px));
  };
  @include pc {
    margin-top: -1px;
    width: calc(100% - calc(48px + 12px));
  };
}
// 「名前」＋「RACK ID」＋「フォロー」ボタン
.card-userFollow-userName-and-actionButton {
  align-items: center;
  display: flex;
  justify-content: space-between;
  @include sp {
    gap: 12px;
  };
  @include pc {
    gap: 14px;
  };
}
// 「名前」＋「RACK ID」
.card-userFollow-userName {
  @include sp {
    width: calc(100% - calc(112px + 12px));
  };
  @include pc {
    width: calc(100% - calc(120px + 14px));
  };
}
// 「名前」
.card-userFollow-userName-userName {
  color: $black;
  display: inline-block;
  font-weight: bold;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.3;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.3;
  };
}
// ホバー時の効果
.card-userFollow-userName-userName {
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
// 「RACK ID」
.card-userFollow-userName-userName + .card-userFollow-userName-rackID {
  @include sp {
    margin-top: -2px;
  };
  @include pc {
    margin-top: -4px;
  };
}
.card-userFollow-userName-rackID {
  @include sp {
    line-height: 1;
  };
  @include pc {
    align-items: center;
    display: flex;
    line-height: 1;
  };
}
.card-userFollow-userName-rackID-text {
  color: $gray_7;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
    padding-top: 3px;
  };
}
// 「フォローされています」バッヂ
.card-userFollow-userName-rackID-text + .card-userFollow-userName-rackID-text-badge {
  @include sp {
    margin-top: 5px;
  };
  @include pc {
    margin-left: 4px;
  };
}
.card-userFollow-userName-rackID-text-badge {
  @include sp {
    line-height: 12px;
  };
  @include pc {
    line-height: 12px;
  };
}
// 「フォロー／フォロー中」ボタン
.card-userFollow-actionButton {
  @include sp {
  };
  @include pc {
  };
}
.card-userFollow-actionButton-followBtn {
  @include sp {
    width: 112px;
  };
  @include pc {
    width: 120px;
  };
}
// プロフィールの文章
.card-userFollow-userName-and-actionButton + .card-userFollow-userBio-profile {
  @include sp {
    margin-top: 6px;
  };
  @include pc {
    margin-top: 6px;
  };
}
.card-userFollow-userBio-profile {
  @include sp {
  };
  @include pc {
  };
}
.card-userFollow-userBio-profile-text {
  @include sp {
    font-size: 1.4rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
</style>
