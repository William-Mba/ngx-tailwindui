import { Element } from "../element";
import { ButtonOptions, ButtonVariant } from "../../options/button.options";
import { ToClassName } from "../../shared/helpers/object.helper";

export abstract class Button extends Element {

    variant!: ButtonVariant;
    textContent!: string;
    protected options!: ButtonOptions;

    setup(): void {
        this.init();

        // base, equals text variant
        this.addClass(
            ToClassName(this.options.base),
            ToClassName([this.options.rounded[this.rounded]]),
            ToClassName([this.options.size[this.size].padding]),
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