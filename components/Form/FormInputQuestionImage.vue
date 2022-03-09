<template>
  <div class="form-question-picture-container">
    <p class="form-question-picture">
      <!-- アップロードしたての画像 -->
      <img
        v-if="image_src_photo_upload"
        :src="image_src_photo_upload"
        alt="「質問」のアイキャッチ画像"
        class="NewQuestion__postBodyMainHeaderEyeCatchingImg form-question-picture-img"
      >
      <!-- すでに登録済みの画像 -->
      <!-- 画像未登録時の、デフォルトの画像 -->
      <img
        v-else
        :src="image_src_photo_default"
        alt="「質問」のアイキャッチ画像"
        class="NewQuestion__postBodyMainHeaderEyeCatchingImg form-question-picture-img"
      >
    </p>
    <v-file-input
      id="questionImage"
      v-model="setImage"
      type="file"
      accept="image/png, image/jpeg, image/gif"
      autocomplete="off"
      tabindex="-1"
      name="questionImage"
      placeholder="画像を投稿"
      class="form-list-item-data-content -file visuallyHidden"
      v-on="$listeners"
      @change="onImagePicked"
    />
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormInputQuestionImage',
  props: {
    image: {
      type: []
    }
  },
  data () {
    return {
      image_src_photo_upload: '',
      image_src_photo_current: '',
      image_src_photo_default: require('@/assets/image/thum/thum_form-question_picture-placeholder.png')
    }
  },
  computed: {
    setImage: {
      get () {
        return this.image
      },
      set (newVal) {
        return this.$emit('update:image', newVal)
      }
    }
  },
  methods: {
    onImagePicked (file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(file)
        fr.addEventListener('load', () => {
          this.image_src_photo_upload = fr.result
        })
      } else {
        this.image_src_photo_upload = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// アイキャッチ画像
.NewQuestion__postBodyMainHeaderEyeCatching {
  @include sp {
  };
  @include pc {
    cursor: pointer;
  };
}
// ホバー時の効果
.NewQuestion__postBodyMainHeaderEyeCatching {
  @include sp {
    &:active {
      filter: brightness(94%);
    }
  };
  @include pc {
    cursor: pointer;
    &:hover {
      filter: brightness(94%);
    }
  };
}
.NewQuestion__postBodyMainHeaderEyeCatchingImg {
  @include sp {
    border-radius: 6px;
    height: 160px;
    width: 160px;
  };
  @include pc {
    border-radius: 6px;
    height: 160px;
    width: 160px;
  };
}
</style>
