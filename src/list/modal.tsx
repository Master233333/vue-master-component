import {newInstance} from "../modal";
import {CreateElement} from "vue";
import {Modal} from "ant-design-vue";

let dom: Element | null = null;

export function showModal() {

  const modal = (h: CreateElement) => {
    return (
      <Modal>
        <input />
        <input />
      </Modal>
    )
  };

  dom = newInstance(modal);
}

export function closeModal() {
  if (dom) {
    dom.remove();
  }
}
