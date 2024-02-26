import { Variant } from "../../core/types/common";
import { DisabledButton, EnabledButton, IButtonState } from "./button.states";
import { Element, IElement } from "../../core/abstractions/element";

export interface IButton extends IElement {

    setState(newState: IButtonState): void;
}

export abstract class Button extends Element<Button> implements IButton {

    variant!: Variant;
    state!: IButtonState;

    protected constructor() {
        super();
    }
    
    setState(newState: IButtonState) {
        this.state = newState
    }

    protected initialize(): void {
        this.buildStyle();
        this.setState(this.enabled ?
            new EnabledButton(this) : new DisabledButton(this)
        )
    }

    protected setBase() {

        if (this.override) {
            this.addClass(this.className);
            return;
        }
        else {
            if (this.padding) {
                this.addClass(this.padding);
            }
            else {
                this.addClass(
                    this.ds.spacing.padding["p-3"],
                    this.ds.spacing.padding["py-1.5"]
                );
            }
            if (this.width) {
                this.addClass(this.width);
            }
            else {
                this.addClass(
                    this.ds.sizing.width["w-full"]
                );
            }
            if (this.margin) {
                this.addClass(this.margin);
            }

            this.addClass(
                this.ds.layout.position.relative,
                this.ds["flex-n-grid"].gap["gap-1.5"],
                this.ds.layout.display["inline-flex"],
                this.ds.layout.overflow["overflow-hidden"],
                this.ds.typography["text-wrap"]["text-nowrap"],
                this.ds.typography["font-weight"]["font-semibold"],
                this.ds["flex-n-grid"]["justify-content"]["justify-center"],
            );
        }

        this.addClass(this.className)
    }

    protected buildStyle() {
        this.setBase();

        if (!this.override) {
            switch (this.variant) {
                case "text": this.buildTextVariant()
                    break;
                case "filled": this.buildFilledVariant()
                    break;
                case "outlined": this.buildOutlinedVariant()
                    break;
            }
        }
    }

    protected buildFilledVariant() {

        this.addClass(
            this.ds.backgrounds["bg-color"]["bg-indigo-800"],
            this.ds.typography["text-color"]["text-neutral-200"]
        );
    }

    protected buildOutlinedVariant() {

        this.addClass(
            this.ds.borders["outline-style"].outline,
            this.ds.borders["outline-width"]["outline-1"],
            this.ds.borders["outline-color"]['outline-neutral-400'],
            this.ds.borders["outline-color"]['dark:outline-neutral-600'],
            this.ds.typography["text-color"]["text-neutral-800"],
            this.ds.typography["text-color"]["dark:text-neutral-200"],
        );
    }

    protected buildTextVariant() {

        this.addClass(
            this.ds.typography["text-color"]["text-neutral-800"],
            this.ds.typography["text-color"]["dark:text-neutral-200"],
        );
    }
}