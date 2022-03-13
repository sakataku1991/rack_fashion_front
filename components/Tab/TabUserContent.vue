<template>
  <div class="Tab__userItems">
    <ul
      role="tablist"
      class="Tab__userItemsList"
    >
      <li
        v-for="(tab, i) in tabs"
        :key="`tab-${i}`"
        class="Tab__userItemsListItem"
        :class="[{ 'is-active': currentTab === `tab-${i}` }]"
      >
        <!-- v-model="setCurrentTab" -->
        <!-- @click="currentTab = tab" -->
        <nuxt-link
          :to="`/${tab.slug}`"
          role="tab"
          aria-selected="true"
          class="Tab__userItemsListItemBtn"
          ontouchstart=""
        >
          <span class="Tab__userItemsListItemBtnText">{{ tab.name }}</span>
        </nuxt-link>
      </li>
      <!-- <li class="Tab__userItemsListItem">
        <nuxt-link
          to="#"
          role="tab"
          aria-selected="false"
          tabindex="-1"
          class="Tab__userItemsListItemBtn"
          ontouchstart=""
        >
          <span class="Tab__userItemsListItemBtnText">いいね！した質問</span>
        </nuxt-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentsTabUserContent',
  props: {
    currentTab: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    setCurrentTab: {
      get () {
        return this.currentTab
      },
      set (newValue) {
        return this.$emit('update:currentTab = tab', newValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Tab__userItems {
  overflow-x: auto;
  @include sp {
  };
  @include pc {
  };
}
.Tab__userItemsList {
  align-items: center;
  display: flex;
  @include sp {
  };
  @include pc {
  };
}
.Tab__userItemsListItem {
  @include sp {
    width: 100%;
  };
  @include pc {
    width: 100%;
  };
}
.Tab__userItemsListItemBtn {
  background-color: $white;
  display: block;
  text-align: center;
  @include sp {
    line-height: 1;
    padding: 0 6px 0;
  };
  @include pc {
    line-height: 1;
    padding: 0 8px 0;
  };
}
.Tab__userItemsListItemBtnText {
  color: $blue_grayText;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  @include sp {
    font-size: 1.3rem;
    letter-spacing: $lsAV25;
    line-height: 1.5;
    padding: 12px 0 14px;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 16px 0 16px;
  };
}
// ホバー時の効果
.Tab__userItemsListItemBtn {
  @include sp {
    transition:
      background-color 0.3s ease-out,
      color 0.3s ease-out;
    &:active {
      transition:
        background-color 0.15s ease-out,
        color 0.15s ease-out;
    }
  };
  @include pc {
    transition:
      background-color 0.3s ease-out,
      color 0.3s ease-out;
    &:hover {
      transition:
        background-color 0.15s ease-out,
        color 0.15s ease-out;
    }
  };
}
.Tab__userItemsListItemBtn {
  @include sp {
    &:active {
      background-color: $blue_12pct;
      .Tab__userItemsListItemBtnText {
        color: $blue;
      }
    }
  };
  @include pc {
    &:hover {
      background-color: $blue_12pct;
      .Tab__userItemsListItemBtnText {
        color: $blue;
      }
    }
  };
}
// 選択中のタブのスタイル
.Tab__userItemsListItem.is-active .Tab__userItemsListItemBtn {
  pointer-events: none;
  @include sp {
  };
  @include pc {
  };
}
.Tab__userItemsListItem.is-active .Tab__userItemsListItemBtn .Tab__userItemsListItemBtnText {
  color: $black;
  font-weight: bold;
  @include sp {
  };
  @include pc {
  };
}
.Tab__userItemsListItem.is-active .Tab__userItemsListItemBtn .Tab__userItemsListItemBtnText::after {
  content: "";
  background-color: $blue;
  box-sizing: content-box;
  position: absolute;
  @include sp {
    bottom: 0;
    border-radius: 50px;
    height: 3px;
    left: calc(50% - calc(calc(100% + calc(4px * 2)) / 2));
    padding: 0 4px;
    width: 100%;
  };
  @include pc {
    bottom: 0;
    border-radius: 50px;
    height: 4px;
    left: calc(50% - calc(calc(100% + calc(6px * 2)) / 2));
    padding: 0 6px;
    width: 100%;
  };
}
</style>
