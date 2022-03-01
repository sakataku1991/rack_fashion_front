<template>
  <div class="Tab__sort">
    <ul class="Tab__sortList">
      <li
        v-for="(tab, i) in tabs"
        :key="`tab-${i}`"
        :class="[{ 'is-active': currentTab === `tab-${i}` }]"
        class="Tab__sortListItem"
        @click="currentTab = `tab-${i}`"
      >
        <!-- TODO アクティブなタグは「aria-selected="true"」にする！ -->
        <nuxt-link
          :to="`/?order=${tab.slug}`"
          aria-selected="false"
          class="Tab__sortListItemBtn btn -sort btn-sortQuestion"
          ontouchstart=""
        >
          <span class="btn-text">{{ $t(`sorts.${tab.name}`) }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentsTabSort',
  data () {
    return {
      currentTab: 'tab-0',
      tabs: [
        { name: 'new', slug: 'new' },
        { name: 'popular', slug: 'popular' },
        { name: 'hot', slug: 'hot' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Tab__sort {
  @include sp {
  };
  @include pc {
  };
}
.Tab__sortList {
  background-color: $gray_e6;
  display: flex;
  @include sp {
    border-radius: 3px;
    gap: 1px;
    padding: 4px;
    padding-left: 4px !important;
  };
  @include pc {
    border-radius: 4px;
    gap: 1px;
    padding: 3px;
    padding-left: 3px !important;
    width: fit-content;
  };
}
.Tab__sortListItem {
  @include sp {
    width: 100%;
  };
  @include pc {
  };
}
.Tab__sortListItem + .Tab__sortListItem {
  position: relative;
  @include sp {
  };
  @include pc {
  };
}
.Tab__sortListItem + .Tab__sortListItem::before {
  background-color: $gray_c;
  content: "";
  position: absolute;
  @include sp {
    height: 24px;
    left: -1px;
    top: calc(50% - calc(24px / 2));
    width: 1px;
  };
  @include pc {
    height: 24px;
    left: -1px;
    top: calc(50% - calc(24px / 2));
    width: 1px;
  };
}
.Tab__sortListItemBtn {
  @include sp {
    width: 100%;
  };
  @include pc {
    width: 120px;
  };
}
// ホバー時の効果
.Tab__sortListItemBtn {
  @include sp {
    transition: 0.3s;
    &:active {
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      transition: 0.05s;
    }
  };
}
.Tab__sortListItemBtn {
  @include sp {
    &:active {
      background-color: rgba($white, 0.5);
    }
  };
  @include pc {
    &:hover {
      background-color: rgba($white, 0.5);
    }
  };
}
.btn-sortQuestion {
  display: block;
  text-align: center;
  @include sp {
    border-radius: 3px;
    padding: 2px 8px;
  };
  @include pc {
    border-radius: 4px;
    padding: 2px 12px;
  };
}
.btn-sortQuestion .btn-text {
  color: $black;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
// アクティブ時の効果
.btn-sortQuestion[aria-selected=true] {
  background-color: $white;
  pointer-events: none;
  @include sp {
    box-shadow: 0px 2px 3px rgba($black_rgb, 0.12);
  };
  @include pc {
    box-shadow: 0px 2px 3px rgba($black_rgb, 0.12);
  };
}
.Tab__sortListItem.is-active .btn-sortQuestion {
  background-color: $white;
  pointer-events: none;
  @include sp {
    box-shadow: 0px 2px 3px rgba($black_rgb, 0.12);
  };
  @include pc {
    box-shadow: 0px 2px 3px rgba($black_rgb, 0.12);
  };
}
</style>
