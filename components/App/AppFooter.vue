<template>
  <footer id="Footer" class="Footer">
    <div class="contentBoxSp contentBoxMaxPc">
      <div class="Footer__content">
        <div class="Footer__brandInfo">
          <div class="Footer__brandCI">
            <p class="Footer__brandCILogo">
              <link-logo-white
                class="Footer__brandCILogoLink"
              />
            </p>
            <p class="Footer__brandCIText">
              ファッション情報専門Q＆Aサイト
            </p>
          </div>
          <div class="Footer__brandSNS">
            <ul class="Footer__brandSNSList">
              <li class="Footer__brandSNSListItem">
                <button-twitter-circle />
              </li>
              <li class="Footer__brandSNSListItem">
                <button-facebook-circle />
              </li>
            </ul>
          </div>
          <p class="Footer__brandMediaKit">
            <nuxt-link
              to="/media-kit"
              class="Footer__brandMediaKitLink"
              ontouchstart=""
            >
              メディアキット
            </nuxt-link>
          </p>
        </div>
        <div class="Footer__sitemap">
          <div class="Footer__sitemapUnit">
            <ul class="Footer__sitemapList">
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/about"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  はじめての方へ
                </nuxt-link>
              </li>
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/faq"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  よくある質問
                </nuxt-link>
              </li>
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/administrator"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  運営者
                </nuxt-link>
              </li>
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/news"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  お知らせ
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="Footer__sitemapUnit">
            <ul class="Footer__sitemapList">
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/guideline"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  コミュニティガイドライン
                </nuxt-link>
              </li>
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/terms"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  利用規約
                </nuxt-link>
              </li>
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/privacy"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  プライバシーポリシー
                </nuxt-link>
              </li>
              <li class="Footer__sitemapListItem">
                <nuxt-link
                  to="/#"
                  class="Footer__sitemapListItemLink"
                  ontouchstart=""
                >
                  お問い合わせ
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Footer__copyright">
        <p class="FtCr__copyrightText">
          &copy; {{ copyRightYear }} {{ appName }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ComponentsAppFooter',
  data ({ $config: { appName } }) {
    return {
      appName,
      height: 32
    }
  },
  computed: {
    copyRightYear () {
      const beginningYear = 2022
      const thisYear = new Date().getFullYear()
      // 2021 < 2021
      return (beginningYear < thisYear)
        ? `${beginningYear} - ${thisYear}`
        : beginningYear
    }
  }
}
</script>

<style lang="scss" scoped>
// 「Twitter」ボタン
.btn-sns.-twitterCircle {
  color: $white;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-sns.-twitterCircle {
  @include sp {
    &:active {
      opacity: 0.7;
    }
  };
  @include pc {
    &:hover {
      opacity: 0.7;
    }
  };
}
// 「Facebook」ボタン
.btn-sns.-facebookCircle {
  color: $white;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-sns.-facebookCircle {
  @include sp {
    &:active {
      opacity: 0.7;
    }
  };
  @include pc {
    &:hover {
      opacity: 0.7;
    }
  };
}
</style>
