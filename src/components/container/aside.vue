<template>
  <section
    class="y-aside"
    :style="{ width }"
  >
    <slot />
  </section>
</template>
<script>
export default {
  name: 'YAside',
  props: {
    width: {
      type: String,
      default: '80px',
    },
  },
};
</script>
<style lang="scss">
@import '../../style/mixin.scss';
@include b(aside) {
  flex-shrink: 0;
}

</style>
