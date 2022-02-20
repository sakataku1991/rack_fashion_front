<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      「layouts」の「questions.vue」
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsQuestions',
  middleware: ['get-question-current']
}
</script>

<style lang="scss" scoped>
</style>
