<template>
  <div class="form-profile-avatar-container">
    <p class="form-profile-avatar">
      <icon-base
        class="form-profile-avatar-icon icon icon-addAPhoto"
        height="24"
        icon-name="add-a-photo"
        width="24"
      >
        <icon-add-a-photo />
      </icon-base>
      <v-avatar
        class="form-profile-avatar-v-avatar"
      >
        <!-- アップロードしたてのアバター -->
        <img
          v-if="image_src_avatar_upload"
          :src="image_src_avatar_upload"
          alt="ユーザーアバター"
          class="form-profile-avatar-img"
        >
        <!-- すでに登録済みのアバター -->
        <img
          v-else-if="avatar_image_url"
          :src="avatar_image_url"
          alt="ユーザーアバター"
          class="form-profile-avatar-img"
        >
        <!-- アバター未登録時の、デフォルトのアバター -->
        <img
          v-else
          :src="image_src_avatar_default"
          alt="ユーザーアバター"
          class="form-profile-avatar-img"
        >
      </v-avatar>
      <!-- <img
        :src="image_src_avatar_default"
        alt="ユーザーアバター"
        class="form-profile-avatar-img"
      > -->
    </p>
    <p class="form-profile-avatar-text">
      アイコンを変更
    </p>
    <v-file-input
      id="yourAvatar"
      v-model="setAvatar"
      type="file"
      accept="image/png, image/jpeg, image/gif"
      name="yourAvatar"
      placeholder="アイコンを変更"
      class="form-list-item-data-content -file visuallyHidden"
      v-on="$listeners"
      @change="onImagePicked"
    />
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormInputAvatar',
  props: {
    avatar: {
      type: []
    },
    avatar_image_url: {
      type: null
    }
  },
  data () {
    return {
      image_src_avatar_upload: '',
      image_src_avatar_current: '',
      image_src_avatar_default: require('@/assets/image/icon/icon_default-user-avatar.png')
    }
  },
  computed: {
    setAvatar: {
      get () {
        return this.avatar
      },
      set (newVal) {
        return this.$emit('update:avatar', newVal)
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
          this.image_src_avatar_upload = fr.result
        })
      } else {
        this.image_src_avatar_upload = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-profile-avatar {
  position: relative;
  z-index: 0;
  @include sp {
  };
  @include pc {
  };
}
// 「画像を追加」のアイコン
.form-profile-avatar-icon {
  color: rgba($white_rgb, 0.8);
  position: absolute;
  pointer-events: none;
  z-index: 1;
  @include sp {
    height: 24px;
    left: calc(50% - calc(24px / 2));
    top: calc(50% - calc(24px / 2));
    width: 24px;
  };
  @include pc {
    height: 24px;
    left: calc(50% - calc(24px / 2));
    top: calc(50% - calc(24px / 2));
    width: 24px;
  };
}
.form-profile-avatar-v-avatar {
  display: block;
  @include sp {
    border-radius: 50%;
    height: 88px !important;
    margin: 0 auto;
    width: 88px !important;
  };
  @include pc {
    border-radius: 50%;
    height: 104px !important;
    margin: 0 auto;
    width: 104px !important;
  };
}
.form-profile-avatar-img {
  @include sp {
    border-radius: 50%;
    height: 88px;
    width: 88px;
  };
  @include pc {
    border-radius: 50%;
    height: 104px;
    width: 104px;
  };
}
.form-profile-avatar + .form-profile-avatar-text {
  @include sp {
    margin-top: 10px;
  };
  @include pc {
    margin-top: 10px;
  };
}
.form-profile-avatar-text {
  color: $blue_hsb_s56b70;
  text-align: center;
  @include sp {
    font-size: 1.2rem;
  };
  @include pc {
    font-size: 1.2rem;
  };
}
.form-list-item-data-content.-file {
  @include sp {
  };
  @include pc {
  };
}
// ホバー時の効果
.form-list-item.-avatar .form-list-item-data-label {
  @include sp {
    .form-profile-avatar-img {
      filter: brightness(60%);
    }
    &:active .form-profile-avatar-img {
      filter: brightness(56%);
    }
  };
  @include pc {
    cursor: pointer;
    .form-profile-avatar-img {
      filter: brightness(60%);
    }
    &:hover .form-profile-avatar-img {
      filter: brightness(56%);
    }
  };
}
</style>
