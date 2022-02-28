<template>
  <v-text-field
    id="yourTwitter"
    v-model="setTwitter"
    :rules="rules"
    type="text"
    name="yourTwitter"
    spellcheck="false"
    autocomplete="off"
    placeholder="@なしで入力"
    class="form-list-item-data-content -text"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputTwitter',
  props: {
    twitter: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 15
    return {
      max,
      rules: [
        // 15文字以内
        v => (v.length != null && max >= v.length) || `${max}文字以内で入力してください`,
        // 書式チェック
        v => /^[a-zA-Z0-9._]*$/.test(v) || 'Twitterのユーザー名のユーザーネーム（半角英数字・ドット・アンダースコア）を、「@」を付けずに入力してください'
      ]
    }
  },
  computed: {
    setTwitter: {
      get () {
        return this.twitter
      },
      set (newVal) {
        return this.$emit('update:twitter', newVal)
      }
    }
  }
}
</script>
