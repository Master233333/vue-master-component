import Vue, {CreateElement} from "vue";
import {Modal} from "ant-design-vue";

let modal: any = null;

export function showModal() {
  if (modal) {
    modal.$data.visible = true;
    return ;
  }
  const div = document.createElement('div');
  document.body.appendChild(div);
  function render() {
    return new Vue({
      el: div,
      data() {
        return {visible: true}
      },
      render() {
        // @ts-ignore
        return <Modal v-model={this.visible} title="123" >
          <input />
          <input />
        </Modal>
      },
    });
  }
  modal = render();
  return {
    close: () => modal.$data.visible = false,
  }
}
