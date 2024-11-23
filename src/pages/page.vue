<script lang="ts" setup>
import { computed } from "vue";
import flightContent from "@/widgets/flights/flightContent.vue";
import { Helper } from "@/shared/helpers";
import { useFlightStore } from "@/app/stores/flights";

const flightStore = useFlightStore();

Helper.FilterAPI.setUpdateEntityByFilters(flightStore.store.__init__);
</script>

<template>
  <flightContent />
</template>
