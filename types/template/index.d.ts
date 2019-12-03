import { Component as TsComponent } from "vue-tsx-support";
import { CreateElement, Component as VueComponent } from "vue";
export interface TemplateProps {
    mif?: boolean;
    tag?: string;
}
export default class Template extends TsComponent<TemplateProps> {
    mif: boolean;
    tag: string | VueComponent;
    render(h: CreateElement): import("vue").VNode | import("vue").VNode[] | undefined;
}
