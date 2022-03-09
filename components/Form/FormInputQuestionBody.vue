<template>
  <v-textarea
    id="questionBody"
    v-model="setBody"
    :rules="rules"
    name="questionBody"
    spellcheck="false"
    autocomplete="off"
    placeholder="質問の内容"
    class="form-list-item-data-content -textarea"
  />
</template>

<script>
export default {
  name: 'ComponentsFormInputQuestionBody',
  props: {
    body: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 2000
    return {
      max,
      rules: [
        // 入力必須
        v => !!v || '質問内容を入力してください',
        // 2000文字以内
        v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
      ]
    }
  },
  computed: {
    setBody: {
      get () {
        return this.body
      },
      set (newVal) {
        return this.$emit('update:body', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 「メディアキット」
.MediaKit {
  @include sp {
  };
  @include pc {
    padding: 0 0 16px 32px;
  };
}
.MediaKit__info {
  @include sp {
  };
  @include pc {
  };
}
.MediaKit__infoContent {
  @include sp {
  };
  @include pc {
  };
}
</style>
