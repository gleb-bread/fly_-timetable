import type { Slot } from 'vue';
import { Helper } from '..';
import { useSettingsStore } from '@/app/stores/settings';

export const findElement = (query: string) => document.querySelector(query);

export const findElements = (query: string) => document.querySelectorAll(query);

export const checkSlot = (slot: Slot<any> | undefined) => {
    return Boolean(slot);
};

export const initHeightBlock = function (height: number) {
    const settingsStore = useSettingsStore();
    const id = Helper.RandomAPI.generateUniqueId(40);

    settingsStore.pushHeightBlock({
        id: id,
        value: height,
    });

    const handlerOnUnmounted = function () {
        settingsStore.removeHeightBlock(id);
    };

    return { handlerOnUnmounted };
};
