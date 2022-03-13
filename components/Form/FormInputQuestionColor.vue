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
        { id: 1, name: 'ホワイト', code: 1 },
        { id: 2, name: 'ブラック', code: 2 },
        { id: 3, name: 'グレー', code: 3 },
        { id: 4, name: 'ブラウン', code: 4 },
        { id: 5, name: 'ベージュ', code: 5 },
        { id: 6, name: 'グリーン', code: 6 },
        { id: 7, name: 'ブルー', code: 7 },
        { id: 8, name: 'パープル', code: 8 },
        { id: 9, name: 'イエロー', code: 9 },
        { id: 10, name: 'ピンク', code: 10 },
        { id: 11, name: 'レッド', code: 11 },
        { id: 12, name: 'オレンジ', code: 12 },
        { id: 13, name: 'シルバー', code: 13 },
        { id: 14, name: 'ゴールド', code: 14 },
        { id: 15, name: 'その他', code: 15 }
        // { id: 1, name: 'white', code: 1 },
        // { id: 2, name: 'black', code: 2 },
        // { id: 3, name: 'gray', code: 3 },
        // { id: 4, name: 'brown', code: 4 },
        // { id: 5, name: 'beige', code: 5 },
        // { id: 6, name: 'green', code: 6 },
        // { id: 7, name: 'blue', code: 7 },
        // { id: 8, name: 'purple', code: 8 },
        // { id: 9, name: 'yellow', code: 9 },
        // { id: 10, name: 'pink', code: 10 },
        // { id: 11, name: 'red', code: 11 },
        // { id: 12, name: 'orange', code: 12 },
        // { id: 13, name: 'silver', code: 13 },
        // { id: 14, name: 'gold', code: 14 },
        // { id: 15, name: 'others', code: 15 }
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
