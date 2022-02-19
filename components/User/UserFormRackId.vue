<template>
  <v-text-field
    v-model="setRackId"
    :rules="form.rules"
    :hint="form.hint"
    :hide-details="!setValidation"
    :counter="setValidation"
    label="RACK ID（あなたのURLに使われます）"
    placeholder="rack_id"
    outlined
  />
</template>

<script>
export default {
  props: {
    rack_id: {
      type: String,
      default: ''
    },
    setValidation: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setRackId: {
      get () { return this.rack_id },
      set (newVal) { return this.$emit('update:rack_id', newVal) }
    },
    form () {
      const min = '3'
      const max = '16'
      const msg = `${min}〜${max}文字。RACK IDは半角英数字・アンダースコアが使えます`
      // ログインページ = 入力必須のバリデーションのみ
      // 会員登録ページ = 入力必須に加えて、3文字以上、＋16文字以下＋書式チェック、のバリデーション
      // 入力必須
      const required = v => !!v || ''
      // 書式チェック
      const format = v => /^[\w_]{3,16}$/.test(v) || msg
      // バリデーションの切り替え（「set-validation」が付いているかいないかで）
      const rules = this.setValidation ? [format] : [required]
      // バリデーションに引っかかった時のエラーメッセージ
      const hint = this.setValidation ? msg : undefined
      return { rules, hint }
    }
  }
}
</script>
