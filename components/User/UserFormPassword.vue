<template>
  <v-text-field
    v-model="setPassword"
    :rules="form.rules"
    :hint="form.hint"
    :hide-details="!setValidation"
    :counter="setValidation"
    :append-icon="toggle.icon"
    :type="toggle.type"
    label="パスワード"
    :placeholder="form.placeholder"
    @click:append="show = !show"
    outlined
  />
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: ''
    },
    setValidation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    setPassword: {
      get () { return this.password },
      set (newVal) { return this.$emit('update:password', newVal) }
    },
    form () {
      const min = '8'
      const msg = `${min}文字以上。パスワードは半角英数字・ハイフン・アンダースコアが使えます`
      // ログインページ = 入力必須のバリデーションのみ
      // 会員登録ページ = 入力必須に加えて、8文字以上、＋72文字以下＋書式チェック、のバリデーション
      // 入力必須
      const required = v => !!v || ''
      // 書式チェック
      const format = v => /^[\w-]{8,72}$/.test(v) || msg
      // バリデーションの切り替え（「set-validation」が付いているかいないかで）
      const rules = this.setValidation ? [format] : [required]
      // バリデーションに引っかかった時のエラーメッセージ
      const hint = this.setValidation ? msg : undefined
      // プレースホルダー
      const placeholder = this.setValidation ? min : undefined
      return { rules, hint, placeholder }
    },
    toggle () {
      const icon = this.show ? 'mdi-eye' : 'mdi-eye-off'
      const type = this.show ? 'text' : 'password'
      return { icon, type }
    }
  }
}
</script>
