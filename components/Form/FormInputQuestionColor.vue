<template>
  <v-select
    id="questionColor"
    v-model="setColor"
    :items="colors"
    item-text="name"
    item-value="id"
    name="questionColor"
    placeholder="色を選択"
    class="form-list-item-data-content -select"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputQuestionColor',
  props: {
    color_id: {
      type: Number
    }
  },
  data () {
    return {
      colors: [
        { id: 1, name: 'white', code: 1 },
        { id: 2, name: 'black', code: 2 },
        { id: 3, name: 'gray', code: 3 },
        { id: 4, name: 'brown', code: 4 },
        { id: 5, name: 'beige', code: 5 },
        { id: 6, name: 'green', code: 6 },
        { id: 7, name: 'blue', code: 7 },
        { id: 8, name: 'purple', code: 8 },
        { id: 9, name: 'yellow', code: 9 },
        { id: 10, name: 'pink', code: 10 },
        { id: 11, name: 'red', code: 11 },
        { id: 12, name: 'orange', code: 11 },
        { id: 13, name: 'silver', code: 11 },
        { id: 14, name: 'gold', code: 11 },
        { id: 15, name: 'others', code: 11 }
      ],
      rules: [
        // 入力必須
        v => !!v || '質問の色を選択してください'
      ]
    }
  },
  computed: {
    setColor: {
      get () {
        return this.color_id
      },
      set (newVal) {
        return this.$emit('update:color_id', newVal)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
