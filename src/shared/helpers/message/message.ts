import { useMessageStore } from "@/app/stores/message";
import * as Types from "@/shared/types";

export const addMessage = function (message: Types.Messages.DefaultMessage) {
  const messageStore = useMessageStore();
  messageStore.addMessage(message);
};

export const removeMessage = function (id: number) {
  const messageStore = useMessageStore();
  messageStore.removeMessage(id);
};

export const checkError = function <T extends object>(
  errorMessages: T | Types.Error.UnknownError
): null | T {
  const messageStore = useMessageStore();

  if ("unknown" in errorMessages) {
    messageStore.addMessage({
      result: false,
      message: errorMessages.unknown,
    });

    return null;
  } else {
    return errorMessages as T;
  }
};
