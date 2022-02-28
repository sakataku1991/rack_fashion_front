<template>
  <section class="section Form">
    <div class="Form__content">
      <div class="Form__form">
        <form-reset-password />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PagesResetPassword',
  layout: 'login'
}
</script>

<style lang="scss" scoped>
// 「RACKにログイン」
.Form {
  @include sp {
  };
  @include pc {
    padding: 0 0 16px 32px;
  };
}
.Form__content {
  @include sp {
  };
  @include pc {
  };
}
.Form__form {
  @include sp {
  };
  @include pc {
  };
}
</style>
