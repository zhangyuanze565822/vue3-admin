<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <RouterView />
  </n-config-provider>
</template>
<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui';
const lightThemeOverrides = {
  common: {
    primaryColor: '#000000',
  },
  // ...
};

const darkThemeOverrides = {
  common: {
    primaryColor: '#FFFFFF',
  },
  // ...
};

const theme = null;
</script>
