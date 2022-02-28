<template>
  <div id="MediaKit" class="MediaKit">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('media kit') }}</span>
          </span>
        </h1><!-- /ページタイトル -->
      </div>
    </div>
    <div class="Main__contentContainer">
      <!-- メディアキットの一覧 -->
      <section class="section MediaKit__info">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="MediaKit__infoContent">
              <h2 class="title-4">
                このページに掲載するもの
              </h2>
              <p class="text">
                ・RACKのロゴ（＋zipファイルのダウンロードボタン）<br>・PCとスマホへの嵌め込みイメージ画像（画像・pngファイル）<br>・サービスのスクリーンショット（画像・pngファイル）<br>・サービスの概要（テキスト）<br>・QRコード（画像・pngファイル）<br>・連絡先（メールアドレス、SNSなど）
              </p>
            </div>
          </div>
        </div>
      </section><!-- /メディアキットの一覧 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesMediaKit',
  layout: 'fixed-page'
}
</script>

<style lang="scss" scoped>
// 「メディアキット」
.MediaKit {
  @include sp {
  };
  @include pc {
    padding: 0 0 16px 32px;
  };
}
.MediaKit__info {
  @include sp {
  };
  @include pc {
  };
}
.MediaKit__infoContent {
  @include sp {
  };
  @include pc {
  };
}
</style>
