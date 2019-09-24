/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export declare type callbackFn = () => void;
export interface IStateObj {
    listeners: callbackFn[];
    scriptId: string;
    scriptLoaded: boolean;
}
declare const create: () => IStateObj;
declare const load: (state: IStateObj, doc: Document, url: string, callback: callbackFn) => void;
export { create, load };
