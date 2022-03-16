<template>
  <footer
    class="y-footer"
    :style="{ height }"
  >
    <slot />
  </footer>
</template>
<script>
export default {
  name: 'YFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
};
</script>
<style lang="scss">
  @import '../../style/mixin';
  @include b(footer) {  
    box-sizing: border-box;  
    flex-shrink: 0;
  }
</style>
