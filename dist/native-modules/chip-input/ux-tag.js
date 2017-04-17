var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable, ViewResources, processAttributes } from 'aurelia-templating';
import { DOM } from 'aurelia-pal';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine } from '../styles/style-engine';
import { processDesignAttributes } from '../designs/design-attributes';
var UxTag = (function () {
    function UxTag(element, resources, styleEngine) {
        this.element = element;
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.theme = null;
        this.value = undefined;
    }
    UxTag.prototype.created = function (_, myView) {
        this.view = myView;
    };
    UxTag.prototype.bind = function () {
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
    };
    UxTag.prototype.themeChanged = function (newValue) {
        this.styleEngine.applyTheme(this, newValue);
    };
    UxTag.prototype.closeTag = function () {
        var closeEvent = DOM.createCustomEvent('close', { bubbles: false });
        this.element.dispatchEvent(closeEvent);
    };
    return UxTag;
}());
__decorate([
    bindable
], UxTag.prototype, "theme", void 0);
__decorate([
    bindable
], UxTag.prototype, "type", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], UxTag.prototype, "value", void 0);
UxTag = __decorate([
    inject(Element, ViewResources, StyleEngine),
    customElement('ux-tag'),
    processAttributes(processDesignAttributes)
], UxTag);
export { UxTag };