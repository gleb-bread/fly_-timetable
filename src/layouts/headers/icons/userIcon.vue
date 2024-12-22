<script lang="ts" setup>
import { useUserStore } from "@/app/stores/user";
import { computed } from "vue";

const userStore = useUserStore();
</script>

<template>
  <v-menu :close-on-content-click="true">
    <template #activator="{ props }">
      <v-icon v-bind="props" class="cursor-pointer"> mdi-account </v-icon>
    </template>

    <VCard color="white">
      <VList bg-color="white" class="py-0">
        <v-list-item
          @click="$HELPER.RouterAPI.redirect('APPLICATION')"
          class="cursor-pointer us-none font-xs font-weight-medium"
          :density="'compact'"
        >
          <template #prepend>
            <div class="mr-2">
              <VIcon>mdi-text-box</VIcon>
            </div>
          </template>
          {{ $WORDS.MENU.USER.APPLICATION }}
        </v-list-item>
        <v-list-item
          @click="$HELPER.RouterAPI.redirect('ADMIN')"
          v-if="userStore.state.getIsStuff"
          class="cursor-pointer us-none font-xs font-weight-medium"
          :density="'compact'"
        >
          <template #prepend>
            <div class="mr-2">
              <VIcon>mdi-wrench-cog-outline</VIcon>
            </div>
          </template>
          {{ $WORDS.MENU.USER.ADMIN }}
        </v-list-item>
      </VList>
    </VCard>
  </v-menu>
</template>
