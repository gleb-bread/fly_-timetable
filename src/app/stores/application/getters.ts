import { initState } from "./state";
import { Helper } from "@/shared/helpers";
import { computed } from "vue";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getApplications = computed(() => state.applications.value);

  return { getApplications };
};
