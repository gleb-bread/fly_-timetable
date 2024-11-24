import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";
import * as CartStoreTemplate from "./template";

export const initState = function () {
  const carts = ref<Types.Objects.NumberObject<Models.Cart>>({});
  const newCart = ref(CartStoreTemplate.newCart());

  return { carts, newCart };
};
