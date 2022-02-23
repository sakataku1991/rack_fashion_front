<template>
  <div>
    <h2 class="title-2">mypage.vue</h2>
    <p class="text">{{ $store.state.user.current }}</p>
    <link-logo />
  </div>
</template>

<script>
export default {
  name: 'PagesMypage',
  layout: 'default'
}
</script>
