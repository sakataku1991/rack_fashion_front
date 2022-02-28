<template>
  <div class="form-list-item-data-content -checkbox -check">
    <ul class="form-list -layer2">
      <li class="form-list-item">
        <label
          class="form-list-item-data-content-label"
        >
          <input
            type="checkbox"
            name="ourPrivacy"
            value="1"
          >
          <span class="form-list-item-data-content-label-text"><nuxt-link to="/privacy" target="_blank" class="form-list-item-data-content-label-text-link text-link" ontouchstart="">プライバシーポリシー</nuxt-link>に同意する</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormInputPrivacy'
  // props: {
  //   name: {
  //     type: Boolean,
  //     default: ''
  //   }
  // },
  // data () {
  //   const max = 30
  //   return {
  //     max,
  //     rules: [
  //       // 入力必須
  //       v => !!v || '',
  //       // 30文字以内
  //       v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
  //     ]
  //   }
  // },
  // computed: {
  //   setSex: {
  //     get () {
  //       return this.sex
  //     },
  //     set (newVal) {
  //       return this.$emit('update:name', newVal)
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.form-list-item.-privacy .form-list-item-data-content.-checkbox {
  @include sp {
  };
  @include pc {
  };
}
</style>
