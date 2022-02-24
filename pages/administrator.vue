<template>
  <section class="section About">
    <div class="About__content">
      <div class="About__about">
        <h2 class="About__aboutTitle">
          運営者
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesAdministrator',
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
