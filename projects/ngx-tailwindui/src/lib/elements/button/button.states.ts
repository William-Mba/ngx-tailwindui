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
        this.button.setState(new HoveredButton(this.button));
    }

    override click(): void {
        this.button.setState(new ClickedButton(this.button));
    }

    override focus(): void {
        this.button.setState(new FocusedButton(this.button));
    }

    override disable(): void {
        this.button.setState(new DisabledButton(this.button));
    }
}

export class HoveredButton extends ButtonState implements IHoveredButton {

    constructor (btn: Button) {
        super(btn);

        if (this.button.variant === 'text') {
            const borderColorHover = this.button.ds.borders["border-color"]["hover:border-neutral-800"];
            const borderColorDarkHover = this.button.ds.borders["border-color"]["dark:hover:border-neutral-800"];
            const borderOpacityHover = this.button.ds.borders["border-opacity"]["hover:border-opacity-25"];
            const borderOpacityDarkHover = this.button.ds.borders["border-opacity"]["dark:hover:border-opacity-90"];

            this.button.addClass(
                borderColorHover,
                borderColorDarkHover,
                borderOpacityHover,
                borderOpacityDarkHover
            );
        }

        const transition = this.button.ds.behaviors["transition-property"]["hover:transition"];
        const transitionDelay = this.button.ds.behaviors["transition-delay"]["hover:delay-100"];
        const transitionDuration = this.button.ds.behaviors["transition-duration"]["duration-150"];
        const translate = this.button.ds.transforms.translate["hover:translate-y-0.5"];
        const scale = this.button.ds.transforms.scale["hover:scale-100"];
        const transitionTimingFunc = this.button.ds.behaviors["transition-timing-function"]["ease-in-out"];

        const opacity = this.button.ds.effects.opacity["hover:opacity-80"];
        const shadow = this.button.ds.effects["box-shadow"]["hover:shadow-md"];
        const shadowColor = this.button.ds.effects["box-shadow-color"]["hover:shadow-neutral-300"];
        const shadowColorDark = this.button.ds.effects["box-shadow-color"]["dark:hover:shadow-neutral-900"];

        this.button.addClass(
            opacity,
            shadow,
            shadowColor,
            shadowColorDark
        );
    }

    override click(): void {
        this.button.setState(new ClickedButton(this.button));
    }

    override focus(): void {
        this.button.setState(new FocusedButton(this.button));
    }
}

export class ClickedButton extends ButtonState implements IClickedButton {

    constructor (btn: Button) {
        super(btn);

        const outlineStyle = this.button.ds.borders["outline-style"]["focus:outline"]
        const outlineWidth = this.button.ds.borders["outline-width"]["focus:outline-1"];
        const outlineColor = this.button.ds.borders["outline-color"]['focus:outline-neutral-600'];
        const outlineColorDark = this.button.ds.borders["outline-color"]['dark:focus:outline-neutral-400'];

        this.button.addClass(outlineStyle, outlineWidth, outlineColor, outlineColorDark);
    }

    override hover(): void {
        this.button.setState(new HoveredButton(this.button));
    }

    override focus(): void {
        this.button.setState(new FocusedButton(this.button));
    }
}

export class FocusedButton extends ButtonState implements IFocusedButton {

    override click(): void {
        this.button.setState(new ClickedButton(this.button));
    }

    override hover(): void {
        this.button.setState(new HoveredButton(this.button));
    }
}

export class DisabledButton extends ButtonState implements IDisabledButton {

    constructor (btn: Button) {
        super(btn);

        const opacity = this.button.ds.effects.opacity["opacity-40"];
        const pointerEvents = this.button.ds.interactivity["pointer-events"]["pointer-events-none"];

        this.button.addClass(opacity, pointerEvents);
    }
}