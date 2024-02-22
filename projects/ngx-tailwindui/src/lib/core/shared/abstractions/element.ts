import { TemplateRef } from "@angular/core";
import { State } from "./state";

export interface IElement<T> {
    state: State,
    width: string,
    height: string,
    margin: string,
    style: string[],
    padding: string,
    enabled: boolean,
    className: string,
    override: boolean,
    templateRef: TemplateRef<T>;
    addClass(...arg: string[]): void,
    removeClass(...arg: string[]): void
    hasClass(className: string): boolean,
}