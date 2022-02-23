<template>
  <button
    type="button"
    aria-label="質問の操作"
    class="btn btn-actions"
    ontouchstart=""
  >
    <icon-base
      height="24"
      icon-name="more-horiz"
      width="24"
    >
      <icon-more-horiz />
    </icon-base>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonDashboardMyQuestionActions'
}
</script>

<style lang="scss" scoped>
.btn-actions {
  color: $blue;
  @include sp {
    border-radius: 50%;
    height: 28px;
    padding: 2px;
    width: 28px;
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-actions {
  @include sp {
    &:active {
      background-color: $gray_ea;
    }
  };
  @include pc {
    &:hover {
    }
  };
}
</style>
