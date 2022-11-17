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
  Menu: {
    // itemIconColor: '#1890ff',
    itemIconColorActive: '#1890ff',
    itemIconColorActiveHover: '#1890ff',
    itemIconColorChildActive: '#1890ff',
    itemIconColorChildActiveHover: '#1890ff',
    itemIconColorHover: '#1890ff',

    itemTextColorHover: '#1890ff',
    itemTextColorActiveHover: '#1890ff',
    itemTextColorChildActiveHover: '#1890ff',
    itemTextColorActive: '#1890ff',
    itemTextColorChildActive: '#1890ff',
    // itemTextColor: '#1890ff',

    itemColorActive: 'rgba(24, 144, 255, 0.15)',
    itemColorActiveHover: 'rgba(24, 144, 255, 0.15)',
    itemColorActiveCollapsed: 'rgba(24, 144, 255, 0.15)',

    // arrowColor: '#1890ff',
    arrowColorHover: '#1890ff',
    arrowColorActive: '#1890ff',
    arrowColorActiveHover: '#1890ff',
    arrowColorChildActive: '#1890ff',
    arrowColorChildActiveHover: '#1890ff',
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
