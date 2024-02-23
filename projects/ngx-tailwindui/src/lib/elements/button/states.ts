import { Button } from "./button";
import {
    IEnabled,
    IDisabled,
    IHovered,
    IFocused,
    IClicked
} from "../../core/abstractions/states";

export interface IEnabledButton extends
    IEnabled,
    IDisabled,
    IHovered,
    IClicked,
    IFocused { }

export interface IHoveredButton extends IHovered, IClicked { }

export interface IClickedButton extends IHovered, IClicked, IFocused { }

export interface IFocusedButton extends IClicked, IFocused { }

export interface IDisabledButton extends IDisabled { }

export interface IButtonState extends
    IEnabledButton,
    IHoveredButton,
    IClickedButton,
    IFocusedButton,
    IDisabledButton { }

export abstract class ButtonState implements IButtonState {

    constructor (protected button: Button) { }

    enable(): void { }
    hover(): void { }
    click(): void { }
    focus(): void { }
    disable(): void { }
}

export class EnabledButton extends ButtonState implements IEnabledButton {

    override hover(): void {
        console.log('hovered');
        this.button.changeState(new HoveredButton(this.button))
    }

    override click(): void {
        console.log('clicked');
        this.button.changeState(new ClickedButton(this.button))
    }

    override focus(): void {
        console.log('focused');
        this.button.changeState(new FocusedButton(this.button))
    }

    override disable(): void {
        console.log('disabled');
        this.button.changeState(new DisabledButton(this.button))
    }
}

export class HoveredButton extends ButtonState implements IHoveredButton {

    constructor (btn: Button) {
        super(btn)
        const opacity = this.button.ds.effects.opacity["hover:opacity-85"]
        this.button.addClass(opacity)
    }

    override click(): void {
        const ring = this.button.ds.borders["ring-width"]["active:ring-4"]
        this.button.classNames.push(ring)
        this.button.changeState(new ClickedButton(this.button))
        console.log('clicked');
    }
}

export class ClickedButton extends ButtonState implements IClickedButton {

    constructor (btn: Button) {
        super(btn)
        const opacity = this.button.ds.effects.opacity["opacity-100"]
        const ring = this.button.ds.borders["ring-width"]["focus:ring-2"]
        this.button.addClass(opacity, ring)
    }

    override hover(): void {
        console.log('hovered');
        this.button.changeState(new HoveredButton(this.button))
    }

    override focus(): void {
        console.log('focused');
        this.button.changeState(new FocusedButton(this.button))
    }
}

export class FocusedButton extends ButtonState implements IFocusedButton {

    override click(): void {
        console.log('clicked');
        this.button.changeState(new ClickedButton(this.button))
    }

    override hover(): void {
        console.log('hovered');
        this.button.changeState(new HoveredButton(this.button))
    }
}

export class DisabledButton extends ButtonState implements IDisabledButton {

    constructor (btn: Button) {
        super(btn)
        const opacityOnDisabled = this.button.ds.effects.opacity["opacity-45"]
        const pointerEvents = this.button.ds.interactivity["pointer-events"]["pointer-events-none"]
        this.button.addClass(opacityOnDisabled, pointerEvents)
    }
}