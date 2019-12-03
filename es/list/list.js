import "ant-design-vue/es/table/style";
import _Table from "ant-design-vue/es/table";

var _dec, _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { Component, Prop } from "vue-property-decorator";
import { Component as TsComponent } from "vue-tsx-support";
import Vue from "vue";
import { showModal } from "@/list/modal";
Vue.use(_Table);
export let List = (_dec = Prop(), Component(_class = (_class2 = (_temp = class List extends TsComponent {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "title", _descriptor, this);
  }

  render() {
    const h = arguments[0];
    return h("div", [h("button", {
      "on": {
        "click": () => showModal()
      }
    }, ["\u6DFB\u52A0"]), h("h3", [this.title]), h("a-table")]);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);