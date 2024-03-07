import { Element } from "../element";
import { ButtonVariant } from "../../options/button.options";
import { ToClassName } from "../../shared/helpers/object.helper";
import { OptionsManager } from "../../options/options-manager";

export abstract class Button extends Element {

    disabled!: boolean;
    variant!: ButtonVariant;
    textContent!: string;
    options = OptionsManager.button;
    
    setup(): void {
        this.init();

        // base, also for text variant
        this.addClass(
            ToClassName(this.options.base!),
            ToClassName([this.options.size![this.size]!.rounded]),
            ToClassName([this.options.size![this.size]!.padding]),
            ToClassName([this.options.size![this.size]!.textSize])
        );

        // variants
        if (this.variant === 'filled') {
            this.addClass(ToClassName(this.options.variant!.filled!));
        }
        if (this.variant === 'outlined') {
            this.addClass(ToClassName(this.options.variant!.outlined!));
        }

        if (this.disabled) {
            this.addClass(ToClassName(this.options.disabled!));
        }
    }
}