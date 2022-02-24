<template>
  <nuxt-link
    to="/category/トップス"
    class="category category-btn"
    ontouchstart=""
  >
    <data-category
      class="category-btn-text"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'ComponentsCategoryButton'
}
</script>

<style lang="scss" scoped>
.category-btn {
  background-color: $white;
  display: block;
  @include sp {
    border: 1px solid $blue_grayBoader;
    border-radius: 4px;
    padding: 8px 10px 8px;
  };
  @include pc {
    border: 1px solid $blue_grayBoader;
    border-radius: 4px;
    padding: 6px 8px 6px;
  };
}
.category-btn-text {
  color: $black;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.4;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.4;
  };
}
// ホバー時の効果
.category-btn {
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
.category-btn {
  @include sp {
    &:active {
      background-color: $blue_12pct;
      border: 1px solid $blue;
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_12pct;
      border: 1px solid $blue;
    }
  };
}
.category-btn {
  .category-btn-text {
    transition:
      color 0.3s ease-out;
  }
  @include sp {
    &:active {
      .category-btn-text {
        transition:
          color 0.1s ease-out;
      }
    }
  };
  @include pc {
    &:hover {
      .category-btn-text {
        transition:
          color 0.1s ease-out;
      }
    }
  };
}
.category-btn {
  .category-btn-text {
  }
  @include sp {
    &:active {
      .category-btn-text {
        color: $blue;
      }
    }
  };
  @include pc {
    &:hover {
      .category-btn-text {
        color: $blue;
      }
    }
  };
}
</style>
