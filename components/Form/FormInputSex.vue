<template>
  <div class="form-list-item-data-content -radio -check">
    <v-radio-group class="form-list -layer2">
      <v-radio
        v-for="(sex, i) in sexes"
        :key="`sex-${i}`"
        :label="$t(`sexes.${sex.sex}`)"
        :value="`${sex.code}`"
        name="yourSex"
        tabindex="0"
      >
      </v-radio>
      <!-- <li class="form-list-item">
        <label
          class="form-list-item-data-content-label"
        >
          <input
            type="radio"
            name="questionGender"
            value="1"
            tabindex="0"
          >
          <span class="form-list-item-data-content-label-text">男性</span>
        </label>
      </li>
      <li class="form-list-item">
        <label
          class="form-list-item-data-content-label"
        >
          <input
            type="radio"
            name="questionGender"
            value="2"
          >
          <span class="form-list-item-data-content-label-text">女性</span>
        </label>
      </li>
      <li class="form-list-item">
        <label
          class="form-list-item-data-content-label"
        >
          <input
            type="radio"
            name="questionGender"
            value="9"
          >
          <span class="form-list-item-data-content-label-text">その他</span>
        </label>
      </li> -->
      <!-- <li class="form-list-item visuallyHidden">
        <label
          class="form-list-item-data-content-label"
        >
          <input
            type="radio"
            name="questionGender"
            value="0"
            checked
            disabled
            tabindex="-1"
          >
          <span class="form-list-item-data-content-label-text">不明</span>
        </label>
      </li> -->
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormInputSex',
  props: {
    sex: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      sexes: [
        // { sex: 'not known', code: '0' },
        { sex: 'male', code: '1' },
        { sex: 'female', code: '2' },
        { sex: 'not applicable', code: '9' }
      ]
    }
  },
  computed: {
    setSex: {
      get () {
        return this.sex
      },
      set (newVal) {
        return this.$emit('update:sex', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-list-item-data-content.-radio {
  @include sp {
  };
  @include pc {
  };
}
.form-list-item-data-content-label-text {
  @include sp {
    font-size: 1.4rem;
    line-height: 1;
  };
  @include pc {
    font-size: 1.6rem;
    line-height: 1;
  };
}
.form-list.-layer2 {
  display: flex;
  @include sp {
    gap: 32px;
  };
  @include pc {
    gap: 24px;
  };
}
</style>
