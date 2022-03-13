<template>
  <div class="form-list-item-data-content -radio -check">
    <v-radio-group
      v-model="setSex"
      class="form-list -layer2"
    >
      <v-radio
        v-for="(sex, i) in sexes"
        :key="`sex-${i}`"
        :label="$t(`sexes.${sex.name}`)"
        :value="`${sex.id}`"
        name="yourSex"
        tabindex="0"
      />
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormInputSex',
  props: {
    sex_id: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      sexes: [
        // { id: 1, name: 'not known', code: '0', alias: 'unanswered' },
        { id: 2, name: 'male', code: '1', alias: 'men' },
        { id: 3, name: 'female', code: '2', alias: 'women' },
        { id: 4, name: 'not applicable', code: '9', alias: 'others' }
      ]
    }
  },
  computed: {
    setSex: {
      get () {
        return this.sex_id
      },
      set (newVal) {
        return this.$emit('update:sex_id', newVal)
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
