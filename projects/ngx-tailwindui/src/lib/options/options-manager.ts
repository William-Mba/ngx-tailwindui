import { Injectable } from "@angular/core";
import { mergeDeep } from "../shared/helpers/object.helper";
import { ButtonOptions } from "./button.options";

@Injectable({
    providedIn: 'root'
})
export class OptionsManager {
    private buttonOptions = ButtonOptions;

    /**@returns Configured button options */
    get button() {
        return this.buttonOptions
    }

    configure(options: ButtonOptions) {
        this.buttonOptions = mergeDeep(this.buttonOptions, options)

        return this;
    }
}