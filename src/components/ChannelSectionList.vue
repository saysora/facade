<script setup lang="ts">
import ChannelItem from './ChannelItem.vue';
export interface IChannelSectionList {
  itemCount: number;
}
const props = withDefaults(defineProps<IChannelSectionList>(), {
  itemCount: 1
});
</script>
<template>
  <div class="channel-section__list">
    <ChannelItem v-for="i in props.itemCount" :key="i" />
  </div>
</template>
