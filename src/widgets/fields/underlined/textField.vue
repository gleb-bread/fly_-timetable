<script lang="ts" setup>
import { computed } from "vue";
import type { FieldEmits } from "../emits";
import type { PropsField } from "../props";

const props = defineProps<PropsField>();
const emits = defineEmits<FieldEmits>();

const getModelValue = computed(() => props.modelValue);

const updateModelValue = function (v: string) {
  emits("update:modelValue", v);
};
</script>

<template>
  <VTextField
    :model-value="getModelValue"
    :label="props.label"
    :rules="<any>props.rules"
    @update:model-value="updateModelValue"
    :variant="'underlined'"
    :density="'compact'"
    type="text"
    :prepend-inner-icon="props.prependIcon"
  />
</template>
