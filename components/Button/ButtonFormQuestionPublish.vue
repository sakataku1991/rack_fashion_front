<template>
  <div class="form-btn -formQuestion">
    <button
      type="submit"
      form="formQuestion"
      value="公開する"
      ontouchstart=""
      class="btn -normal -blue btn-formQuestionPublish btn-text"
    >
      公開する
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentsButtonFormQuestionPublish'
}
</script>

<style lang="scss" scoped>
.btn-formQuestionPublish {
  font-weight: bold;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-formQuestionPublish {
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
