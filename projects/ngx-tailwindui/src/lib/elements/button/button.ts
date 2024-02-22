import { Variant } from "../../core/types/common";
import { ButtonState } from "./button-states";
import { IElement } from "../../core/shared/abstractions/element";
import { TemplateRef } from "@angular/core";

export interface IButton extends IElement<IButton> {
    variant: Variant,
    textContent: string,
}

export abstract class Button implements IButton {

    state!: ButtonState;
    style: string[] = [];
    variant!: Variant;
    className!: string;
    padding!: string;
    override!: boolean;
    textContent!: string;
    enabled!: boolean;
    margin!: string;
    width!: string;
    height!: string;
    templateRef!: TemplateRef<IButton>;

    protected constructor () { }

    hasClass(className: string): boolean {
        return (this.className.search(className) === 0);
    }

    addClass(...arg: string[]): void {
        arg.forEach(c => {
            if (!this.hasClass(`/${c}/`)) {
                this.style.push(c)
            }
        })
    }

    removeClass(...arg: string[]): void {
        arg.forEach(classToRemove => {
            this.style = this.style.filter((c) => c !== classToRemove)
        })
    }

    changeState(newState: ButtonState) {
        this.state = newState
    }
}
