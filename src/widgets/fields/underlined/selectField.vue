<script lang="ts" setup generic="T, K extends keyof T, J extends keyof T">
import type { SelectProps } from "../props";
import type { SelectEmits } from "../emits";
import { computed } from "vue";

const props = defineProps<SelectProps<T, K, J>>();

const emits = defineEmits<SelectEmits<T, K>>();

const mv = computed(() => props.modelValue);

const items = computed(() => props.items);
</script>

<template>
  <v-select
    :items="items"
    :label="label"
    :model-value="mv"
    :variant="'underlined'"
    :no-data-text="$WORDS.COMMON.LIST_EMPTY"
    :density="'compact'"
    @update:model-value="emits('update:modelValue', $event)"
    :item-value="<any>itemValue"
    :item-title="<any>itemTitle"
  >
  </v-select>
</template>
