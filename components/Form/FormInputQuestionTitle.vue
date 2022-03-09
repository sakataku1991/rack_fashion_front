<template>
  <v-text-field
    id="questionTitle"
    v-model="setTitle"
    :rules="rules"
    name="questionTitle"
    spellcheck="false"
    autocomplete="off"
    placeholder="ここに質問のタイトルを入力"
    class="NewQuestion__postBodyMainHeaderTitleText form-list-item-data-content -text"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputQuestionTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 50
    return {
      max,
      rules: [
        // 入力必須
        v => !!v || '質問のタイトルを入力してください',
        // 50文字以内
        v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
      ]
    }
  },
  computed: {
    setTitle: {
      get () {
        return this.title
      },
      set (newVal) {
        return this.$emit('update:title', newVal)
      }
    }
  }
}
</script>

<style lang="scss">
.NewQuestion__postBodyMainHeaderTitleText.form-list-item-data-content.-text input {
  background-color: $white;
  font-weight: bold;
  outline: none;
  resize: none;
  @include sp {
    border: 1px solid $white;
    font-size: 2.0rem;
    height: 100%;
    line-height: 1.4;
    min-height: 1em;
    padding: 0;
    width: 100%;
  };
  @include pc {
    border: 1px solid $white;
    font-size: 2.4rem;
    height: 100%;
    line-height: 1.4;
    min-height: 1em;
    padding: 0;
    width: 100%;
  };
}
</style>
