import {Table} from "ant-design-vue";
import {Component, Prop} from "vue-property-decorator";
import {Component as TsComponent} from "vue-tsx-support";
import Vue from "vue";
import {showModal} from "./modal";

interface TableProps {
  title?: string;
}

Vue.use(Table);

@Component
export class List extends TsComponent<TableProps> {
  @Prop()
  title?: string;

  render() {
    return (
      <div>
        <button onClick={() => showModal()}>添加</button>
        <h3>{this.title}</h3>
        <a-table />
      </div>
    )
  }
}
