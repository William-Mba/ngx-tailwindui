import { IsAcceptableClass } from "../common/helpers/type.helper";
import { SizeType } from "../config/shared/size.config";

/**ngx-tailwindui elements base class */
export abstract class Element {

    protected size!: SizeType;
    protected disabled!: boolean;
    protected style: string[] = [];
    protected className: string = '';

    abstract init(): void;

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
