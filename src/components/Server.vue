<script setup lang="ts">
import { randomColors } from '@/constants/colors';
defineProps<{
  active: boolean;
}>();

const iconColor = randomColors();

</script>
<template>
  <div class="server-panel__items-item" :class="{ 'selected': active }">
    <div class="server-panel__items-item__icon" :style="`background: ${iconColor}`"></div>
    <div class="server-panel__items-item__details">
      <div class="server-panel__items-item__details-name"></div>
      <div class="server-panel__items-item__details-sub"></div>
    </div>
  </div>
</template>
