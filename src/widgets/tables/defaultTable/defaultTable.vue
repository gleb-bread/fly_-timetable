<script lang="ts" setup generic="T, Y">
import type { Props } from "../props";
import type { Slots } from "../slots";
import { useSettingsStore } from "@/app/stores/settings";
import { Colors } from "../colors";
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

const getBgColor = computed(() => Colors[props.bgColor ?? "white"]);
</script>

<template>
  <v-table
    :density="'compact'"
    :class="getBgColor"
    class="timetable__table__collapse"
    :height="height"
  >
    <template v-if="props.headerItems">
      <thead>
        <tr>
          <template v-for="item in props.headerItems">
            <slot name="headerItem" :item="item">
              <th>
                {{ item }}
              </th>
            </slot>
          </template>
        </tr>
      </thead>
    </template>
    <tbody>
      <template v-for="item in props.items">
        <slot name="item" :item="item">
          <tr>
            <template v-for="field in item">
              <td>{{ field }}</td>
            </template>
          </tr>
        </slot>
      </template>
      <slot></slot>
    </tbody>
  </v-table>
</template>
