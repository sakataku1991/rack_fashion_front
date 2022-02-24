<template>
  <section class="section About">
    <div class="About__content">
      <div class="About__about">
        <h2 class="About__aboutTitle">
          よくある質問
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesFaq',
  layout: 'fixed-page'
}
</script>

<style lang="scss" scoped>
// 「はじめての方へ」
.About {
  @include sp {
  };
  @include pc {
    padding: 0 0 16px 32px;
  };
}
.About__content {
  @include sp {
  };
  @include pc {
  };
}
// ※内容
.About__about {
  @include sp {
  };
  @include pc {
  };
}
</style>
