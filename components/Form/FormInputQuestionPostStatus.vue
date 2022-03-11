<template>
  <v-select
    id="questionPostStatus"
    :items="items"
    item-text="name"
    item-value="id"
    v-model="setPostStatus"
    name="questionPostStatus"
    placeholder="保存方法を選択"
    class="form-list-item-data-content -select"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputQuestionPostStatus',
  props: {
    post_status_id: {
      type: Number
    }
  },
  data () {
    return {
      items: [
        { id: 1, name: 'unsaved', code: 0 },
        { id: 2, name: 'publish', code: 1 },
        { id: 3, name: 'draft', code: 2 },
        { id: 4, name: 'private', code: 3 },
        { id: 5, name: 'delete', code: 4 }
      ],
      rules: [
        // 入力必須
        v => !!v || '質問の公開状況を選択してください'
      ]
    }
  },
  computed: {
    setPostStatus: {
      get () {
        return this.post_status_id
      },
      set (newVal) {
        return this.$emit('update:post_status_id', newVal)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
