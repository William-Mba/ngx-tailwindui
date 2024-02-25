import { Button } from "./button";
import {
    IEnabled,
    IDisabled,
    IHovered,
    IFocused,
    IPressed
} from "../../core/abstractions/states";
import { DesignSystem } from "../../core/design-system/design-system";

export interface IEnabledButton extends
    IEnabled,
    IDisabled,
    IHovered,
    IPressed,
    IFocused { }

export interface IHoveredButton extends IHovered, IPressed { }

export interface IPressedButton extends IHovered, IPressed, IFocused { }

export interface IFocusedButton extends IPressed, IFocused { }

export interface IDisabledButton extends IDisabled { }

export interface IButtonState extends
    IEnabledButton,
    IHoveredButton,
    IPressedButton,
    IFocusedButton,
    IDisabledButton { }

export abstract class ButtonState implements IButtonState {
    protected ds = DesignSystem

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
        this.button.setState(new PressedButton(this.button));
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
            const borderColorHover = this.ds.borders["border-color"]["hover:border-neutral-800"];
            const borderColorDarkHover = this.ds.borders["border-color"]["dark:hover:border-neutral-800"];
            const borderOpacityHover = this.ds.borders["border-opacity"]["hover:border-opacity-25"];
            const borderOpacityDarkHover = this.ds.borders["border-opacity"]["dark:hover:border-opacity-90"];

            this.button.addClass(
                borderColorHover,
                borderColorDarkHover,
                borderOpacityHover,
                borderOpacityDarkHover
            );
        }

        const transition = this.ds.behaviors["transition-property"]["hover:transition"];
        const transitionDelay = this.ds.behaviors["transition-delay"]["hover:delay-100"];
        const transitionDuration = this.ds.behaviors["transition-duration"]["duration-150"];
        const translate = this.ds.transforms.translate["hover:translate-y-0.5"];
        const scale = this.ds.transforms.scale["hover:scale-100"];
        const transitionTimingFunc = this.ds.behaviors["transition-timing-function"]["ease-in-out"];

        const opacity = this.ds.effects.opacity["hover:opacity-80"];
        const shadow = this.ds.effects["box-shadow"]["hover:shadow-md"];
        const shadowColor = this.ds.effects["box-shadow-color"]["hover:shadow-neutral-300"];
        const shadowColorDark = this.ds.effects["box-shadow-color"]["dark:hover:shadow-neutral-900"];

        this.button.addClass(
            opacity,
            shadow,
            shadowColor,
            shadowColorDark
        );
    }

    override click(): void {
        this.button.setState(new PressedButton(this.button));
    }

    override focus(): void {
        this.button.setState(new FocusedButton(this.button));
    }
}

export class PressedButton extends ButtonState implements IPressedButton {

    constructor (btn: Button) {
        super(btn);

        const outlineStyle = this.ds.borders["outline-style"]["focus:outline"]
        const outlineWidth = this.ds.borders["outline-width"]["focus:outline-1"];
        const outlineColor = this.ds.borders["outline-color"]['focus:outline-neutral-600'];
        const outlineColorDark = this.ds.borders["outline-color"]['dark:focus:outline-neutral-400'];

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
        this.button.setState(new PressedButton(this.button));
    }

    override hover(): void {
        this.button.setState(new HoveredButton(this.button));
    }
}

export class DisabledButton extends ButtonState implements IDisabledButton {

    constructor (btn: Button) {
        super(btn);

        const opacity = this.ds.effects.opacity["opacity-40"];
        const pointerEvents = this.ds.interactivity["pointer-events"]["pointer-events-none"];

        this.button.addClass(opacity, pointerEvents);
    }
}