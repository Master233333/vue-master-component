import "ant-design-vue/es/modal/style";
import _Modal from "ant-design-vue/es/modal";
import { newInstance } from "../modal";
let dom = null;
export function showModal() {
  const modal = h => {
    return h(_Modal, [h("input"), h("input")]);
  };

  dom = newInstance(modal);
}
export function closeModal() {
  if (dom) {
    dom.remove();
  }
}