import { initState } from "./state";
import * as Types from "@/shared/types";

export const initActions = function (state: ReturnType<typeof initState>) {
  const addMessage = function (message: Types.Messages.DefaultMessage) {
    state.messages.value.push(message);
  };

  const removeMessage = function (id: number) {
    state.messages.value.splice(id, 1);
  };

  return { addMessage, removeMessage };
};
