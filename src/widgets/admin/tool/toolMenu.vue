<script lang="ts" setup>
import { useAdminStore } from "@/app/stores/admin";
import { computed } from "vue";
import type { ViewTypes } from "@/app/stores/admin/types";

const adminStore = useAdminStore();

const getMenu = computed(() => adminStore.components.getToolMenu);

const setView = function (view: ViewTypes) {
  adminStore.components.setView(view);
};
</script>

<template>
  <VNavigationDrawer :mobile="false" rail>
    <template v-for="item in getMenu">
      <v-list-item
        @click.stop="setView(item.value)"
        v-if="item.condition()"
        :prepend-icon="item.icon"
      >
        {{ item.title }}
      </v-list-item>
    </template>
  </VNavigationDrawer>
</template>
