<template>
  <p class="data data-post-status status-type -unsaved">
    <span class="status-type-text">未保存</span>
  </p>
</template>

<script>
export default {
  name: 'ComponentsDataPostStatus'
}
</script>

<style lang="scss" scoped>
.data {
  @include sp {
  };
  @include pc {
  };
}
.data-post-status {
  @include sp {
  };
  @include pc {
  };
}
.status-type {
  align-items: center;
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.status-type-text {
  display: block;
  @include sp {
    padding-left: 3px;
  };
  @include pc {
    padding-left: 3px;
  };
}
.status-type::before {
  content: "";
  display: block;
  @include sp {
    border-radius: 50%;
    height: 6px;
    width: 6px;
  };
  @include pc {
    border-radius: 50%;
    height: 6px;
    width: 6px;
  };
}
// 「未保存」｜未保存
.status-type.-unsaved {
  color: $gray_b;
  @include sp {
  };
  @include pc {
  };
}
.status-type.-unsaved::before {
  background-color: $ghost;
  @include sp {
    border: 1px dotted $gray_b;
  };
  @include pc {
    border: 1px dotted $gray_b;
  };
}
// 「公開」｜未保存
.status-type.-publish {
  color: $gray_b;
  @include sp {
  };
  @include pc {
  };
}
.status-type.-publish::before {
  background-color: $ghost;
  @include sp {
    border: 1px dotted $gray_b;
  };
  @include pc {
    border: 1px dotted $gray_b;
  };
}
// 「下書き保存」｜下書き
.status-type.-draft {
  color: $gray_7;
  @include sp {
  };
  @include pc {
  };
}
.status-type.-draft::before {
  background-color: $ghost;
  @include sp {
    border: 1px solid $gray_b;
  };
  @include pc {
    border: 1px solid $gray_b;
  };
}
// 「公開（公開済み）」｜公開中
.status-type.-published {
  color: $gray_7;
  @include sp {
  };
  @include pc {
  };
}
.status-type.-published::before {
  background-color: $success;
  @include sp {
    border: 1px solid $success;
  };
  @include pc {
    border: 1px solid $success;
  };
}
// 「この質問を削除」｜削除されました
.status-type.-delete {
  color: $delete;
  @include sp {
  };
  @include pc {
  };
}
.status-type.-delete::before {
  background-color: $delete;
  @include sp {
    border: 1px solid $delete;
  };
  @include pc {
    border: 1px solid $delete;
  };
}
</style>
