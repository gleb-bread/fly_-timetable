<script lang="ts" setup>
import analyticContent from "./analytic/analyticContent.vue";
import { useAnalyticStore } from "@/app/stores/analytic";

const analyticStore = useAnalyticStore();

analyticStore.store.__init__();
</script>

<template>
  <analyticContent />
</template>
