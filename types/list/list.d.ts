import { Component as TsComponent } from "vue-tsx-support";
interface TableProps {
    title?: string;
}
export declare class List extends TsComponent<TableProps> {
    title?: string;
    render(): JSX.Element;
}
export {};
