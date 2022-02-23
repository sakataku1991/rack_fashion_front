<template>
  <v-btn
    depressed
    class="ml-2 font-weight-bold"
    color="error"
    to="/logout"
  >
    {{ $my.pageTitle('logout') }}
  </v-btn>
</template>

<script>
export default {
  name: 'ComponentsBeforeLoginAppBarLogoutButton'
}
</script>
