import { useAnalyticStore } from "@/app/stores/analytic";

export const __init__ = async function () {
  const analyticStore = useAnalyticStore();

  analyticStore.store.__init__();
};
