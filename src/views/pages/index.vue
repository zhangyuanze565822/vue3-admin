<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider class="bg-white">
      <div class="bg-yellow-400 h-16"></div>
      <left-menu></left-menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <div class="bg-yellow-400 h-16"></div>
      </n-layout-header>
      <n-layout-content>
        <n-scrollbar class="content-height">
          <RouterView class="p-3 bg-slate-100" />
        </n-scrollbar>
      </n-layout-content>
      <!-- <n-layout-footer>成府路</n-layout-footer> -->
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">
import leftMenu from './components/leftMenu/index.vue';
</script>
