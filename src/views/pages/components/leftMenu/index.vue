<template>
  <n-menu :options="menuOptions" v-model:value="activeKey" :indent="18" />
</template>

<script lang="ts" setup>
import type { Component } from 'vue';
import { NIcon, NMenu, type MenuOption } from 'naive-ui';
import {
  PersonOutline as PersonIcon,
  HomeOutline as HomeIcon,
  SettingsOutline,
  BarChartOutline,
  ShirtOutline,
} from '@vicons/ionicons5';
import { RouterLink, useRoute } from 'vue-router';

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const route = useRoute();
const activeKey = ref<string | null>(route.path);

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/main/dashboard',
        },
        { default: () => '首页' },
      ),
    key: '/main/home',
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/main/workbench',
        },
        { default: () => '工作台' },
      ),
    key: '/main/workbench',
    icon: renderIcon(BarChartOutline),
  },
  {
    label: '系统设置',
    key: 'system-setting',
    icon: renderIcon(SettingsOutline),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/main/account-setting',
            },
            { default: () => '账号设置' },
          ),
        key: '/main/account-setting',
        icon: renderIcon(PersonIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/main/menu-setting',
            },
            { default: () => '菜单设置' },
          ),
        key: '/main/menu-setting',
        icon: renderIcon(PersonIcon),
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/main/about-us',
        },
        { default: () => '关于我们' },
      ),
    key: '/main/about-us',
    icon: renderIcon(ShirtOutline),
  },
];
</script>
