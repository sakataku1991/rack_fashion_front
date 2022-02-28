<template>
  <a
    :href="`${linkTextTabContact.href}`"
    target="_blank"
    rel="noopener noreferrer"
    class="text-link -tab"
    ontouchstart=""
  >
    <span class="text-link-text">{{ linkTextTabContact.text }}</span>
    <icon-base
      class="icon icon-openInNew"
      height="18"
      icon-name="open-in-new"
      width="18"
    >
      <icon-open-in-new />
    </icon-base>
  </a>
</template>

<script>
export default {
  name: 'ComponentsLinkText',
  props: {
    linkTextTabContact: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.text-link.-tab {
  align-items: center;
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.text-link-text {
  @include sp {
    padding-right: 2px;
  };
  @include pc {
    padding-right: 2px;
  };
}
.icon {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.text-link.-tab {
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
