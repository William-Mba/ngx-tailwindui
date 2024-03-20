import { mergeConfig } from "../common/helpers/object.helper";
import { ButtonConfig } from "./elements/button.config";
import { RippleConfig } from "./animations/ripple.config";

export abstract class ConfigurationManager {
    private static buttonConfig: ButtonConfig = ButtonConfig;
    private static rippleConfig: RippleConfig = RippleConfig;

    /**
     * @returns Button configurations
     */
    static get button() {
        return this.buttonConfig
    }

    /**
     * @returns Ripple configurations
     */
    static get ripple() {
        return this.rippleConfig
    }

    /**Set Button configurations */
    static setButton(config: ButtonConfig) {
        const currentConfig = this.buttonConfig;
        this.buttonConfig = mergeConfig(currentConfig, config)

        return this;
    }

    /**Set Ripple configrations */
    static setRipple(config: RippleConfig) {
        const currentConfig = this.rippleConfig;
        this.rippleConfig = mergeConfig(currentConfig, config)

        return this;
    }
}