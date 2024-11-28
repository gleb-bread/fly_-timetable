<script lang="ts" setup>
import analyticTypes from "./analyticTypes.vue";
import analyticWrapper from "./analyticWrapper.vue";
import analyticTimeline from "./analyticTimeline.vue";
import chartContent from "./chartContent.vue";
</script>

<template>
  <analyticWrapper>
    <analyticTypes />
    <analyticTimeline />
    <chartContent />
  </analyticWrapper>
</template>
