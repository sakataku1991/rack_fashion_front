<template>
  <v-text-field
    id="yourEmail"
    v-model="setEmail"
    :rules="rules"
    type="email"
    name="yourEmail"
    spellcheck="false"
    autocomplete="off"
    :placeholder="placeholder ? 'mail@example.com' : undefined"
    class="form-list-item-data-content -text"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputEmail',
  props: {
    email: {
      type: String,
      default: ''
    },
    placeholder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      rules: [
        // 入力必須
        v => !!v || '',
        // 書式チェック
        v => /.+@.+\..+/.test(v) || ''
      ]
    }
  },
  computed: {
    setEmail: {
      get () { return this.email },
      set (newVal) { return this.$emit('update:email', newVal) }
    }
  }
}
</script>
