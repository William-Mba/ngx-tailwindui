import { Element } from "../element";
import { ConfigurationManager } from "../../config/configuation-manager.service";
import { ButtonVariant } from "../../config/elements/button.config";
import { toClassName } from "../../common/helpers/object.helper";

export abstract class Button extends Element {

    textContent!: string;
    variant!: ButtonVariant;
    config = ConfigurationManager.button;

    init(): void {

        // base and text variant
        this.addClass(
            this.className,
            toClassName(this.config.base!),
            toClassName([this.config.size![this.size]!.rounded]),
            toClassName([this.config.size![this.size]!.padding]),
            toClassName([this.config.size![this.size]!.textSize])
        );

        // variants
        if (this.variant === 'filled') {
            this.addClass(toClassName(this.config.variant!.filled!));
        }
        if (this.variant === 'outlined') {
            this.addClass(toClassName(this.config.variant!.outlined!));
        }

        if (this.disabled) {
            this.addClass(toClassName(this.config.disabled!));
        }
    }
}