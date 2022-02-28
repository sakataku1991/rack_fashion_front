<template>
  <nuxt-link
    to="/edit"
    class="btn -normal -blue btn-edit"
    ontouchstart=""
  >
    <span class="btn-text">編集</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsButtonDashboardMyQuestionEdit'
}
</script>

<style lang="scss" scoped>
.btn-edit {
  @include sp {
  };
  @include pc {
    line-height: 1;
    padding: 6px 4px 6px;
    width: 100%;
  };
}
.btn-text {
  @include sp {
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
// ホバー時の効果
.btn-edit {
  @include sp {
    &:active {
    }
  };
  @include pc {
    &:hover {
    }
  };
}
</style>
