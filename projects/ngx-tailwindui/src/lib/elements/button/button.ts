import { Variant } from "../../core/types/common";
import { IButtonState } from "./button.states";
import { Element, IElement } from "../../core/abstractions/element";
import { DesignSystem } from "../../core/design-system/design-system";

export interface IButton extends IElement, IButtonState {

    setState(newState: IButtonState): void;
}

export abstract class Button extends Element<Button> implements IButton {

    variant!: Variant;
    state!: IButtonState;
    ds = DesignSystem;

    enable(): void {
        this.state.enable()
    }

    hover(): void {
        this.state.hover()
    }

    press(): void {
        this.state.press()
    }

    focus(): void {
        this.state.focus()
    }
    
    disable(): void {
        this.state.disable()
    }

    setState(newState: IButtonState) {
        this.state = newState
    }
}