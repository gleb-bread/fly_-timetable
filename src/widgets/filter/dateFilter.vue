<script lang="ts" setup>
import { Helper } from "@/shared/helpers";
import { ref, computed, withDefaults } from "vue";
import type { DateFieldProps } from "./props";
import { initComputed } from "./computed";
import { useFilterStore } from "@/app/stores/filter";

const props = withDefaults(defineProps<DateFieldProps>(), {
  variant: "underlined",
});

const filterStore = useFilterStore();

const { getFilters, getLabel, deleteFilter } = initComputed();

const flagShowDatePicker = ref(false);

const getViewDate = computed(() => {
  return Helper.DateAPI.dateFormat(String(getFilters.value[props.filterKey]));
});

const getDate = computed(() => {
  return Helper.DateAPI.getDateFromView(getViewDate.value).getTime()
    ? Helper.DateAPI.getDateFromView(getViewDate.value)
    : new Date();
});

const setDate = function (date: Date | string[]) {
  let isDate = true;
  let dateFormat: null | Date = null;

  if (Array.isArray(date)) {
    dateFormat = new Date(date[0]);
    if (!dateFormat.getTime()) isDate = false;
  } else {
    dateFormat = new Date(date);
    if (!dateFormat.getTime()) isDate = false;
  }

  if (isDate) {
    filterStore.setFilter({
      key: props.filterKey,
      value: Helper.DateAPI.dateFormatSQL(dateFormat) ?? "",
    });
  }
};
</script>

<template>
  <div>
    <v-menu
      :close-on-content-click="false"
      v-model:model-value="flagShowDatePicker"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props }">
        <v-text-field
          slot="activator"
          v-bind="props"
          :hide-details="true"
          class="mb-2"
          density="compact"
          :model-value="getViewDate"
          :label="getLabel(filterKey)"
          :variant="variant"
          readonly
        >
          <template #append-inner>
            <template v-if="!!getViewDate">
              <VIcon
                @click.stop="deleteFilter(filterKey)"
                class="cursor-pointer"
              >
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
  </div>
</template>

<style scoped lang="scss"></style>
