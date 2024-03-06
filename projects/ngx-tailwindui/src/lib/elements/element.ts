import { Shape } from "../options/shared/shape.options";
import { Size } from "../options/shared/size.options";
import { IsAcceptableClass } from "../shared/helpers/type.helper";

export interface IElement {
    addClass(...arg: string[]): void,
    removeClass(...arg: string[]): void
    hasClass(className: string): boolean,
}

export abstract class Element implements IElement {

    size!: Size;
    rounded!: Shape;
    style: string[] = [];
    className: string = '';

    protected init() {
        this.addClass(
            this.size ? this.size : '',
            this.rounded ? this.rounded : '',
            this.className ? this.className : ''
        )
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
