import Vue from "vue";
export function newInstance(vNode, data) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  new Vue({
    el: div,
    data: data,

    render(h) {
      return vNode(h);
    }

  });
  return div;
}