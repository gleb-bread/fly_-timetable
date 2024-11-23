import * as ObserverElementsTypes from '../type';
import { nextTick } from 'vue';

export const setObserverByElement = function (
    element: Element,
    handlerObserver: ObserverElementsTypes.HanlderObserver
) {
    // Преобразуем элемент к типу HTMLElement, чтобы можно было работать со стилями
    const htmlElement = element as HTMLElement;

    // Сохраняем исходное значение padding
    let lastPadding = getComputedStyle(htmlElement).padding;

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'style'
            ) {
                // Получаем текущее значение padding
                const currentPadding = getComputedStyle(htmlElement).padding;

                // Проверяем, изменилось ли значение padding
                if (currentPadding !== lastPadding) {
                    lastPadding = currentPadding; // Обновляем последнее значение
                    handlerObserver(htmlElement); // Вызываем обработчик
                }
            }
        });
    });

    observer.observe(element, {
        attributes: true, // Отслеживаем изменения атрибутов
        attributeFilter: ['style'], // Фильтруем по стилям
    });
};
