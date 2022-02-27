<template>
  <div class="Tab__gender">
    <ul class="Tab__genderList">
      <!-- TODO アクティブなタブの「li」タグには「is-active」クラスを付ける！ -->
      <li
        v-for="(sex, i) in sexes"
        :key="`sex-${i}`"
        class="Tab__genderListItem"
      >
        <nuxt-link
          :to="`/?gender=${sex.slug}`"
          class="Tab__genderListItemBtn btn -tab btn-tabGender"
          :class="`-${sex.slug}`"
          tabindex="0"
          ontouchstart=""
        >
          <span class="btn-text">{{ $t(`sexes.${sex.gender}`) }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentsTabGender',
  data () {
    return {
      sexes: [
        { gender: 'all', slug: 'all', code: '9' },
        { gender: 'men', slug: 'men', code: '1' },
        { gender: 'women', slug: 'women', code: '2' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// 性別
.Tab__gender {
  @include sp {
  };
  @include pc {
  };
}
.Tab__genderList {
  background-color: $gray_e6;
  display: flex;
  @include sp {
    border-radius: 3px;
    gap: 1px;
    padding: 4px;
    width: 100%;
  };
  @include pc {
    border-radius: 4px;
    gap: 1px;
    padding: 3px;
    width: fit-content;
  };
}
.Tab__genderListItem {
  @include sp {
    width: 100%;
  };
  @include pc {
  };
}
.Tab__genderListItem + .Tab__genderListItem {
  position: relative;
  @include sp {
  };
  @include pc {
  };
}
.Tab__genderListItem + .Tab__genderListItem::before {
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
.Tab__genderListItemBtn {
  @include sp {
    width: 100%;
  };
  @include pc {
    width: 120px;
  };
}
// ホバー時の効果
.Tab__genderListItemBtn {
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
.btn-tabGender {
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
.btn-tabGender .btn-text {
  font-weight: bold;
  @include sp {
    font-size: 1.2rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
  };
}
// すべて
.btn-tabGender.-all {
  @include sp {
  };
  @include pc {
  };
}
.btn-tabGender.-all .btn-text {
  color: $gender-all;
  @include sp {
  };
  @include pc {
  };
}
// メンズ
.btn-tabGender.-men {
  @include sp {
  };
  @include pc {
  };
}
.btn-tabGender.-men .btn-text {
  color: $gender-men;
  @include sp {
  };
  @include pc {
  };
}
// レディース
.btn-tabGender.-women {
  @include sp {
  };
  @include pc {
  };
}
.btn-tabGender.-women .btn-text {
  color: $gender-women;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.btn-tabGender.-all {
  @include sp {
    &:active {
      background-color: rgba($gender-all_rgb, 0.16);
    }
  };
  @include pc {
    &:hover {
      background-color: rgba($gender-all_rgb, 0.16);
    }
  };
}
.btn-tabGender.-men {
  @include sp {
    &:active {
      background-color: rgba($gender-men_rgb, 0.16);
    }
  };
  @include pc {
    &:hover {
      background-color: rgba($gender-men_rgb, 0.16);
    }
  };
}
.btn-tabGender.-women {
  @include sp {
    &:active {
      background-color: rgba($gender-women_rgb, 0.16);
    }
  };
  @include pc {
    &:hover {
      background-color: rgba($gender-women_rgb, 0.16);
    }
  };
}
// アクティブ時の効果
.Tab__genderListItem.is-active {
  @include sp {
  };
  @include pc {
  };
}
.Tab__genderListItem.is-active .btn-tabGender {
  pointer-events: none;
  @include sp {
    box-shadow: 0px 2px 3px rgba($black_rgb, 0.12);
  };
  @include pc {
    box-shadow: 0px 2px 3px rgba($black_rgb, 0.12);
  };
}
.Tab__genderListItem.is-active .btn-tabGender.-all {
  @include sp {
    background-color: $gender-all;
  };
  @include pc {
    background-color: $gender-all;
  };
}
.Tab__genderListItem.is-active .btn-tabGender.-all {
  .btn-text {
  }
  @include sp {
    .btn-text {
      color: $white;
    }
  };
  @include pc {
    .btn-text {
      color: $white;
    }
  };
}
.Tab__genderListItem.is-active .btn-tabGender.-men {
  @include sp {
    background-color: $gender-men;
  };
  @include pc {
    background-color: $gender-men;
  };
}
.Tab__genderListItem.is-active .btn-tabGender.-men {
  .btn-text {
  }
  @include sp {
    .btn-text {
      color: $white;
    }
  };
  @include pc {
    .btn-text {
      color: $white;
    }
  };
}
.Tab__genderListItem.is-active .btn-tabGender.-women {
  @include sp {
    background-color: $gender-women;
  };
  @include pc {
    background-color: $gender-women;
  };
}
.Tab__genderListItem.is-active .btn-tabGender.-women {
  .btn-text {
  }
  @include sp {
    .btn-text {
      color: $white;
    }
  };
  @include pc {
    .btn-text {
      color: $white;
    }
  };
}
</style>
