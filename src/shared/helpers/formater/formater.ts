import * as ServiceTypes from '@/entities/services/Service/types';

export const convertMoneyType = function (value: any) {
    if (typeof value != 'string') value = String(value);
    value =
        value && value != 'null' && value != 'undefined' ? value + ' р' : '';
    value = value.replace(/ /g, '');
    value = value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    return value ? value : '-';
};

export const convertMoneyTypeWithoutRuble = function (value: string) {
    value = value && value != 'null' && value != 'undefined' ? value : '';
    value = value.replace(/ /g, '');
    return value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

export const getZeroIfNumberNotExist = function (
    value: number | null | undefined | string
) {
    if (!value || isNaN(Number(value))) return 0;
    else return Number(value);
};

export const getDashIfStringNotExist = function (
    str: string | null | number | undefined
) {
    return str ? String(str) : '-';
};

export const formatBytes = function (a: number, b: number = 2): string {
    if (!+a) return '0 Bytes';
    const c: number = b < 0 ? 0 : b;
    const d: number = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${
        ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'][d]
    }`;
};

export const getShortFio = function (str: string | null | undefined) {
    if (str) {
        let arrNames = str.split(' ');
        if (arrNames.length > 1) {
            return arrNames.reduce((result, word, index) => {
                if (index === 0) {
                    result += word + ' ';
                } else {
                    try {
                        result += word[0].toUpperCase() + '.';
                    } catch {
                        result += ' ';
                    }
                }
                return result;
            }, '');
        } else {
            return str;
        }
    } else {
        return '-';
    }
};

export const getCacheObject = function <T, K extends keyof T>(
    array: T[],
    keyCache: K
) {
    return array.reduce(
        (obj, value) => {
            const key = value[keyCache];
            if (
                typeof key === 'string' ||
                typeof key === 'number' ||
                typeof key === 'symbol'
            ) {
                obj[key] = value;
            }
            return obj;
        },
        {} as ServiceTypes.ServiceCacheObj<T, K>
    );
};

export const getIndexList = function <T, K extends keyof T>(
    array: T[],
    keyCache: K
) {
    return array.reduce(
        (list, value) => {
            const key = value[keyCache];
            list.push(key);
            return list;
        },
        [] as Array<T[K]>
    );
};
