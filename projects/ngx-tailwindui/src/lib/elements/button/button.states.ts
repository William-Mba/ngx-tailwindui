import { Button } from "./button";
import { IEnabled, IDisabled, IHovered, IFocused, IPressed } from "../../core/abstractions/states";

export interface IEnabledButton extends
    IEnabled, IHovered, IPressed, IFocused, IDisabled { }

export interface IHoveredButton extends IHovered, IPressed { }

export interface IPressedButton extends IPressed, IHovered, IFocused { }

export interface IFocusedButton extends IFocused, IHovered, IPressed { }

export interface IDisabledButton extends IDisabled { }

export interface IButtonState extends
    IEnabledButton, IHoveredButton, IPressedButton, IFocusedButton, IDisabledButton { }

export abstract class ButtonState implements IButtonState {

    constructor(protected button: Button) { }

    enable(): void { }
    abstract hover(): void;
    abstract press(): void;
    abstract focus(): void;
    disable(): void { }
}

export class EnabledButton extends ButtonState implements IEnabledButton {

    override hover(): void {
        this.button.setState(new HoveredButton(this.button));
    }
    override press(): void {
        this.button.setState(new PressedButton(this.button));
    }
    override focus(): void {
        this.button.setState(new FocusedButton(this.button));
    }
}

export class HoveredButton extends ButtonState implements IHoveredButton {

    constructor(btn: Button) {
        super(btn);
        if (this.button.variant === 'text') {

            this.button.addClass(
                this.button.ds.borders["border-color"]["hover:border-neutral-800"],
                this.button.ds.borders["border-color"]["dark:hover:border-neutral-800"],
                this.button.ds.borders["border-opacity"]["hover:border-opacity-25"],
                this.button.ds.borders["border-opacity"]["dark:hover:border-opacity-90"]
            );
        }

        this.button.addClass(
            this.button.ds.effects.opacity["hover:opacity-80"],
            this.button.ds.effects["box-shadow"]["hover:shadow-md"],
            this.button.ds.effects["box-shadow-color"]["hover:shadow-neutral-300"],
            this.button.ds.effects["box-shadow-color"]["dark:hover:shadow-neutral-900"]
        );
    }

    override hover(): void { }

    override press(): void {
        this.button.setState(new PressedButton(this.button));
    }
    override focus(): void {
        this.button.setState(new FocusedButton(this.button));
    }
}

export class PressedButton extends ButtonState implements IPressedButton {

    constructor(btn: Button) {
        super(btn);

        this.button.addClass(
            this.button.ds.borders["outline-style"]["focus:outline"],
            this.button.ds.borders["outline-width"]["focus:outline-1"],
            this.button.ds.borders["outline-color"]['focus:outline-neutral-600'],
            this.button.ds.borders["outline-color"]['dark:focus:outline-neutral-400']
        );
    }

    override hover(): void {
        this.button.setState(new HoveredButton(this.button));
    }
    override press(): void { }

    override focus(): void {
        this.button.setState(new FocusedButton(this.button));
    }
}

export class FocusedButton extends ButtonState implements IFocusedButton {

    override hover(): void {
        this.button.setState(new HoveredButton(this.button));
    }
    override press(): void {
        this.button.setState(new PressedButton(this.button));
    }
    override focus(): void { }
}

export class DisabledButton extends ButtonState implements IDisabledButton {

    constructor(btn: Button) {
        super(btn);

        this.button.addClass(
            this.button.ds.effects.opacity["opacity-40"],
            this.button.ds.interactivity["pointer-events"]["pointer-events-none"]
        );
    }
    override hover(): void { }
    override press(): void { }
    override focus(): void { }
}