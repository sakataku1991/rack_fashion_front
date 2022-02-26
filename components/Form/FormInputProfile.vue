<template>
  <v-textarea
    id="yourProfile"
    v-model="setProfile"
    :rules="rules"
    :counter="max"
    name="yourProfile"
    spellcheck="false"
    autocomplete="off"
    placeholder="自己紹介の文章を記入してください"
    class="form-list-item-data-content -textarea"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputProfile',
  props: {
    profile: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 160
    return {
      max,
      rules: [
        // 160文字以内
        v => (max >= v.length) || `${max}文字以内で入力してください`
      ]
    }
  },
  computed: {
    setProfile: {
      get () {
        return this.profile
      },
      set (newVal) {
        return this.$emit('update:profile', newVal)
      }
    }
  }
}
</script>
