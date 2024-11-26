<script lang="ts" setup>
import { Helper } from "@/shared/helpers";
import { onUnmounted } from "vue";
import cartIcon from "./icons/cartIcon.vue";
import userIcon from "./icons/userIcon.vue";

const { handlerOnUnmounted } = Helper.ComponentsAPI.initHeightBlock(64);

onUnmounted(() => handlerOnUnmounted());
</script>

<template>
  <v-app-bar
    class="pr-2"
    :color="$STYLE_VARIBLES.COLOR.WHITE"
    :elevation="$STYLE_VARIBLES.HEADERS.DEFAULT.ELEVATION"
  >
    <v-app-bar-title>
      <span
        @click.stop="$HELPER.RouterAPI.redirect('PAGE')"
        class="cursor-pointer"
      >
        {{ $WORDS.LOGO }}
      </span>
    </v-app-bar-title>

    <template v-slot:append>
      <cartIcon class="mr-3" />
      <userIcon />
    </template>
  </v-app-bar>
</template>
