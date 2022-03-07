<template>
  <nuxt-link
    :to="`/hashtag/デニム`"
    class="hashtag"
    ontouchstart=""
  >
    <data-hashtag
      class="hashtag-text"
    >
      デニム
    </data-hashtag>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsHashtag'
}
</script>

<style lang="scss" scoped>
.hashtag {
  display: block;
  @include sp {
  };
  @include pc {
  };
}
.hashtag .hashtag-text {
  @include sp {
    box-shadow: 0px 2px 3px rgba($black_rgb, .04);
  };
  @include pc {
    box-shadow: 0px 2px 3px rgba($black_rgb, .04);
  };
}
// ホバー時の効果
.hashtag {
  transition:
    background-color 0.3s ease-out,
    border 0.3s ease-out,
    color 0.3s ease-out,
    filter 0.3s ease-out;
  @include sp {
    &:active {
      transition:
        background-color 0.1s ease-out,
        border 0.1s ease-out,
        color 0.1s ease-out,
        filter 0.1s ease-out;
    }
  };
  @include pc {
    &:hover {
      transition:
        background-color 0.1s ease-out,
        border 0.1s ease-out,
        color 0.1s ease-out,
        filter 0.1s ease-out;
    }
  };
}
.hashtag {
  @include sp {
    .hashtag-text {
      transition: 0.3s;
    }
    &:active {
      .hashtag-text {
        background-color: $blue_12pct;
        border: 1px solid $blue;
        box-shadow: 0px 2px 3px rgba($blue_rgb, .04);
        transition: 0.05s;
      }
    }
  };
  @include pc {
    .hashtag-text {
      transition: 0.3s;
    }
    &:hover {
      .hashtag-text {
        background-color: $blue_12pct;
        border: 1px solid $blue;
        box-shadow: 0px 2px 3px rgba($blue_rgb, .04);
        transition: 0.05s;
      }
    }
  };
}
.hashtag::v-deep {
  @include sp {
    .data-hashtag-text {
      transition: 0.3s;
    }
    &:active {
      .data-hashtag-text {
        color: $blue;
        transition: 0.05s;
      }
    }
  };
  @include pc {
    .data-hashtag-text {
      transition: 0.3s;
    }
    &:hover {
      .data-hashtag-text {
        color: $blue;
        transition: 0.05s;
      }
    }
  };
}
</style>
