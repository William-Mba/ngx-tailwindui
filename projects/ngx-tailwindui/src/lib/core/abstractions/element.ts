import { TemplateRef } from "@angular/core";
import { Width } from "../types/sizing/width";
import { Height } from "../types/sizing/height";
import { Margin } from "../types/spacing/margin";
import { Padding } from "../types/spacing/padding";
import { Size } from "../types/sizing/size";
import { Color } from "../types/colors-palette";
import { BgColor } from "../types/backgrounds/background-color";
import { BorderRadius } from "../types/borders/border-radius";

export interface IElement {
    addClass(...arg: string[]): void,
    removeClass(...arg: string[]): void
    hasClass(className: string): boolean,
}

export abstract class Element<T> implements IElement {
    size!: Size;
    color!: Color;
    width!: Width;
    height!: Height;
    margin!: Margin;
    border!: string;
    bgColor!: BgColor;
    padding!: Padding;
    className!: string
    override!: boolean;
    shape!: BorderRadius;
    textContent!: string;
    classNames: string[] = [];
    enabled: boolean = true;
    templateRef!: TemplateRef<T>;

    hasClass(className: string): boolean {
        return (this.className.search(className) === 0);
    }

    addClass(...arg: string[]): void {
        arg.forEach(c => {
            if (!this.hasClass(`/${c}/`)) {
                this.classNames.push(c)
            }
        })
    }

    removeClass(...arg: string[]): void {
        arg.forEach(classToRemove => {
            this.classNames = this.classNames
                .filter((c) => c !== classToRemove)
        })
    }
}