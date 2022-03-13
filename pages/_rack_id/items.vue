<template>
  <div id="Mypage" class="Mypage">
    <nuxt-child />
  </div>
</template>

<script>

export default {
  name: 'PagesRackidItems',
  layout: 'mypage',
  // falseを返すページのアクセスを制限する
  validate ({ route }) {
    return route.name !== 'mypage'
  },
  data () {
    return {
      dashboardPath: 'user-id-mypage'
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.user.current
    }
  }
}
</script>

<style lang="scss" scoped>
// マイページ全体
.Mypage {
  @include sp {
  };
  @include pc {
  };
}
</style>
