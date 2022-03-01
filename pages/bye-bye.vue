<template>
  <div id="ByeBye" class="ByeBye">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('bye bye') }}</span>
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
              <div class="ByeBye__messageText text-box">
                <p class="text taC">
                  ご利用ありがとうございました！
                </p>
                <p class="text taC">
                  ...いつの日かまた<br class="hidePc">ご利用いただけると嬉しいです！
                </p>
              </div>
              <p class="ByeBye__homeLinkBtnContainer">
                <button-back-to-top
                  class="ByeBye__homeLinkBtn"
                />
              </p>
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
.ByeBye__messageText {
  @include sp {
  };
  @include pc {
  };
}
.ByeBye__messageText + .ByeBye__homeLinkBtnContainer {
  @include sp {
    margin-top: 32px;
  };
  @include pc {
    margin-top: 40px;
  };
}
.ByeBye__homeLinkBtnContainer {
  @include sp {
  };
  @include pc {
  };
}
.ByeBye__homeLinkBtn {
  @include sp {
    padding: 8px 12px 8px;
    width: 64%;
  };
  @include pc {
    padding: 8px 12px 8px;
    width: 240px;
  };
}
</style>
