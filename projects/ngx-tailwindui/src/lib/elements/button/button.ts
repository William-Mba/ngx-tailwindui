import { Variant } from "../../core/types/common";
import { IButtonState } from "./button.states";
import { Element, IElement } from "../../core/abstractions/element";
import { DesignSystem } from "../../core/design-system/design-system";

export interface IButton extends IElement {

    setState(newState: IButtonState): void;
}

export abstract class Button extends Element<Button> implements IButton {

    variant!: Variant;
    state!: IButtonState;
    ds = DesignSystem;

    setState(newState: IButtonState) {
        this.state = newState
    }
}