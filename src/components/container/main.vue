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
@import '../../style/mixin.scss';
@include b(main) {
  flex: 1;
}

</style>
