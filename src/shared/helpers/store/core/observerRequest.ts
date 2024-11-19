import * as ObserverRequestTypes from './types';

export class ObserverRequest<
    L extends string = ObserverRequestTypes.DefaultLoading,
    E extends string = ObserverRequestTypes.DefaultError,
> {
    private _loadings: { [key in L]: boolean };
    private _errors: { [key in E]: boolean };

    constructor() {
        this._loadings = {} as { [key in L]: boolean };
        this._errors = {} as { [key in E]: boolean };
    }

    protected get loadings() {
        return this._loadings;
    }

    protected get errors() {
        return this._errors;
    }

    public getLoadingByKey(key: L) {
        return Boolean(this._loadings[key]);
    }

    public getErrorByKey(key: E) {
        return Boolean(this._errors[key]);
    }

    public setErrorByKey(key: E, flag: boolean) {
        this._errors[key] = flag;
    }

    public setLoadingByKey(key: L, flag: boolean) {
        this._loadings[key] = flag;
    }
}
