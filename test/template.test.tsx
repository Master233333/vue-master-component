import {Component, Prop, Vue} from "vue-property-decorator";
import Template from "@/template";

@Component
export default class TemplateTest extends Vue {

  public render() {
   return <div>
     <Template>
       <div>321</div>
       <div>321</div>
     </Template>
   </div>
  }
}
