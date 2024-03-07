import { mergeDeep } from "../shared/helpers/object.helper";
import { ButtonOptions } from "./button.options";
import { RippleOptions } from "./ripple.options";

export abstract class OptionsManager {
    private static buttonOptions: ButtonOptions = ButtonOptions;
    private static rippleOptions: RippleOptions = RippleOptions;

    /**Get button options
     * @returns Configured options
     */
    static get button() {
        return this.buttonOptions
    }

    /**Get ripple options
     * @returns Configured options
     */
    static get ripple() {
        return this.rippleOptions
    }

    /**Applies configured button options */
    static setButton(options: ButtonOptions) {
        const currentOptions = this.buttonOptions;
        this.buttonOptions = mergeDeep(currentOptions, options)

        return this;
    }

    /**Applies configured ripple options */
    static setRipple(options: RippleOptions) {
        const currentOptions = this.rippleOptions;
        this.rippleOptions = mergeDeep(currentOptions, options)

        return this;
    }
}