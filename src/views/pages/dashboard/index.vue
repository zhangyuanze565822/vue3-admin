<template>
  <div>
    <n-space v-for="item in 10" :key="item">
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary1112222 </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
