<template>
  <v-text-field
    v-model="setRackId"
    label="RACK IDを入力"
    placeholder="あなたの表示名"
    outlined
  />
</template>

<script>
export default {
  props: {
    rack_id: {
      type: String,
      default: ''
    }
  },
  computed: {
    setRackId: {
      get () { return this.rack_id },
      set (newVal) { return this.$emit('update:rack_id', newVal) }
    }
  }
}
</script>
