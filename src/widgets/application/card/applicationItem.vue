<script lang="ts" setup>
import type { Props } from "./props";
import { useApplicationStore } from "@/app/stores/application";
import { computed } from "vue";
import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";

const props = defineProps<Props>();
const applicationStore = useApplicationStore();

const applications = computed(
  () => applicationStore.store.getApplications[props.id] ?? []
);

const getPrice = function (application: Models.Application) {
  return Helper.FormaterAPI.convertMoneyTypeWithoutRuble(
    String((application?.flight?.price ?? 0) * (application.count ?? 0))
  );
};

const getTotal = computed(() => {
  let result = 0;

  applications.value.forEach((appliication) => {
    result += (appliication.count ?? 0) * (appliication.flight?.price ?? 0);
  });

  return Helper.FormaterAPI.convertMoneyTypeWithoutRuble(String(result));
});
</script>

<template>
  <VCard color="white" class="mb-2">
    <VCardTitle primary-title>
      {{ $WORDS.APPLICATION.APPLICATION }} №{{ id }}
    </VCardTitle>
    <VCardText>
      <template v-for="application in applications">
        <div class="d-flex w-100 justify-space-between">
          <div>{{ application?.flight?.departure_from ?? "-" }}</div>
          <div>{{ getPrice(application) }}</div>
        </div>
      </template>
      <div class="mb-2"></div>
      <v-divider></v-divider>
      <div class="mb-2"></div>
      <div class="d-flex w-100 justify-space-between">
        <div class="font-xl">{{ $WORDS.CART.TITLE.TOTAL }}</div>
        <div class="font-xl">{{ getTotal }}</div>
      </div>
    </VCardText>
  </VCard>
</template>
