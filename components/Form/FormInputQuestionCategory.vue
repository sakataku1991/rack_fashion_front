<template>
  <v-select
    id="questionCategory"
    :items="items"
    item-text="name"
    item-value="id"
    v-model="setCategory"
    name="questionCategory"
    placeholder="アイテムカテゴリーを選択"
    class="form-list-item-data-content -select"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputQuestionCategory',
  props: {
    category_id: {
      type: Number
    }
  },
  data () {
    return {
      items: [
        { id: 1, name: 'jackets', code: 1 },
        { id: 2, name: 'tops', code: 2 },
        { id: 3, name: 'bottoms', code: 3 },
        { id: 4, name: 'skirts', code: 4 },
        { id: 5, name: 'dresses', code: 5 },
        { id: 6, name: 'shoes', code: 6 },
        { id: 7, name: 'bags', code: 7 },
        { id: 8, name: 'hats', code: 8 },
        { id: 9, name: 'accessories', code: 9 },
        { id: 10, name: 'goods', code: 10 },
        { id: 11, name: 'others', code: 11 }
      ],
      rules: [
        // 入力必須
        v => !!v || '質問のカテゴリーを選択してください'
      ]
    }
  },
  computed: {
    setCategory: {
      get () {
        return this.category_id
      },
      set (newVal) {
        return this.$emit('update:category_id', newVal)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
