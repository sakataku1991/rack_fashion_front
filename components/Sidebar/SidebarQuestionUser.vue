<template>
  <section class="SidebarItem SidebarQuestionUser">
    <div class="SidebarQuestionUser__user">
      <div class="SidebarQuestionUser__userBio">
        <button-user-avatar-link />
        <div class="SidebarQuestionUser__userBioAuthor">
          <div class="SidebarQuestionUser__userBioAuthorName">
            <nuxt-link
              to="/mypage/items/questions"
              class="SidebarQuestionUser__userBioAuthorNameUserName"
              ontouchstart=""
            >
              さかたく
            </nuxt-link>
            <p class="SidebarQuestionUser__userBioAuthorNameRackId">
              @sakataku1991
            </p>
          </div>
          <div class="SidebarQuestionUser__userBioAuthorLinks">
            <ul class="SidebarQuestionUser__userBioAuthorLinksList">
              <li class="SidebarQuestionUser__userBioAuthorLinksListItem">
                <button-instagram />
              </li>
              <li class="SidebarQuestionUser__userBioAuthorLinksListItem">
                <button-twitter />
              </li>
              <li class="SidebarQuestionUser__userBioAuthorLinksListItem">
                <button-home />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="SidebarQuestionUser__userProfile">
        <p class="SidebarQuestionUser__userProfileText">
          ジーンズが好きです。90年代の古着とか探しています。
        </p>
      </div>
      <div class="SidebarQuestionUser__userFollow">
        <button-follow
          class="-black"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsSidebarQuestionUser'
}
</script>

<style lang="scss" scoped>
.SidebarQuestionUser {
  background-color: $white;
  @include sp {
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    padding: 12px 12px 14px 12px;
  };
  @include pc {
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba($black_rgb, .04);
    padding: 16px 16px 16px 16px;
  };
}
.SidebarQuestionUser__user {
  @include sp {
  };
  @include pc {
  };
}
// ユーザーのアイコンや名前など
.SidebarQuestionUser__userBio {
  display: flex;
  @include sp {
    gap: 8px;
  };
  @include pc {
    gap: 8px;
  };
}
// ユーザーアイコン
.btn-userAvatar {
  @include sp {
    height: 40px;  // TODO 後で消す
    margin: 0;  // TODO 後で消す
    padding: 0;  // TODO 後で消す
  };
  @include pc {
    height: 48px;  // TODO 後で消す
    margin: 0;  // TODO 後で消す
    padding: 0;  // TODO 後で消す
  };
}
::v-deep .btn-userAvatar-img {
  @include sp {
    height: 40px;
    width: 40px;
  };
  @include pc {
    height: 48px;
    width: 48px;
  };
}
.SidebarQuestionUser__userBioAuthor {
  @include sp {
    width: calc(100% - calc(40px + 8px));
  };
  @include pc {
    width: calc(100% - calc(48px + 8px));
  };
}
// 「名前」＋「RACK ID」
.SidebarQuestionUser__userBioAuthorName {
  @include sp {
  };
  @include pc {
  };
}
// 「名前」
.SidebarQuestionUser__userBioAuthorNameUserName {
  color: $black;
  display: inline-block;
  font-weight: bold;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.3;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.3;
  };
}
// ホバー時の効果
.SidebarQuestionUser__userBioAuthorNameUserName {
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
.SidebarQuestionUser__userBioAuthorNameUserName + .SidebarQuestionUser__userBioAuthorNameRackId {
  @include sp {
    margin-top: -3px;
  };
  @include pc {
    margin-top: -3px;
  };
}
.SidebarQuestionUser__userBioAuthorNameRackId {
  color: $gray_7;
  @include sp {
    font-size: 1.0rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.0rem;
    line-height: 1.4;
  };
}
// 各種リンク
.SidebarQuestionUser__userBioAuthorName + .SidebarQuestionUser__userBioAuthorLinks {
  @include sp {
    margin-top: 8px;
  };
  @include pc {
    margin-top: 8px;
  };
}
.SidebarQuestionUser__userBioAuthorLinks {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionUser__userBioAuthorLinksList {
  align-items: center;
  display: flex;
  @include sp {
    gap: 8px;
  };
  @include pc {
    gap: 8px;
  };
}
.SidebarQuestionUser__userBioAuthorLinksListItem {
  @include sp {
  };
  @include pc {
  };
}
.SidebarQuestionUser__userBioAuthorLinksListItemLink {
  @include sp {
  };
  @include pc {
  };
}
// 「instagram」ボタン
// 「twitter」ボタン
// 「home」ボタン
.btn.-icon {
  color: $gray_9;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn.-icon {
  @include sp {
    &:active {
      color: $blue;
    }
  };
  @include pc {
    &:hover {
      color: $blue;
    }
  };
}
// プロフィールの文章
.SidebarQuestionUser__userBio + .SidebarQuestionUser__userProfile {
  @include sp {
    margin-top: 10px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.SidebarQuestionUser__userProfile {
  @include sp {
    font-size: 1.2rem;
    line-height: 1.6;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.6;
  };
}
// 「Follow」ボタン
.SidebarQuestionUser__userProfile + .SidebarQuestionUser__userFollow {
  @include sp {
    margin-top: 12px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.SidebarQuestionUser__userFollow {
  @include sp {
  };
  @include pc {
  };
}
.btn-follow {
  @include sp {
    padding: 0px 0 2px;
    width: 80px;
  };
  @include pc {
    padding: 0px 0 2px;
    width: 88px;
  };
}
</style>
