<template>
  <section class="MenuItem MenuSort">
    <div class="MenuSort__sort">
      <h2 class="MenuSort__sortTitle">
        質問を並び替える
      </h2>
      <ul class="MenuSort__sortList">
        <li
          v-for="(sort, i) in sorts"
          :key="`sort-${i}`"
          class="MenuSort__sortListItem"
        >
          <nuxt-link
            :to="`/?order=${sort.slug}`"
            aria-selected="false"
            class="MenuSort__sortListItemLink"
            ontouchstart=""
          >
            {{ $t(`sorts.${sort.name}`) }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsMenuSort',
  data () {
    return {
      sorts: [
        { name: 'new', slug: 'new' },
        { name: 'popular', slug: 'popular' },
        { name: 'hot', slug: 'hot' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.MenuSort {
  @include sp {
  };
  @include pc {
  };
}
.MenuSort__sort {
  @include sp {
  };
  @include pc {
  };
}
.MenuSort__sortTitle {
  font-weight: bold;
  @include sp {
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0 14px;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0 16px;
  };
}
.MenuSort__sortTitle + .MenuSort__sortList {
  @include sp {
    margin-top: 4px;
  };
  @include pc {
    margin-top: 7px;
  };
}
.MenuSort__sortList {
  @include sp {
  };
  @include pc {
  };
}
.MenuSort__sortListItem {
  @include sp {
  };
  @include pc {
  };
}
.MenuSort__sortListItemLink {
  color: $gray_5;
  display: block;
  @include sp {
    font-size: 1.4rem;
    line-height: 1.5;
  };
  @include pc {
    font-size: 1.4rem;
    line-height: 1.5;
    padding: 6px 28px;
  };
}
// ホバー時の効果
.MenuSort__sortListItemLink {
  @include sp {
    transition: 0.3s;
    &:active {
      background-color: $blue_16pct;
      color: $blue;
      transition: 0.05s;
    }
  };
  @include pc {
    transition: 0.3s;
    &:hover {
      background-color: $blue_16pct;
      color: $blue;
      transition: 0.05s;
    }
  };
}
</style>
