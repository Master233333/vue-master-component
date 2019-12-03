import { Component as TsComponent } from "vue-tsx-support";
import { TemplateProps } from "../../types/template";
import { CreateElement, Component as VueComponent } from "vue";
export default class Template extends TsComponent<TemplateProps> {
    mif: boolean;
    tag: string | VueComponent;
    render(h: CreateElement): import("vue").VNode | import("vue").VNode[] | undefined;
}
