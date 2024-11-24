<script lang="ts" setup>
import type { Props } from "../props";
import defaultText from "@/widgets/text/defaultText.vue";
import { Helper } from "@/shared/helpers";
import { initComputed } from "./initComputed";

const props = defineProps<Props>();
const { getFlight } = initComputed();
</script>

<template>
  <td class="text-end">
    <default-text>
      {{
        Helper.FormaterAPI.convertMoneyTypeWithoutRuble(
          String(getFlight(props.itemId).price)
        )
      }}
    </default-text>
  </td>
</template>
