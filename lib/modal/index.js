import Vue from "vue";
export function newInstance(vNode) {
  const div = document.createElement('div');
  new Vue({
    el: div,

    render(h) {
      return vNode(h);
    }

  });
  return div;
}