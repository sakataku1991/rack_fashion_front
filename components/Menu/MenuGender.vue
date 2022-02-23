<template>
  <section class="MenuItem MenuGender">
    <tab-gender />
  </section>
</template>

<script>
export default {
  name: 'ComponentsMenuGender'
}
</script>

<style lang="scss" scoped>
.MenuGender {
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__gender {
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__genderList {
  display: flex;
  @include sp {
    gap: 8px;
  };
  @include pc {
    gap: 12px;
  };
}
.MenuGender__genderListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__genderListItemLink {
  display: block;
  font-weight: bold;
  text-align: center;
  @include sp {
    border-radius: 3px;
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 4px 8px;
  };
  @include pc {
    border-radius: 4px;
    font-size: 1.4rem;
    line-height: 1.5;
    padding: 6px 12px;
  };
}
.MenuGender__genderListItemLink.-all {
  color: $gender-all;
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__genderListItemLink.-men {
  color: $gender-men;
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__genderListItemLink.-women {
  color: $gender-women;
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.MenuGender__genderListItemLink {
  @include sp {
    transition: 0.3s;
    &:active {
      background-color: $gray_e4;
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      background-color: $gray_e4;
      transition: 0.05s;
    }
  };
}
// アクティブ時の効果
.MenuGender__genderListItem[aria-selected=true] .MenuGender__genderListItemLink {
  color: $white;
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__genderListItem[aria-selected=true] .MenuGender__genderListItemLink.-all {
  background-color: $gender-all;
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__genderListItem[aria-selected=true] .MenuGender__genderListItemLink.-men {
  background-color: $gender-men;
  @include sp {
  };
  @include pc {
  };
}
.MenuGender__genderListItem[aria-selected=true] .MenuGender__genderListItemLink.-women {
  background-color: $gender-women;
  @include sp {
  };
  @include pc {
  };
}
</style>
