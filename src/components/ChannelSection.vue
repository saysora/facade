<script setup lang="ts">
import ChannelSectionList from './ChannelSectionList.vue';
</script>
<template>
      <!-- channel section start -->
      <div class="channel-section">
        <h3 class="channel-section-text"></h3>
        <!-- list start -->
        <ChannelSectionList :item-count="5" />
        <!-- list end -->
      </div>
</template>
