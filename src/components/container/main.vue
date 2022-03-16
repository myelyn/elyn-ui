<template>
  <section class="y-main">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: 'YMain',
};
</script>

<style lang="scss">
@import '../../style/mixin';
@include b(main) {
  display: block;
  flex: 1;
  box-sizing: border-box;
}
</style>
