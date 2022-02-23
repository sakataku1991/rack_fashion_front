<template>
  <nuxt-link
    to="#"
    class="link link-color"
    ontouchstart=""
  >
    <data-color />
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsLinkColor'
}
</script>

<style lang="scss" scoped>
.link {
  @include sp {
  };
  @include pc {
  };
}
.link-color {
  display: inline-block;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.link-color {
  @include sp {
    transition: 0.3s;
    &:active {
      text-decoration: underline !important;
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      text-decoration: underline !important;
      transition: 0.05s;
    }
  };
}
.link-color {
  @include sp {
    .color-guide::before {
      transition: 0.3s;
    }
    &:active .color-guide::before {
      transition: 0.05s;
    }
  };
  @include pc {
    .color-guide::before {
      transition: 0.3s;
    }
    &:hover .color-guide::before {
      transition: 0.05s;
    }
  };
}
</style>
