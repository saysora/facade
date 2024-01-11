<script setup lang="ts">
import { inject } from 'vue';
import Server from './Server.vue';
import type { UIProvide } from './UI.vue';
const { toggleOpen } = inject('panelOpen') as UIProvide;
</script>
<template>
  <div class="server-panel">
    <div class="server-panel__items">
      <Server v-for="i in 4" :key="i" :active="i === 1" />
    </div>
    <div class="server-button">
      <div class="server-button__icon" @click="toggleOpen"></div>
    </div>
  </div>
</template>
