<script lang="ts" setup>
import defaultText from "@/widgets/text/defaultText.vue";
import { useCartStore } from "@/app/stores/cart";
import { computed } from "vue";
import { Helper } from "@/shared/helpers";

const cartStore = useCartStore();

const getTotal = computed(() => {
  let result = 0;
  const carts = Object.values(cartStore.store.getCarts);

  carts.forEach((cart) => {
    result += (cart.count ?? 0) * (cart?.flight?.price ?? 0);
  });

  return Helper.FormaterAPI.convertMoneyTypeWithoutRuble(String(result));
});
</script>

<template>
  <tr>
    <td colspan="4">
      <defaultText class="font-xl">{{ $WORDS.CART.TITLE.TOTAL }}</defaultText>
    </td>
    <td colspan="3" class="text-end">
      <defaultText class="font-xl">{{ getTotal }}</defaultText>
    </td>
  </tr>
</template>
