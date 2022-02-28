<template>
  <section class="section Development">
    <div class="Development__content">
      <div class="Development__kitchen">
        <!-- 検索結果 -->
        <result-search />
        <!-- ユーザーアバターのメニューのポップオーバー -->
        <!-- <popover-menu-user-avatar /> -->
        <!-- インフォメーション（通知・お知らせ）メニューのポップオーバー -->
        <!-- <popover-menu-user-information /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesDevelopment',
  layout: 'result-search'
}
</script>

<style lang="scss" scoped>
.Development {
  @include sp {
  };
  @include pc {
  };
}
.Development__content {
  @include sp {
  };
  @include pc {
  };
}
.Development__kitchen {
  @include sp {
  };
  @include pc {
  };
}
</style>
