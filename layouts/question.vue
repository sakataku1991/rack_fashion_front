<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      「layouts」の「question.vue」
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsQuestion',
  middleware: 'get-question-current'
}
</script>

<style lang="scss" scoped>
</style>
