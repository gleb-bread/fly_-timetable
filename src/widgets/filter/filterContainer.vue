<script lang="ts" setup>
import { computed } from "vue";
import * as Types from "@/shared/types";
import type { FilterContainerProps } from "./props";
import { useSettingsStore } from "@/app/stores/settings";
const props = defineProps<FilterContainerProps>();
const settingsStore = useSettingsStore();
import dateFilter from "./dateFilter.vue";
import textFilter from "./textFilter.vue";

const mobileFilters = props.filters.flat();

const isMobile = computed(() => settingsStore.isMobile);
</script>

<template>
  <template v-if="!isMobile">
    <template v-for="(comppnentList, index) in filters">
      <v-row
        class="mx-3"
        :class="{
          'mt-3': index === 0,
        }"
      >
        <template v-for="component in comppnentList">
          <v-col>
            <template v-if="component.component === 'date-field'">
              <dateFilter v-bind="component"></dateFilter>
            </template>
            <template v-else-if="component.component === 'text-field'">
              <textFilter v-bind="component"></textFilter>
            </template>
          </v-col>
        </template>
      </v-row>
    </template>
  </template>
  <template v-else>
    <template v-for="component in mobileFilters">
      <v-row>
        <v-col>
          <template v-if="component.component === 'date-field'">
            <dateFilter v-bind="component"></dateFilter>
          </template>
          <template v-else-if="component.component === 'text-field'">
            <textFilter v-bind="component"></textFilter>
          </template>
        </v-col>
      </v-row>
    </template>
  </template>
</template>
