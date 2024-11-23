import { AliasesUI } from "../aliases/aliases.enum";

export const Default: {
  [key: string]: undefined | Record<string, unknown>;
  global?: Record<string, unknown>;
} = {
  [AliasesUI.DesktopMenuList]: {
    class: ["desktop-menu-list"],
  },
  [AliasesUI.DesktopMenuListItem]: {
    class: ["desktop-menu-list-item"],
    link: true,
  },
  [AliasesUI.OutlinedTextField]: {
    variant: "outlined",
    density: "compact",
  },
  [AliasesUI.OutlinedBtn]: {
    variant: "outlined",
    density: "compact",
    class: ["text-body-2"],
  },
  [AliasesUI.DefaultBtn]: {
    variant: "tonal",
    color: "primary",
    density: "compact",
    class: ["text-body-2"],
  },
  [AliasesUI.NavigationProject]: {
    width: 240,
    color: "background",
    VList: {
      class: "px-2",
      VListGroup: {
        VListItem: {
          rounded: "lg",
          link: true,
          minHeight: 20,
        },
      },
    },
  },
  [AliasesUI.SearchFieldFlights]: {
    class: ["v--text-field--search-field-flights"],
    density: "compact",
    rounded: "pill",
    variant: "outlined",
    hideDetails: true,
  },
};
