<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >
      {{ iconName }} icon
    </title>

    <g
      class="icon"
      :fill="isHover ? iconHoverColor : iconColor"
      @mouseover="isHover = true;"
      @mouseout="isHover = false;"
    >
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'ComponentsIconBase',
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    iconHoverColor: {
      type: String,
      default: 'currentColor'
    }
  },
  data () {
    return {
      isHover: false
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  /* margin-bottom: -2px; */
  /* yes, I'm that particular about formatting */
}
.icon {
  /* transition: fill 0.4s ease; */
}
</style>
