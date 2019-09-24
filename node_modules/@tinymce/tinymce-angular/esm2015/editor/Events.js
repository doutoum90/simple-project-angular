var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Output, EventEmitter } from '@angular/core';
export class Events {
    constructor() {
        this.onBeforePaste = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onContextMenu = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onDblclick = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragDrop = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragGesture = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseEnter = new EventEmitter();
        this.onMouseLeave = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onAddUndo = new EventEmitter();
        this.onBeforeAddUndo = new EventEmitter();
        this.onBeforeExecCommand = new EventEmitter();
        this.onBeforeGetContent = new EventEmitter();
        this.onBeforeRenderUI = new EventEmitter();
        this.onBeforeSetContent = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onClearUndos = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onDirty = new EventEmitter();
        this.onExecCommand = new EventEmitter();
        this.onGetContent = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onLoadContent = new EventEmitter();
        this.onNodeChange = new EventEmitter();
        this.onPostProcess = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreInit = new EventEmitter();
        this.onPreProcess = new EventEmitter();
        this.onProgressState = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onSaveContent = new EventEmitter();
        this.onSetAttrib = new EventEmitter();
        this.onObjectResizeStart = new EventEmitter();
        this.onObjectResized = new EventEmitter();
        this.onObjectSelected = new EventEmitter();
        this.onSetContent = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onVisualAid = new EventEmitter();
    }
}
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforePaste", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBlur", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onContextMenu", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onCopy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onCut", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDblclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDrag", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragDrop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragGesture", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDragOver", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDrop", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onFocusIn", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onFocusOut", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onKeyDown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onKeyPress", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onKeyUp", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseDown", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseEnter", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseLeave", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseMove", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseOut", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseOver", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onMouseUp", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPaste", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSelectionChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onActivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onAddUndo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeAddUndo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeExecCommand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeGetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeRenderUI", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onBeforeSetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onClearUndos", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDeactivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onDirty", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onExecCommand", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onGetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onHide", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onInit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onLoadContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onNodeChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPostProcess", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPostRender", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPreInit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onPreProcess", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onProgressState", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onRedo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onRemove", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onReset", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSaveContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSetAttrib", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onObjectResizeStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onObjectResized", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onObjectSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSetContent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onShow", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onSubmit", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onUndo", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Events.prototype, "onVisualAid", void 0);
export const validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZWRpdG9yL0V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9yRCxNQUFNLE9BQU8sTUFBTTtJQUFuQjtRQUNtQixrQkFBYSxHQUEyQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNFLFdBQU0sR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRSxZQUFPLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakUsa0JBQWEsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RSxXQUFNLEdBQTJDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEUsVUFBSyxHQUEyQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLGVBQVUsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxXQUFNLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0QsZUFBVSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLGNBQVMsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRSxrQkFBYSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RFLGVBQVUsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRSxXQUFNLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0QsWUFBTyxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pFLGNBQVMsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRSxlQUFVLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEUsY0FBUyxHQUEwQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RFLGVBQVUsR0FBMEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RSxZQUFPLEdB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SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLGFBQWE7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9iajxUPiB7XG4gIGV2ZW50OiBUO1xuICBlZGl0b3I6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CZWZvcmVQYXN0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CbHVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Db250ZXh0TWVudTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNvcHk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQ3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRibGNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ0Ryb3A6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdHZXN0dXJlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Gb2N1c0luOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRm9jdXNPdXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uS2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxLZXlib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25LZXlVcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEtleWJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk1vdXNlRG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk1vdXNlRW50ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Nb3VzZUxlYXZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Nb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Nb3VzZVVwOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uUGFzdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25BZGRVbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CZWZvcmVBZGRVbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CZWZvcmVFeGVjQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQmVmb3JlR2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQmVmb3JlUmVuZGVyVUk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkJlZm9yZVNldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQ2xlYXJVbmRvczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRGlydHk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkV4ZWNDb21tYW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25HZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25IaWRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Jbml0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Mb2FkQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uTm9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uUG9zdFByb2Nlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblByZUluaXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblByZVByb2Nlc3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblByb2dyZXNzU3RhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlbW92ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uUmVzZXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNhdmVDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25TZXRBdHRyaWI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk9iamVjdFJlc2l6ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25PYmplY3RSZXNpemVkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25PYmplY3RTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uU2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uU2hvdzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uU3VibWl0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25VbmRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25WaXN1YWxBaWQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkRXZlbnRzOiAoa2V5b2YgRXZlbnRzKVtdID0gW1xuICAnb25BY3RpdmF0ZScsXG4gICdvbkFkZFVuZG8nLFxuICAnb25CZWZvcmVBZGRVbmRvJyxcbiAgJ29uQmVmb3JlRXhlY0NvbW1hbmQnLFxuICAnb25CZWZvcmVHZXRDb250ZW50JyxcbiAgJ29uQmVmb3JlUmVuZGVyVUknLFxuICAnb25CZWZvcmVTZXRDb250ZW50JyxcbiAgJ29uQmVmb3JlUGFzdGUnLFxuICAnb25CbHVyJyxcbiAgJ29uQ2hhbmdlJyxcbiAgJ29uQ2xlYXJVbmRvcycsXG4gICdvbkNsaWNrJyxcbiAgJ29uQ29udGV4dE1lbnUnLFxuICAnb25Db3B5JyxcbiAgJ29uQ3V0JyxcbiAgJ29uRGJsY2xpY2snLFxuICAnb25EZWFjdGl2YXRlJyxcbiAgJ29uRGlydHknLFxuICAnb25EcmFnJyxcbiAgJ29uRHJhZ0Ryb3AnLFxuICAnb25EcmFnRW5kJyxcbiAgJ29uRHJhZ0dlc3R1cmUnLFxuICAnb25EcmFnT3ZlcicsXG4gICdvbkRyb3AnLFxuICAnb25FeGVjQ29tbWFuZCcsXG4gICdvbkZvY3VzJyxcbiAgJ29uRm9jdXNJbicsXG4gICdvbkZvY3VzT3V0JyxcbiAgJ29uR2V0Q29udGVudCcsXG4gICdvbkhpZGUnLFxuICAnb25Jbml0JyxcbiAgJ29uS2V5RG93bicsXG4gICdvbktleVByZXNzJyxcbiAgJ29uS2V5VXAnLFxuICAnb25Mb2FkQ29udGVudCcsXG4gICdvbk1vdXNlRG93bicsXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uTW91c2VNb3ZlJyxcbiAgJ29uTW91c2VPdXQnLFxuICAnb25Nb3VzZU92ZXInLFxuICAnb25Nb3VzZVVwJyxcbiAgJ29uTm9kZUNoYW5nZScsXG4gICdvbk9iamVjdFJlc2l6ZVN0YXJ0JyxcbiAgJ29uT2JqZWN0UmVzaXplZCcsXG4gICdvbk9iamVjdFNlbGVjdGVkJyxcbiAgJ29uUGFzdGUnLFxuICAnb25Qb3N0UHJvY2VzcycsXG4gICdvblBvc3RSZW5kZXInLFxuICAnb25QcmVQcm9jZXNzJyxcbiAgJ29uUHJvZ3Jlc3NTdGF0ZScsXG4gICdvblJlZG8nLFxuICAnb25SZW1vdmUnLFxuICAnb25SZXNldCcsXG4gICdvblNhdmVDb250ZW50JyxcbiAgJ29uU2VsZWN0aW9uQ2hhbmdlJyxcbiAgJ29uU2V0QXR0cmliJyxcbiAgJ29uU2V0Q29udGVudCcsXG4gICdvblNob3cnLFxuICAnb25TdWJtaXQnLFxuICAnb25VbmRvJyxcbiAgJ29uVmlzdWFsQWlkJ1xuXTtcbiJdfQ==