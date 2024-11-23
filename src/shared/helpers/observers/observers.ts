import { Helper } from "..";
import * as ObserverHelperTypes from "./type";

export const HandlerSetObserverToElement = function (
  query: string,
  handlerFound: ObserverHelperTypes.HandlerFoundElement
) {
  const observer = new MutationObserver(() => {
    const element = Helper.ComponentsAPI.findElement(query);

    if (element) {
      handlerFound(element);
      observer.disconnect();
    }
  });

  observer.observe(<HTMLElement>document.querySelector("body"), {
    attributes: false,
    childList: true,
  });
};
