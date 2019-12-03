import Vue, {CreateElement} from "vue";
import {VNode} from "vue/types/vnode";

export function newInstance(vNode: (h: CreateElement) => VNode): Element {
  const div = document.createElement('div');
  new Vue({
    el: div,
    render(h: CreateElement) {
      return vNode(h);
    }
  });
  return div;
}
