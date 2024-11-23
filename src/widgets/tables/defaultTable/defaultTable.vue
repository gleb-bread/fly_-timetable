<script lang="ts" setup generic="T, Y">
import type { Props } from "../props";
import type { Slots } from "../slots";
import { useSettingsStore } from "@/app/stores/settings";
import { computed } from "vue";

const props = defineProps<Props<T, Y>>();
const slots = defineSlots<Slots<T, Y>>();
const settingsStore = useSettingsStore();

const height = computed(() => {
  if (props.scroll === undefined || props.scroll) {
    return settingsStore.getMaxHeight;
  } else {
    return undefined;
  }
});

const getHeight = computed(() => settingsStore.getMaxHeight);
</script>

<template>
  <v-table class="timetable__bg__color__white" :height="height">
    <template v-if="props.headerItems">
      <thead>
        <tr>
          <template v-for="item in props.headerItems">
            <slot name="headerItem" :item="item">
              <th>{{ item }}</th>
            </slot>
          </template>
        </tr>
      </thead>
    </template>
    <tbody>
      <template v-for="item in props.items">
        <tr>
          <slot name="item" :item="item">
            <template v-for="field in item">
              <td>{{ field }}</td>
            </template>
          </slot>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>
