<template>
  <span class="data data-gender -men">メンズ</span>
</template>

<script>
export default {
  name: 'ComponentsDataGender'
}
</script>

<style lang="scss" scoped>
.data {
  @include sp {
  };
  @include pc {
  };
}
.data-gender {
  @include sp {
  };
  @include pc {
  };
}
.data-gender.-all {
  color: $gender-all;
  @include sp {
  };
  @include pc {
  };
}
.data-gender.-men {
  color: $gender-men;
  @include sp {
  };
  @include pc {
  };
}
.data-gender.-women {
  color: $gender-women;
  @include sp {
  };
  @include pc {
  };
}
</style>
