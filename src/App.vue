<template>
  <div style="width: 100%; height: 500px;">
    <y-container>
      <y-header>header</y-header>
      <y-container>
        <y-aside>aside</y-aside>
        <y-main>main</y-main>
      </y-container>
      <y-footer />
    </y-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.y-header {
  background-color: #eef;
}
.y-main {
  background-color: #eee;
}
.y-footer {
  background-color: #cef;
}
</style>
