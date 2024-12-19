<script lang="ts" setup>
import type { Props } from "./props";
import textField from "@/widgets/fields/underlined/textField.vue";
import { initComputed } from "./initComputed";
import selectField from "@/widgets/fields/underlined/selectField.vue";
import { useFlightStore } from "@/app/stores/flights";

const { getFlight, getFlightTypes } = initComputed();

const flightStore = useFlightStore();

const update = function () {
  const id = props.itemId;
  flightStore.store.update(id);
};

const Delete = function () {
  const id = props.itemId;
  flightStore.store.Delete(id);
};

const props = defineProps<Props>();
</script>

<template>
  <td class="pb-1 pt-6">
    <selectField
      label="Тип полета"
      :items="getFlightTypes"
      :item-value="'id'"
      :item-title="'type'"
      class="text-black"
      @update:model-value="update()"
      v-model:model-value="getFlight(props.itemId).flight_type_id"
    >
    </selectField>
  </td>
  <td class="pb-1 pt-6">
    <textField
      class="text-black"
      :label="$WORDS.FLIGHTS.ARRIVAL_TO"
      @update:model-value="update()"
      v-model:model-value="getFlight(props.itemId).destination"
    >
    </textField>
  </td>
  <td class="pb-1 pt-6">
    <textField
      class="text-black"
      :label="$WORDS.FLIGHTS.ARRIVAL_TIME"
      @update:model-value="update()"
      v-model:model-value="getFlight(props.itemId).arrival_time"
    >
    </textField>
  </td>
  <td class="pb-1 pt-6">
    <textField
      class="text-black"
      :label="$WORDS.FLIGHTS.DEPARTURE_FROM"
      @update:model-value="update()"
      v-model:model-value="getFlight(props.itemId).departure_from"
    >
    </textField>
  </td>
  <td class="pb-1 pt-6">
    <textField
      class="text-black"
      :label="$WORDS.FLIGHTS.DEPARTURE_TIME"
      @update:model-value="update()"
      v-model:model-value="getFlight(props.itemId).departure_time"
    >
    </textField>
  </td>
  <td class="pb-1 pt-6">
    <textField
      class="text-black"
      :label="$WORDS.FLIGHTS.DEPARTURE_TIME"
      @update:model-value="update()"
      v-model:model-value="getFlight(props.itemId).price"
    >
    </textField>
  </td>
  <td class="pb-1 pt-6">
    <textField
      class="text-black"
      :label="$WORDS.FLIGHTS.FLIGHT_NAME"
      @update:model-value="update()"
      v-model:model-value="getFlight(props.itemId).flight_number"
    >
    </textField>
  </td>

  <td class="text-center w-25-px">
    <v-fade-transition>
      <template v-if="isHovering">
        <div>
          <VIcon
            @click.stop="Delete"
            class="text-black cursor-pointer"
            color="black"
          >
            mdi-close
          </VIcon>
        </div>
      </template>
      <template v-else>
        <VResponsive width="21"></VResponsive>
      </template>
    </v-fade-transition>
  </td>
</template>

<style lang="scss" scoped>
.w-25-px {
  width: 25px;
}
</style>
