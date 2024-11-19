<script lang="ts" setup>
import defaultText from "./defaultText.vue";
</script>

<template>
  <span class="text-grey-lighten-1 font-xs"><slot name="label"></slot></span>
  <br />
  <defaultText><slot></slot></defaultText>
</template>
