import type { Component } from "vue";
import type { ViewTypes } from "@/app/stores/admin/types";

export type WindowItem = {
  component: Component;
  value: ViewTypes;
  id: string;
};
