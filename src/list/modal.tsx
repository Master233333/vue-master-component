import {newInstance} from "../modal";
import Vue, {CreateElement} from "vue";
import {Modal} from "ant-design-vue";

let dom: Element | null = null;

export function showModal() {
  Vue.use(Modal);

  const modal = (h: CreateElement) => {
    return (
      <a-modal>
        <input />
        <input />
      </a-modal>
    )
  };

  dom = newInstance(modal);
}

export function closeModal() {
  if (dom) {
    dom.remove();
  }
}
