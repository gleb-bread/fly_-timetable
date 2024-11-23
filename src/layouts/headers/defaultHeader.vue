<script lang="ts" setup>
import { Helper } from "@/shared/helpers";
import { onUnmounted } from "vue";

const { handlerOnUnmounted } = Helper.ComponentsAPI.initHeightBlock(64);

onUnmounted(() => handlerOnUnmounted());
</script>

<template>
  <v-app-bar
    :color="$STYLE_VARIBLES.COLOR.WHITE"
    :elevation="$STYLE_VARIBLES.HEADERS.DEFAULT.ELEVATION"
  >
    <v-app-bar-title>{{ $WORDS.LOGO }}</v-app-bar-title>
  </v-app-bar>
</template>
