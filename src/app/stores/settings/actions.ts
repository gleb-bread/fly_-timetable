import { initState } from './state';
import * as SettingStoreTypes from './type';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setPaddingMainHeight = function (padding: string) {
        state.mainHeight.value = `calc(100vh - ${padding} - ${getHeightBlocksSize()})`;
        state.heightPadding.value = padding;
    };

    const setPaddingMainWidth = function (padding: string) {
        state.mainWidth.value = `calc(100vw - ${padding} - ${getWidthBlocksSize()})`;
        state.widthPadding.value = padding;
    };

    const pushHeightBlock = function (block: SettingStoreTypes.SizeBlock) {
        state.heightBlocks.value.push(block);
        state.mainHeight.value = `calc(100vh - ${state.heightPadding.value} - ${getHeightBlocksSize()})`;
    };

    const removeHeightBlock = function (id: string) {
        const index = state.heightBlocks.value.findIndex(
            (block) => block.id == id
        );

        if (index === -1) return;

        state.heightBlocks.value.splice(index, 1);
        state.mainHeight.value = `calc(100vh - ${state.heightPadding.value} - ${getHeightBlocksSize()})`;
    };

    const pushWidthBlock = function (block: SettingStoreTypes.SizeBlock) {
        state.widthBlocks.value.push(block);
        state.mainHeight.value = `calc(100vh - ${state.heightPadding.value} - ${getWidthBlocksSize()})`;
    };

    const removeWidthBlock = function (id: string) {
        const index = state.widthBlocks.value.findIndex(
            (block) => block.id == id
        );

        if (index === -1) return;

        state.widthBlocks.value.splice(index, 1);
        state.mainHeight.value = `calc(100vh - ${state.heightPadding.value} - ${getWidthBlocksSize()})`;
    };

    const getHeightBlocksSize = function () {
        let sum = 0;

        state.heightBlocks.value.forEach((block) => {
            sum += block.value;
        });

        return `${sum}px`;
    };

    const getWidthBlocksSize = function () {
        let sum = 0;

        state.widthBlocks.value.forEach((block) => {
            sum += block.value;
        });

        return `${sum}px`;
    };

    const setDrawerState = function (
        payload: SettingStoreTypes.PayloadSetDrawerState
    ) {
        state.drawers.value[payload.key] = payload.state;
    };

    const setLoading = function (flag: boolean) {
        state.observerRequest.value.setLoadingByKey('DefaultLoading', flag);
    };

    const setError = function (flag: boolean) {
        state.observerRequest.value.setErrorByKey('DefaulErrors', flag);
    };

    return {
        setPaddingMainHeight,
        setPaddingMainWidth,
        setDrawerState,
        setLoading,
        setError,
        pushHeightBlock,
        removeHeightBlock,
        pushWidthBlock,
        removeWidthBlock,
    };
};
