import { Drawers } from './template';

export type PayloadSetDrawerState = {
    key: DrawerKeys;
    state: boolean;
};

export type DrawerKeys = keyof ReturnType<typeof Drawers>;

export type SettingLoadings = 'DefaultLoading';

export type SettingErrors = 'DefaulErrors';

export type SizeBlocks = SizeBlock[];

export type SizeBlock = {
    id: string;
    value: number;
};
