import Vue, {CreateElement} from "vue";
import {VNode} from "vue/types/vnode";

export function newInstance(vNode: (h: CreateElement) => VNode, data: any): Element {
  const div = document.createElement('div');
  document.body.appendChild(div);
  new Vue({
    el: div,
    data: data,
    render(h: CreateElement) {
      return vNode(h);
    }
  });
  return div;
}
