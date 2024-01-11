<script setup lang="ts">
import ChatMessage from './ChatMessage.vue';
</script>
<template>
  <div class="main-panel__content-primary-messages">
    <ChatMessage v-for="i in 20" :key="i" />
  </div>
</template>
