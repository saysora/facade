<script setup lang="ts">
import MemberItem from './MemberItem.vue';
const props = defineProps<{
  visible?: boolean;
}>();
</script>
<template>
  <div class="main-panel__content-panel__lists-list member-list" :class="{visible: props.visible}">
    <MemberItem v-for="i in 10" :key="i" />
  </div>
</template>
