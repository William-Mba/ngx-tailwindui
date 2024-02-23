import { Variant } from "../../core/types/common";
import { IElement } from "../../core/shared/abstractions/element";
import { TemplateRef } from "@angular/core";
import { DesignSystem } from "../../core/shared/styles/design-system";
import { IButtonState } from "./states";

export interface IButton extends IElement<IButton> {
    variant: Variant,
    textContent: string,
}

export abstract class Button implements IButton {
    state!: IButtonState;
    variant!: Variant;
    className!: string;
    padding!: string;
    override!: boolean;
    textContent!: string;
    enabled!: boolean;
    margin!: string;
    width!: string;
    height!: string;
    classNames: string[] = [];
    templateRef!: TemplateRef<IButton>;
    ds = DesignSystem

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

    changeState(newState: IButtonState) {
        this.state = newState
    }

    enable(): void {
        this.state.enable()
    }

    hover(): void {
        this.state.hover()
    }

    click(): void {
        this.state.click()
    }

    focus(): void {
        this.state.focus()
    }
}