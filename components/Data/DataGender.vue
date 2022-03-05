<template>
  <span class="data data-gender" :class="`-${$store.state.question.current.sex.alias}`">{{ $t(`${$store.state.question.current.sex.name}`) }}</span>
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
.data-gender.-all,
.data-gender.-other,
.data-gender.-null {
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
