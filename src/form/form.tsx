import {Component} from "vue-property-decorator";
import {Component as TsComponent} from "vue-tsx-support";

@Component
export default class Form extends TsComponent<any> {
  public render() {
    return (
      <form>
      </form>
    )
  }
}
