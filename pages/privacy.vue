<template>
  <div id="Privacy" class="Privacy">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('privacy') }}</span>
          </span>
        </h1><!-- /ページタイトル -->
      </div>
    </div>
    <div class="Main__contentContainer">
      <!-- プライバシーポリシーの一覧 -->
      <section class="section Privacy__info">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="Privacy__infoContent">
              <p class="text bold">
                ※考案中...
              </p>
              <ul class="list -normal">
                <li>
                  個人情報の定義
                </li>
                <li>
                  個人情報の収集方法
                </li>
                <li>
                  個人情報を収集・利用する目的
                </li>
                <li>
                  個人情報の第三者提供
                </li>
                <li>
                  個人情報保護方針
                </li>
                <li>
                  個人情報の取り扱いについて
                </li>
                <li>
                  個人情報に関する公表事項
                </li>
                <li>
                  Google アナリティクス について
                </li>
                <li>
                  本ポリシーの変更・改訂について
                </li>
                <li>
                  お問い合わせ窓口
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section><!-- /プライバシーポリシーの一覧 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesPrivacy',
  layout: 'fixed-page'
}
</script>

<style lang="scss" scoped>
// 「プライバシーポリシー」
.Privacy {
  @include sp {
  };
  @include pc {
    padding: 0 0 16px 32px;
  };
}
.Privacy__info {
  @include sp {
  };
  @include pc {
  };
}
.Privacy__infoContent {
  @include sp {
  };
  @include pc {
  };
}
</style>
