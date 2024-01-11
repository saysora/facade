<script setup lang="ts">
import GroupBar from './GroupBar.vue';
import ServerInfo from './ServerInfo.vue';
import ChannelList from './ChannelList.vue';
import LeftPanelFooter from './LeftPanelFooter.vue';
</script>
<template>
  <div class="left-panel">
    <div class="left-panel__main">
      <GroupBar />
      <div class="server-inside">
        <ServerInfo />
        <ChannelList />
      </div>
    </div>
    <LeftPanelFooter />
  </div>
</template>
