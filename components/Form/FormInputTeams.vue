<template>
  <div class="form-list-item-data-content -checkbox -check">
    <ul class="form-list -layer2">
      <!-- <v-checkbox
        v-model="ex4"
        label="利用規約"
        name="ourTeams"
        value="1"
        hide-details
      >
        <span class="form-list-item-data-content-label-text"><nuxt-link to="/terms" target="_blank" class="form-list-item-data-content-label-text-link text-link" ontouchstart="">利用規約</nuxt-link>に同意する</span>
      </v-checkbox> -->
      <li class="form-list-item">
        <label
          class="form-list-item-data-content-label"
        >
          <input
            type="checkbox"
            name="ourTeams"
            value="1"
          >
          <span class="form-list-item-data-content-label-text"><nuxt-link to="/terms" target="_blank" class="form-list-item-data-content-label-text-link text-link" ontouchstart="">利用規約</nuxt-link>に同意する</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentsFormInputTeams',
  data () {
    const max = 30
    return {
      max,
      rules: [
        // 入力必須
        v => !!v || '',
        // 30文字以内
        v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.form-list-item.-teams .form-list-item-data-content.-checkbox {
  @include sp {
  };
  @include pc {
  };
}
</style>
