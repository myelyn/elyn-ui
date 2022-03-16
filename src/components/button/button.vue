<template>
  <button
    class="y-button"
    :class="[size ? `y-button--${size}` : '', type ? `y-button--${type}` : '']"
  >
    button
  </button>
</template>

<script lang="ts">
  export default {
    name: 'YButton'
  }
</script>
<script lang="ts" setup>
import { withDefaults } from 'vue';
interface Props {
  size?: 'large'|'default'|'small',
  type?: 'primary'|'success'|'warning'|'text'
}
const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  type: 'primary'
})
console.log(props)
</script>

<style lang="scss">
@import '../../style/mixin.scss';
@include b(button) {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background: $--button-default-background-color;
  border: $--border-base;
  border-color: $--button-default-border-color;
  color: $--button-default-font-color;
  @include m(default) {
    @include button-size(
      $--button-default-padding-vertical,
      $--button-default-padding-horizontal,
      $--button-default-font-size,
      $--button-default-border-radius
    );
  }
  @include m(large) {
    @include button-size(
      $--button-large-padding-vertical,
      $--button-large-padding-horizontal,
      $--button-large-font-size,
      $--button-large-border-radius
    );
  }
  @include m(small) {
    @include button-size(
      $--button-small-padding-vertical,
      $--button-small-padding-horizontal,
      $--button-small-font-size,
      $--button-small-border-radius
    );
  }
  @include m(primary) {
    @include button-variant(
      $--button-primary-font-color,
      $--button-primary-background-color,
      $--button-primary-border-color
    );
  }
  @include m(success) {
    @include button-variant(
      $--button-success-font-color,
      $--button-success-background-color,
      $--button-success-border-color
    );
  }
  @include m(warning) {
    @include button-variant(
      $--button-warning-font-color,
      $--button-warning-background-color,
      $--button-warning-border-color
    );
  }
  @include m(text) {
    @include button-variant(
      $--button-text-font-color,
      $--button-text-background-color,
      $--button-text-border-color
    );
  }
}

</style>