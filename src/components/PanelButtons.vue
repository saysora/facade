<script setup lang="ts">
import PanelButton from './PanelButton.vue';
import MemberIcon from './icons/MemberIcon.vue';
import ListIcon from './icons/ListIcon.vue';
</script>
<template>
  <div class="main-panel__content-panel__buttons">
    <PanelButton member active>
      <MemberIcon />
    </PanelButton>
    <PanelButton>
      <ListIcon />
    </PanelButton>
  </div>
</template>
