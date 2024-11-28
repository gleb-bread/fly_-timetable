import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";
import * as StoreTypes from "./types";

export const initState = function () {
  const analytics = ref<Models.Analytic[]>([]);

  return { analytics };
};
