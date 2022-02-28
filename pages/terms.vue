<template>
  <div id="Terms" class="Terms">
    <div class="Main__title">
      <div class="contentBoxS">
        <!-- ページタイトル -->
        <h1 class="title-page">
          <span class="title-page-item">
            <span class="title-page-text">{{ $my.pageTitle('terms') }}</span>
          </span>
        </h1><!-- /ページタイトル -->
      </div>
    </div>
    <div class="Main__contentContainer">
      <!-- 利用規約の一覧 -->
      <section class="section Terms__info">
        <div class="sectionContainer">
          <div class="contentBoxS">
            <div class="Terms__infoContent">
              <p class="text">
                本利用規約（以下、「本規約」といいます）は、本Webサイト上で提供するサービス（以下、「本サービス」といいます）の利用者に適用される、サービス利用にあたっての契約内容です。RACKを利用する登録ユーザーは、この利用規約をよく読み、同意していただいたうえで本サービスをご利用いただきます。
              </p>
              <p class="text bold">
                ※考案中...
              </p>
              <ul class="list -normal">
                <li>
                  第1条（定義）
                </li>
                <li>
                  第2条（本規約の適用範囲および規約内容の変更）
                </li>
                <li>
                  第3条（利用登録・利用資格）
                </li>
                <li>
                  第4条（本利用規約への同意）
                </li>
                <li>
                  第5条（ユーザー名とパスワード）
                </li>
                <li>
                  第6条（本サービスの機能とsakataku1991の役割）
                </li>
                <li>
                  第7条（投稿内容の利用）
                </li>
                <li>
                  第8条（投稿内容の著作権）
                </li>
                <li>
                  第9条（退会、および、資格喪失後の投稿の取り扱い）
                </li>
                <li>
                  第10条（個人情報の取り扱い）
                </li>
                <li>
                  第11条（本サービス提供に関わる知的財産権）
                </li>
                <li>
                  第12条（禁止事項）
                </li>
                <li>
                  第13条（アカウントの凍結、または、削除）
                </li>
                <li>
                  第14条（本サービスの変更・中断・終了）
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section><!-- /利用規約の一覧 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesTerms',
  layout: 'fixed-page'
}
</script>

<style lang="scss" scoped>
// 「利用規約」
.Terms {
  @include sp {
  };
  @include pc {
    padding: 0 0 16px 32px;
  };
}
.Terms__info {
  @include sp {
  };
  @include pc {
  };
}
.Terms__infoContent {
  @include sp {
  };
  @include pc {
  };
}
</style>
