import "ant-design-vue/es/modal/style";
import _Modal from "ant-design-vue/es/modal";
import Vue from "vue";
let modal = null;
export function showModal() {
  if (modal) {
    modal.$data.visible = true;
    return;
  }

  const div = document.createElement('div');
  document.body.appendChild(div);

  function render() {
    return new Vue({
      el: div,

      data() {
        return {
          visible: true
        };
      },

      render() {
        const h = arguments[0];
        // @ts-ignore
        return h(_Modal, {
          "attrs": {
            "title": "123"
          },
          "model": {
            value: this.visible,
            callback: $$v => {
              this.visible = $$v;
            }
          }
        }, [h("input"), h("input")]);
      }

    });
  }

  modal = render();
  return {
    close: () => modal.$data.visible = false
  };
}