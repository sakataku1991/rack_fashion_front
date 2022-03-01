<template>
  <div id="ByeBye" class="ByeBye">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('administrator') }}</span>
          </span>
        </h1><!-- /ページタイトル -->
      </div>
    </div>
    <div class="Main__contentContainer">
      <!-- ご利用ありがとうございました！ -->
      <section class="section ByeBye__message">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="ByeBye__messageContent">
              <div class="text-box">
                <p class="text taCPc">
                  ご利用ありがとうございました！
                </p>
                <p class="text taCPc">
                  ...いつの日かまたご利用していただけると嬉しいです！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /ご利用ありがとうございました！ -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesByeBye',
  layout: 'fixed-page'
}
</script>

<style lang="scss" scoped>
// 「退会完了」
.ByeBye {
  @include sp {
  };
  @include pc {
  };
}
// ご利用ありがとうございました！
.ByeBye__message {
  @include sp {
  };
  @include pc {
  };
}
.ByeBye__messageContent {
  @include sp {
  };
  @include pc {
  };
}
</style>
