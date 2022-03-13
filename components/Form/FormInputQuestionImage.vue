<template>
  <div class="form-question-picture-container">
    <p class="form-question-picture">
      <!-- アップロードしたての画像 -->
      <img
        v-if="image_url_upload"
        :src="image_url_upload"
        alt="「質問」のアイキャッチ画像"
        class="NewQuestion__postBodyMainHeaderEyeCatchingImg form-question-picture-img"
      >
      <!-- すでに登録済みの画像 -->
      <!-- 画像未登録時の、デフォルトの画像 -->
      <img
        v-else
        :src="image_url_default"
        alt="「質問」のアイキャッチ画像"
        class="NewQuestion__postBodyMainHeaderEyeCatchingImg form-question-picture-img"
      >
    </p>
    <v-file-input
      id="questionImage"
      v-model="setImage"
      type="file"
      accept="image/jpg, image/jpeg, image/gif, image/png"
      autocomplete="off"
      tabindex="-1"
      name="questionImage"
      placeholder="画像を投稿"
      class="form-list-item-data-content -file visuallyHidden"
      v-on="$listeners"
      @change="onImagePicked"
    />
    <!-- 「@change」：「onChangeイベント」は、inputがクリックされた後に発火する処理 -->
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormInputQuestionImage',
  props: {
    image: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      image_url_upload: '',
      image_url_current: '',
      image_url_default: require('@/assets/image/thum/thum_form-question_picture-placeholder.png')
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
    // 選択した画像（ファイルを引数に取る）
    onImagePicked (file) {
      // ファイルが選択されている時で
      if (file !== undefined && file !== null) {
        // ファイルの拡張子があれば
        if (file.name.lastIndexOf('.') <= 0) {
          // ファイル名を返す？
          return
        }
        // FileReaderのインスタンス「fr」を生成する（FileReaderを使うことでファイルオブジェクトを読み込める）
        const fr = new FileReader()
        // ファイルのURLをresult属性に格納する
        fr.readAsDataURL(file)
        // 読み込んだファイルを表示する
        fr.addEventListener('load', () => {
          this.image_url_upload = fr.result
        })
      // ファイルが選択されていない時は、「image_url_upload」は空のまま
      } else {
        this.image_url_upload = ''
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
