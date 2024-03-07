import { OptionsManager } from "../options/options-manager";
import { Size } from "../options/shared/size.options";
import { IsAcceptableClass } from "../shared/helpers/type.helper";

export abstract class Element {

    protected size!: Size;
    protected style: string[] = [];
    protected className: string = '';

    protected init() {
        this.addClass(this.className)
    }

    hasClass(className: string): boolean {
        return (this.className.search(className) === 0);
    }

    addClass(...arg: string[]): void {
        arg.forEach(c => {
            if (!IsAcceptableClass(c)) return

            if (!this.hasClass(`/${c}/`)) {
                this.style.push(c)
            }
        })
    }

    removeClass(...arg: string[]): void {
        arg.forEach(classToRemove => {
            this.style = this.style
                .filter((c) => c !== classToRemove)
        })
    }
}
