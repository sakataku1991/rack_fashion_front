<template>
  <v-text-field
    id="yourHomepage"
    v-model="setHomepage"
    :rules="rules"
    type="url"
    name="yourHomepage"
    spellcheck="false"
    autocomplete="off"
    placeholder="https://example.com"
    class="form-list-item-data-content -text"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputHomepage',
  props: {
    homepage: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 2000
    return {
      max,
      rules: [
        // 2000文字以内
        v => (max >= v.length) || `${max}文字以内で入力してください`
        // 書式チェック
        // TODO 要修正！なぜか必須項目になってしまっている。任意にしたい。
        // v => /https?:\/\/[^\s]*$/.test(v) || 'URLを入力してください'
      ]
    }
  },
  computed: {
    setHomepage: {
      get () {
        return this.homepage
      },
      set (newVal) {
        return this.$emit('update:homepage', newVal)
      }
    }
  }
}
</script>
