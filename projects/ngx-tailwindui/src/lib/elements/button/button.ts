import { Variant } from "../../core/types/common";
import { Element } from "../../core/abstractions/element";
import { ToClassName } from "../../core/helpers/string.helper";
import { IButtonOptions } from "../../options/elements/button.options";

export abstract class Button extends Element {

    variant!: Variant;
    textContent!: string;
    protected options!: IButtonOptions;

    setup(): void {
        this.init();

        // base
        this.addClass(
            ToClassName(this.options.base),
            this.options.rounded[this.rounded],
            this.options.size[this.size].padding,
            this.options.size[this.size].textSize,
        )

        // variants
        if (this.variant === 'filled') {
            this.addClass(ToClassName(this.options.variant.filled))
        }
        if (this.variant === 'outlined') {
            this.addClass(ToClassName(this.options.variant.outlined))
        }
    }
}