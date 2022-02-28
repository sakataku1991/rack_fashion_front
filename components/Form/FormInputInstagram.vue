<template>
  <v-text-field
    id="yourInstagram"
    v-model="setInstagram"
    :rules="rules"
    type="text"
    name="yourInstagram"
    spellcheck="false"
    autocomplete="off"
    placeholder="@なしで入力"
    class="form-list-item-data-content -text"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputInstagram',
  props: {
    instagram: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 30
    return {
      max,
      rules: [
        // 30文字以内
        v => (v.length != null && max >= v.length) || `${max}文字以内で入力してください`,
        // 書式チェック
        v => /^[a-zA-Z0-9_]*$/.test(v) || 'Instagramのユーザーネーム（半角英数字・アンダースコア）を、「@」を付けずに入力してください'
      ]
    }
  },
  computed: {
    setInstagram: {
      get () {
        return this.instagram
      },
      set (newVal) {
        return this.$emit('update:instagram', newVal)
      }
    }
  }
}
</script>
