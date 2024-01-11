<script setup lang="ts">
import ServerPanel from './ServerPanel.vue';
import MainScreen from './MainScreen.vue';
import { provide, ref } from 'vue';

export interface UIProvide {
  panelOpen: boolean;
  toggleOpen: () => void;
}

const panelOpen = ref(false);

const toggleOpen = () => {
  panelOpen.value = !panelOpen.value;
};

provide('panelOpen', {
  panelOpen,
  toggleOpen
});

</script>
<template>
  <div class="ui-hold">
    <div class="ui" :class="{'server-open': panelOpen}">
      <ServerPanel />
      <MainScreen />
    </div>
  </div>
</template>
