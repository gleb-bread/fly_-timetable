import { ref } from "vue";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";

export const initStateComponents = function () {
  const genericList = ref<number[]>([]);
  const selectUser = ref<number | null>(null);

  return { genericList, selectUser };
};
