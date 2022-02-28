<template>
  <v-text-field
    id="yourUserName"
    v-model="setName"
    :rules="rules"
    :counter="max"
    name="yourUserName"
    spellcheck="false"
    autocomplete="off"
    placeholder="rackさん"
    class="form-list-item-data-content -text"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputUserName',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 30
    return {
      max,
      rules: [
        // 入力必須
        v => !!v || 'ユーザー名を入力してください',
        // 30文字以内
        v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
      ]
    }
  },
  computed: {
    setName: {
      get () {
        return this.name
      },
      set (newVal) {
        return this.$emit('update:name', newVal)
      }
    }
  }
}
</script>
