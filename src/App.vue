<template>
  <y-container style="height: 500px;">
    <y-header />
    <y-container>
      <y-container>
        <y-header />
        <y-main />
        <y-footer />
      </y-container>
      <y-main>
        <y-container>
          <y-aside />
          <y-main />
        </y-container>
      </y-main>
    </y-container>
    <y-footer />
  </y-container>
</template>

<script setup lang="ts">
import yContainer from './components/container/container.vue';
import yHeader from './components/container/header.vue';
import yFooter from './components/container/footer.vue';
import yMain from './components/container/main.vue';
import yAside from './components/container/aside.vue';
</script>

<style>
.y-header {
  background-color: #eef;
}
.y-main {
  background-color: #eee;
}
</style>
