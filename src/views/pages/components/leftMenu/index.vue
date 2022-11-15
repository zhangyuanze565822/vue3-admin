<template>
  <n-menu :options="menuOptions" @update:value="handleUpdateValue" :indent="18" />
</template>

<script lang="ts" setup>
import type { Component } from 'vue';
import { NIcon, NMenu, type MenuOption } from 'naive-ui';
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  // HomeOutline as HomeIcon,
} from '@vicons/ionicons5';
// import { RouterLink } from 'vue-router';

function handleUpdateValue() {}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  // {
  //   label: () =>
  //     h(
  //       RouterLink,
  //       {
  //         to: {
  //           name: 'home',
  //           params: {
  //             lang: 'zh-CN',
  //           },
  //         },
  //       },
  //       { default: () => '回家' },
  //     ),
  //   key: 'go-back-home',
  //   icon: renderIcon(HomeIcon),
  // },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer',
        },
        '且听风吟',
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '叙事者',
        key: 'narrator',
        icon: renderIcon(PersonIcon),
      },
      {
        label: '羊男',
        key: 'sheep-man',
        icon: renderIcon(PersonIcon),
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
];
</script>
