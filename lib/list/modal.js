import "ant-design-vue/es/modal/style";
import _Modal from "ant-design-vue/es/modal";
import { newInstance } from "../modal";
import Vue from "vue";
let dom = null;
export function showModal() {
  Vue.use(_Modal);

  const modal = h => {
    return h("a-modal", [h("input"), h("input")]);
  };

  dom = newInstance(modal);
}
export function closeModal() {
  if (dom) {
    dom.remove();
  }
}