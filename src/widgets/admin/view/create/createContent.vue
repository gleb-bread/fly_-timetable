<script lang="ts" setup>
import { useFlightStore } from "@/app/stores/flights";
import textField from "@/widgets/fields/underlined/textField.vue";
import dateField from "@/widgets/fields/underlined/dateField.vue";
import { computed, ref } from "vue";
import { Helper } from "@/shared/helpers";

const flightStore = useFlightStore();

const form = ref<HTMLFormElement | null>(null);

const newFlight = computed(() => flightStore.store.getNewFlight);

const ruleDep = ref<string[]>([]);

const ruleArr = ref<string[]>([]);

const setPrice = function (v: string) {
  const price = Number(v);
  if (!isNaN(price)) {
    newFlight.value.price = price;
  }
};

const checkDateDeparture = function () {
  const res = Helper.RulesAPI.ruleRequired()[0](
    newFlight.value.departure_time_DB
  );
  ruleDep.value = res === true ? [] : [res];
  return res;
};

const checkDateArrival = function () {
  const res = Helper.RulesAPI.ruleRequired()[0](
    newFlight.value.arrival_time_DB
  );
  ruleArr.value = res === true ? [] : [res];
  return res;
};

const handlerCreateFlight = async function () {
  if (form.value) {
    const checkDateDep = checkDateDeparture();
    const checkDateArr = checkDateArrival();

    const result = await form.value.validate();

    const check =
      result.valid && checkDateDep === true && checkDateArr === true;

    if (check) {
      await flightStore.store.create();
    }
  }
};
</script>

<template>
  <v-container class="w-50">
    <v-form @submit.prevent ref="form">
      <textField
        class="mb-2"
        :rules="$HELPER.RulesAPI.ruleRequired()"
        :label="$WORDS.FLIGHTS.DEPARTURE_FROM"
        v-model:model-value="newFlight.departure_from"
      >
      </textField>

      <dateField
        class="mb-2"
        :label="$WORDS.FLIGHTS.DEPARTURE_TIME"
        :rules="$HELPER.RulesAPI.ruleRequired()"
        :error-messages="ruleDep"
        :model-value="Helper.DateAPI.getDate(newFlight.departure_time_DB)"
        @update:model-value="newFlight.departure_time = $event"
      >
      </dateField>

      <textField
        class="mb-2"
        :label="$WORDS.FLIGHTS.ARRIVAL_TO"
        :rules="$HELPER.RulesAPI.ruleRequired()"
        v-model:model-value="newFlight.destination"
      >
      </textField>

      <dateField
        class="mb-2"
        :label="$WORDS.FLIGHTS.ARRIVAL_TIME"
        :error-messages="ruleArr"
        :rules="$HELPER.RulesAPI.ruleRequired()"
        :model-value="Helper.DateAPI.getDate(newFlight.arrival_time_DB)"
        @update:model-value="newFlight.arrival_time = $event"
      >
      </dateField>

      <textField
        class="mb-2"
        :label="$WORDS.FLIGHTS.FLIGHT_NAME"
        :rules="
          $HELPER.RulesAPI.combineRules(
            $HELPER.RulesAPI.ruleRequired(),
            $HELPER.RulesAPI.ruleMaxLength(5)
          )
        "
        v-model:model-value="newFlight.flight_number"
      >
      </textField>

      <textField
        class="mb-2"
        :rules="
          $HELPER.RulesAPI.combineRules(
            $HELPER.RulesAPI.ruleRequired(),
            $HELPER.RulesAPI.ruleNum()
          )
        "
        :label="$WORDS.FLIGHTS.PRICE"
        :model-value="newFlight.price"
        @update:model-value="setPrice($event)"
      >
      </textField>

      <VBtn class="w-100" @click.stop="handlerCreateFlight" color="primary">
        Создать
      </VBtn>
    </v-form>
  </v-container>
</template>
