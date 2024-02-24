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

        const transition = this.button.ds.behaviors["transition-property"]["hover:transition"]
        const transitionDelay = this.button.ds.behaviors["transition-delay"]["hover:delay-150"]
        const transitionDuration = this.button.ds.behaviors["transition-duration"]["duration-150"]
        const translate = this.button.ds.transforms.translate["hover:-translate-y-0.5"]
        const scale = this.button.ds.transforms.scale["hover:scale-105"]
        const transitionTimingFunc = this.button.ds.behaviors["transition-timing-function"]["ease-in-out"]

        const opacity = this.button.ds.effects.opacity["hover:opacity-85"]
        const shadow = this.button.ds.effects["box-shadow"]["hover:shadow-xl"]
        const shadowColor = this.button.ds.effects["box-shadow-color"]["hover:shadow-neutral-900"]

        this.button.addClass(
            transition,
            transitionDelay,
            transitionDuration,
            transitionTimingFunc,
            translate,
            scale,
            opacity,
            shadow,
            shadowColor
        )
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
        const opacityOnDisabled = this.button.ds.effects.opacity["opacity-35"]
        const pointerEvents = this.button.ds.interactivity["pointer-events"]["pointer-events-none"]
        this.button.addClass(opacityOnDisabled, pointerEvents)
    }
}