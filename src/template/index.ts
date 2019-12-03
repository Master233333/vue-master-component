import {Component, Prop} from "vue-property-decorator";
import {Component as TsComponent} from "vue-tsx-support";
import {CreateElement, Component as VueComponent} from "vue";

export interface TemplateProps {
  mif?: boolean;
  tag?: string;
}

@Component
export default class Template extends TsComponent<TemplateProps> {
  @Prop({
    default: true,
  })
  public mif!: boolean;
  @Prop()
  public tag!: string | VueComponent;
  public render(h: CreateElement) {
    const {mif, tag} = this;
    const child = this.$slots.default;
    console.log(`template get props: {is: ${mif}, tag: ${tag}}, child: ${child}`);
    if (!mif) {
      return ;
    }
    if (tag) {
      return h(tag, child);
    }
    if (child && child.length > 1) {
      console.error('Template: Can not return more than one child node!');
      return ;
    }
    return child;
  }
}
