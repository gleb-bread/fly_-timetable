<script lang="ts" setup>
import { Helper } from "@/shared/helpers";
import { ref, computed, withDefaults, useAttrs } from "vue";
import type { PropsDate } from "../props";
import type { DateEmits } from "../emits";

const attr = useAttrs();

const props = withDefaults(defineProps<PropsDate>(), {
  errorMessages: () => [] as string[],
});
const emits = defineEmits<DateEmits>();

const flagShowDatePicker = ref(false);

const getViewDate = computed(() => {
  return Helper.DateAPI.dateFormat(props.modelValue);
});

const getDate = computed(() => {
  return props.modelValue;
});

const setDate = function (date: Date | null) {
  let isDate = false;
  let dateFormat: null | Date = null;

  if (Array.isArray(date)) {
    dateFormat = new Date(date[0]);
    if (!isNaN(dateFormat.getTime())) isDate = true;
  } else if (date !== null) {
    dateFormat = new Date(date);
    if (!isNaN(dateFormat.getTime())) isDate = true;
  }

  if (isDate) {
    emits("update:modelValue", Helper.DateAPI.dateFormatSQL(dateFormat) ?? "");
  }
};

const deleteDate = function () {
  emits("update:modelValue", "");
};
</script>

<template>
  <v-menu
    :close-on-content-click="false"
    v-model:model-value="flagShowDatePicker"
    transition="fade-transition"
  >
    <template v-slot:activator="{ props }">
      <v-text-field
        slot="activator"
        v-bind="props"
        :class="attr.class"
        density="compact"
        :error-messages="errorMessages"
        :model-value="getViewDate"
        :label="label"
        :rules="props.rules"
        :variant="'underlined'"
        readonly
      >
        <template #append-inner>
          <template v-if="!!getViewDate">
            <VIcon @click.stop="deleteDate()" class="cursor-pointer">
              mdi-close
            </VIcon>
          </template>
        </template>
      </v-text-field>
    </template>
    <v-container>
      <v-row justify="space-around">
        <v-locale-provider locale="ru">
          <v-date-picker
            :model-value="getDate"
            color="white"
            bg-color="white"
            v-click-outside="() => (flagShowDatePicker = false)"
            @update:model-value="setDate($event)"
            cancel-text="Закрыть"
            input-placeholder="дд.мм.гггг"
            input-text="Ввести дату"
            ok-text="Принять"
            header=""
            class="elevation-1"
            title="Введите дату"
            show-adjacent-months
          >
          </v-date-picker>
        </v-locale-provider>
      </v-row>
    </v-container>
  </v-menu>
</template>

<style scoped lang="scss"></style>
