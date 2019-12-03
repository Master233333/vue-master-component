import Vue from "vue";
import {Component} from "vue-property-decorator";
import {Component as TsComponent} from "vue-tsx-support";
import 'vue-tsx-support/enable-check';
import {List} from "../src";

@Component
class App extends TsComponent<never> {
  public render() {
    return (
      <div>
        <List/>
      </div>
    );
  }
}

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
