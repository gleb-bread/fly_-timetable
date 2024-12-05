import * as StoreTypes from "./types";
import { Lang } from "@/app/lang";
import { useUserStore } from "../user";

export const ToolsMenu = function () {
  const WORDS = new Lang().WORDS;
  const userStore = useUserStore();

  return [
    {
      value: "createFlight",
      icon: "mdi-plus",
      title: WORDS.TOOLMENU.CREATEFLIGHT,
      condition: () =>
        !!userStore.state.getPermissionByKey("flight")?.includes("create"),
    },
    {
      value: "updateFlight",
      icon: "mdi-tools",
      title: WORDS.TOOLMENU.UPDATEFLIGHT,
      condition: () =>
        !!userStore.state.getPermissionByKey("flight")?.includes("update"),
    },
    {
      value: "updateUser",
      icon: "mdi-fingerprint",
      title: WORDS.TOOLMENU.UPDATEUSER,
      condition: () =>
        !!userStore.state.getPermissionByKey("role")?.includes("create"),
    },
    {
      value: "getAnalytic",
      icon: "mdi-chart-bell-curve",
      title: WORDS.TOOLMENU.ANALYTIC,
      condition: () =>
        !!userStore.state.getPermissionByKey("analytic")?.includes("getAll"),
    },
  ] as StoreTypes.ToolItem[];
};
