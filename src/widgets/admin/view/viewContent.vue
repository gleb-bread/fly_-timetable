<script lang="ts" setup>
import { useAdminStore } from "@/app/stores/admin";
import { computed } from "vue";
import type { ViewTypes } from "@/app/stores/admin/types";
import * as ComponentTypes from "./type";
import analytic from "./analytic.vue";
import createView from "./createView.vue";
import { Helper } from "@/shared/helpers";
import defaultView from "./defaultView.vue";
import updateFlight from "./updateFlight.vue";
import updateRole from "./updateRole.vue";

const adminStore = useAdminStore();

const getView = computed({
  get() {
    return adminStore.components.getView;
  },

  set(value: ViewTypes) {
    adminStore.components.setView(value);
  },
});

const ViewList: ComponentTypes.WindowItem[] = [
  {
    value: null,
    component: defaultView,
    id: Helper.RandomAPI.generateUniqueId(40),
  },
  {
    value: "getAnalytic",
    component: analytic,
    id: Helper.RandomAPI.generateUniqueId(40),
  },
  {
    value: "updateFlight",
    component: updateFlight,
    id: Helper.RandomAPI.generateUniqueId(40),
  },
  {
    value: "updateUser",
    component: updateRole,
    id: Helper.RandomAPI.generateUniqueId(40),
  },
  {
    value: "createFlight",
    component: createView,
    id: Helper.RandomAPI.generateUniqueId(40),
  },
];
</script>

<template>
  <v-window v-model="getView">
    <v-window-item v-for="view in ViewList" :value="view.value" :key="view.id">
      <component :is="view.component"></component>
    </v-window-item>
  </v-window>
</template>
