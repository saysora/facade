<script setup lang="ts">
const props = defineProps<{
  member?: boolean;
  active?: boolean;
}>();
</script>
<template>
  <div class="main-panel__content-panel__buttons-button" :class="{ member: props.member, active: props.active }">
    <slot></slot>
  </div>
</template>
