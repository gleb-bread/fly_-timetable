<script lang="ts" setup>
import { useApplicationStore } from "@/app/stores/application";

const applicationStore = useApplicationStore();

const addApplication = function () {
  applicationStore.store.create();
};
</script>

<template>
  <tr>
    <td class="px-0 border-0" colspan="7">
      <v-btn @click.stop="addApplication" color="primary w-100">
        {{ $WORDS.CART.TITLE.BUY }}
      </v-btn>
    </td>
  </tr>
</template>
