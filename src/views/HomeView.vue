<template>
  <main>
    <n-space>
      <n-button type="error"> Error </n-button>
      <n-button type="error" @click="handleAddEvent"> {{ count }} </n-button>
    </n-space>

    <TheWelcome />
  </main>
</template>
<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
const count = ref(1);
const handleAddEvent = () => {
  count.value++;
};
</script>
