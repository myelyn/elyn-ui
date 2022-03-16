<template>
  <section
    class="y-container"
    :class="{'is-vertical': isVertical}"
  >
    <slot />
    <slot name="test" />
  </section>
</template>
<script lang="ts">
export default {
  name: 'YContainer',
};
</script>
<script setup lang="ts">
import {
  useSlots, computed, VNode, Component,
} from 'vue';

interface Props {
  direction?: string
}
const props = defineProps<Props>();
// 计算布局方式，如slot中包含header或footer，则为垂直布局，若没有，则根据传入的direction判断
const isVertical = computed(() => {
  const slots = useSlots();
  if (slots.default) {
    return slots.default().some((vn:VNode) => {
      const tag = (vn.type as Component).name;
      console.log(tag)
      return tag === 'YHeader' || tag === 'YFooter';
    });
  }
  return props.direction === 'vertical';
});
</script>
<style lang="scss">
@import '../../style/mixin.scss';
@include b(container) {
  display: flex;
  flex: 1;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 0;
  flex-basis: auto;
  &.is-vertical {
    flex-direction: column;
  }
}
</style>
