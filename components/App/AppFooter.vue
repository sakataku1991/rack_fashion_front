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
                <link-text-tab
                  :linkTextTabContact="linkTextTabContact"
                  class="Footer__sitemapListItemLink"
                />
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
      height: 32,
      linkTextTabContact: {
        href: 'https://forms.gle/w6bRTyA7XhoGzBVM8', text: 'お問い合わせフォーム'
      }
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
// フッター全体
.Footer {
  background-color: $black;
  @include sp {
    padding: 0 0 0;
  };
  @include pc {
    padding: 0 0 0;
  };
}
// フッターの中身
.Footer__content {
  @include sp {
    padding: 48px 0 48px;
  };
  @include pc {
    display: flex;
    justify-content: space-between;
    padding: 56px 0 64px;
  };
}

// -----▼ フッターのサービス情報 .Footer__brandInfo ▼-----
.Footer__brandInfo {
  @include sp {
  };
  @include pc {
  };
}
// ロゴとテキスト
.Footer__brandCI {
  @include sp {
  };
  @include pc {
  };
}
.Footer__brandCILogo {
  @include sp {
  };
  @include pc {
  };
}
.Footer__brandCILogoLink {
  display: block;
  @include sp {
  };
  @include pc {
  };
}
.Footer__brandCILogoLinkImg {
  margin-left: 0;
  @include sp {
  };
  @include pc {
  };
}
.Footer__brandCILogo + .Footer__brandCIText {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 16px;
  };
}
.Footer__brandCIText {
  color: $white;
  @include sp {
    font-size: 1.3rem;
    line-height: 1;
  };
  @include pc {
    font-size: 1.3rem;
    line-height: 1;
  };
}
// SNSリンク
.Footer__brandCI + .Footer__brandSNS {
  @include sp {
    margin-top: 22px;
  };
  @include pc {
    margin-top: 20px;
  };
}
.Footer__brandSNS {
  @include sp {
  };
  @include pc {
  };
}
.Footer__brandSNSList {
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.Footer__brandSNSListItem {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.Footer__brandSNSListItem + .Footer__brandSNSListItem {
  @include sp {
    margin-left: 18px;
  };
  @include pc {
    margin-left: 14px;
  };
}
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
// メディアキット
.Footer__brandSNS + .Footer__brandMediaKit {
  @include sp {
    margin-top: 16px;
  };
  @include pc {
    margin-top: 14px;
  };
}
.Footer__brandMediaKit {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.Footer__brandMediaKitLink {
  color: $gray_b !important;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
// ホバー時の効果
.Footer__brandMediaKitLink {
  @include sp {
    &:active {
      color: $gray_b;
      text-decoration: underline !important;
    }
  };
  @include pc {
    cursor: pointer;
    &:hover {
      color: $gray_b;
      text-decoration: underline !important;
    }
  };
}
// -----▲ フッターのサービス情報 .Footer__brandInfo ▲-----

// -----▼ フッターのサイトマップ .Footer__sitemap ▼-----
.Footer__brandInfo + .Footer__sitemap {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
  };
}
.Footer__sitemap {
  @include sp {
  };
  @include pc {
    display: flex;
  };
}
.Footer__sitemapUnit {
  @include sp {
  };
  @include pc {
    width: calc(calc(1000px - calc(40px * 3)) / 4);
  };
}
.Footer__sitemapUnit + .Footer__sitemapUnit {
  @include sp {
    margin-top: 40px;
  };
  @include pc {
    margin-left: 40px;
  };
}
.Footer__sitemapList {
  @include sp {
  };
  @include pc {
  };
}
.Footer__sitemapListItem {
  @include sp {
    line-height: 1;
  };
  @include pc {
    line-height: 1;
  };
}
.Footer__sitemapListItem + .Footer__sitemapListItem {
  @include sp {
    margin-top: 20px;
  };
  @include pc {
    margin-top: 20px;
  };
}
.Footer__sitemapListItemLink {
  color: $white !important;
  @include sp {
    font-size: 1.4rem;
    text-decoration: none ;
  };
  @include pc {
    font-size: 1.4rem;
    text-decoration: none ;
  };
}
// ホバー時の効果
.Footer__sitemapListItemLink {
  @include sp {
    &:active {
      color: $white;
      text-decoration: underline !important;
    }
  };
  @include pc {
    cursor: pointer;
    &:hover {
      color: $white;
      text-decoration: underline !important;
    }
  };
}
// 「お問い合わせ」の別タブのアイコン
::v-deep .Footer__sitemapListItemLink.text-link.-tab .icon {
  @include sp {
    height: 16px;
    padding-bottom: 2px;
    width: 16px;
  };
  @include pc {
    height: 16px;
    padding-bottom: 2px;
    width: 16px;
  };
}
// -----▲ フッターのサイトマップ .Footer__sitemap ▲-----

// -----▼ フッターのコピーライト .Footer__copyright ▼-----
.Footer__copyright {
  @include sp {
    border-top: 1px solid $gray_7;
    padding: 14px 0;
  };
  @include pc {
    border-top: 1px solid $gray_7;
    padding: 16px 0;
  };
}
.FtCr__copyrightText {
  color: $white;
  text-align: center;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
// -----▲ フッターのコピーライト .Footer__copyright ▲-----
</style>
