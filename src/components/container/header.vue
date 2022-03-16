<template>
  <header
    class="y-header"
    :style="{ height }"
  >
    <slot />
  </header>
</template>
<script>
export default {
  name: 'YHeader',
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
  @include b(header) {  
    box-sizing: border-box;  
    flex-shrink: 0;
  }
</style>
