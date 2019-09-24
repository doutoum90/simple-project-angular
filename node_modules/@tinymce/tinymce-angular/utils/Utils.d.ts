/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { EditorComponent } from '../editor/editor.component';
declare const bindHandlers: (ctx: EditorComponent, editor: any, initEvent: Event) => void;
declare const uuid: (prefix: string) => string;
declare const isTextarea: (element?: Element | undefined) => element is HTMLTextAreaElement;
declare const normalizePluginArray: (plugins?: string | string[] | undefined) => string[];
declare const mergePlugins: (initPlugins: string | string[], inputPlugins?: string | string[] | undefined) => string[];
declare const noop: (...args: any[]) => void;
export { bindHandlers, uuid, isTextarea, normalizePluginArray, mergePlugins, noop };
