import { ref } from "vue";
import * as Types from "@/shared/types";

export const initState = function () {
  const messages = ref<Types.Messages.DefaultMessage[]>([]);

  return { messages };
};
