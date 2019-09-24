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
var Events = /** @class */ (function () {
    function Events() {
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
    return Events;
}());
export { Events };
export var validEvents = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZWRpdG9yL0V2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9yRDtJQUFBO1FBQ21CLGtCQUFhLEdBQTJDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0UsV0FBTSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLFlBQU8sR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSxrQkFBYSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZFLFdBQU0sR0FBMkMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxVQUFLLEdBQTJDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsZUFBVSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BFLFdBQU0sR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRCxlQUFVLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsY0FBUyxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGtCQUFhLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEUsZUFBVSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLFdBQU0sR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRCxZQUFPLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakUsY0FBUyxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25FLGVBQVUsR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRSxjQUFTLEdBQTBDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEUsZUFBVSxHQUEwQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZFLFlBQU8sR0FBMEMsSUFBSSxZQUFZLEVB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QUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixhQUFhO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPYmo8VD4ge1xuICBldmVudDogVDtcbiAgZWRpdG9yOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudHMge1xuICBAT3V0cHV0KCkgcHVibGljIG9uQmVmb3JlUGFzdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQmx1cjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQ29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Db3B5OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkN1dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EYmxjbGljazogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWc6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdEcm9wOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnR2VzdHVyZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uRm9jdXNJbjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEZvY3VzRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzT3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uS2V5RG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEtleWJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbktleVByZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxLZXlib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Nb3VzZURvd246IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Nb3VzZUVudGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VMZWF2ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VVcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblBhc3RlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Q2xpcGJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25BY3RpdmF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQWRkVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQmVmb3JlQWRkVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uQmVmb3JlRXhlY0NvbW1hbmQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkJlZm9yZUdldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkJlZm9yZVJlbmRlclVJOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CZWZvcmVTZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNsZWFyVW5kb3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRpcnR5OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25FeGVjQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uR2V0Q29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uSW5pdDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uTG9hZENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk5vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblBvc3RQcm9jZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Qb3N0UmVuZGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25QcmVJbml0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25QcmVQcm9jZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Qcm9ncmVzc1N0YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZWRvOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblJlc2V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25TYXZlQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uU2V0QXR0cmliOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25PYmplY3RSZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uT2JqZWN0UmVzaXplZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uT2JqZWN0U2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNob3c6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBvblN1Ym1pdDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9uVmlzdWFsQWlkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZEV2ZW50czogKGtleW9mIEV2ZW50cylbXSA9IFtcbiAgJ29uQWN0aXZhdGUnLFxuICAnb25BZGRVbmRvJyxcbiAgJ29uQmVmb3JlQWRkVW5kbycsXG4gICdvbkJlZm9yZUV4ZWNDb21tYW5kJyxcbiAgJ29uQmVmb3JlR2V0Q29udGVudCcsXG4gICdvbkJlZm9yZVJlbmRlclVJJyxcbiAgJ29uQmVmb3JlU2V0Q29udGVudCcsXG4gICdvbkJlZm9yZVBhc3RlJyxcbiAgJ29uQmx1cicsXG4gICdvbkNoYW5nZScsXG4gICdvbkNsZWFyVW5kb3MnLFxuICAnb25DbGljaycsXG4gICdvbkNvbnRleHRNZW51JyxcbiAgJ29uQ29weScsXG4gICdvbkN1dCcsXG4gICdvbkRibGNsaWNrJyxcbiAgJ29uRGVhY3RpdmF0ZScsXG4gICdvbkRpcnR5JyxcbiAgJ29uRHJhZycsXG4gICdvbkRyYWdEcm9wJyxcbiAgJ29uRHJhZ0VuZCcsXG4gICdvbkRyYWdHZXN0dXJlJyxcbiAgJ29uRHJhZ092ZXInLFxuICAnb25Ecm9wJyxcbiAgJ29uRXhlY0NvbW1hbmQnLFxuICAnb25Gb2N1cycsXG4gICdvbkZvY3VzSW4nLFxuICAnb25Gb2N1c091dCcsXG4gICdvbkdldENvbnRlbnQnLFxuICAnb25IaWRlJyxcbiAgJ29uSW5pdCcsXG4gICdvbktleURvd24nLFxuICAnb25LZXlQcmVzcycsXG4gICdvbktleVVwJyxcbiAgJ29uTG9hZENvbnRlbnQnLFxuICAnb25Nb3VzZURvd24nLFxuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbk1vdXNlTW92ZScsXG4gICdvbk1vdXNlT3V0JyxcbiAgJ29uTW91c2VPdmVyJyxcbiAgJ29uTW91c2VVcCcsXG4gICdvbk5vZGVDaGFuZ2UnLFxuICAnb25PYmplY3RSZXNpemVTdGFydCcsXG4gICdvbk9iamVjdFJlc2l6ZWQnLFxuICAnb25PYmplY3RTZWxlY3RlZCcsXG4gICdvblBhc3RlJyxcbiAgJ29uUG9zdFByb2Nlc3MnLFxuICAnb25Qb3N0UmVuZGVyJyxcbiAgJ29uUHJlUHJvY2VzcycsXG4gICdvblByb2dyZXNzU3RhdGUnLFxuICAnb25SZWRvJyxcbiAgJ29uUmVtb3ZlJyxcbiAgJ29uUmVzZXQnLFxuICAnb25TYXZlQ29udGVudCcsXG4gICdvblNlbGVjdGlvbkNoYW5nZScsXG4gICdvblNldEF0dHJpYicsXG4gICdvblNldENvbnRlbnQnLFxuICAnb25TaG93JyxcbiAgJ29uU3VibWl0JyxcbiAgJ29uVW5kbycsXG4gICdvblZpc3VhbEFpZCdcbl07XG4iXX0=