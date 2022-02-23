<template>
  <button
    type="button"
    aria-label="削除"
    class="btn btn-delete"
    ontouchstart=""
  >
    <span class="btn-text">削除</span>
  </button>
</template>

<script>
export default {
  name: 'ComponentsButtonDashboardMyQuestionDelete'
}
</script>

<style lang="scss" scoped>
.btn-delete {
  @include sp {
  };
  @include pc {
    padding: 0px 6px 0px;
  };
}
.btn-text {
  color: $delete;
  text-decoration: underline;
  word-break: break-all;
  @include sp {
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
// ホバー時の効果
.btn-delete {
  @include sp {
    &:active {
    }
  };
  @include pc {
    &:hover {
    }
  };
}
.btn-delete {
  @include sp {
    &:active {
      .btn-text {
        color: $delete;
        opacity: 0.7;
        text-decoration: none !important;
      }
    }
  };
  @include pc {
    &:hover {
      .btn-text {
        color: $delete;
        opacity: 0.7;
        text-decoration: none !important;
      }
    }
  };
}
</style>
