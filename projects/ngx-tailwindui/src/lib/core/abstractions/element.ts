import { TemplateRef } from "@angular/core";

export interface IElement<T> {
    width: string,
    height: string,
    margin: string,
    padding: string,
    enabled: boolean,
    className: string,
    override: boolean,
    classNames: string[],
    templateRef: TemplateRef<T>;
    addClass(...arg: string[]): void,
    removeClass(...arg: string[]): void
    hasClass(className: string): boolean,
}