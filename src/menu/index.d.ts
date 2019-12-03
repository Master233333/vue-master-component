import { Component as TsComponent } from "vue-tsx-support";
import Vue, { VNode, ComponentOptions, AsyncComponent } from "vue";
import Router, { RouteConfig, RouterOptions } from 'vue-router';
export declare function createRoutes(menuConfig: MenuConfig[]): RouteConfig[];
export declare function createRouter(menuConfig: MenuConfig[], options?: RouterOptions): Router;
export interface MenuConfig {
    name: string;
    title?: string | VNode;
    subMenu?: MenuConfig[];
    showInMenu?: () => boolean | boolean;
    component?: ComponentOptions<Vue> | typeof Vue | AsyncComponent;
    params?: Array<string>;
}
interface IRouterMenu {
    menuConfig: MenuConfig[];
    mode?: string;
}
export default class RouterMenu extends TsComponent<IRouterMenu> {
    menuConfig: MenuConfig[];
    mode: string;
    handleClick(e: any): void;
    renderMenuItem(config: MenuConfig, ...name: string[]): "" | JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
